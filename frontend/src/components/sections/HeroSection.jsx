import React, { useEffect, useRef } from "react";
import Header from "../common/Header";
import heroBackground from "../../assets/hero.png";
import {
  CORNER_POSITIONS,
  FRAME_EDGES,
  FRAME_EDGE_NORMALS,
  FRAME_CORNER_GAP,
  MAX_HOVER_PULL,
  MAX_STRETCH,
  CURSOR_LABELS,
  HERO_ACTIONS,
} from "../../constants/hero";

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function smoothstep(value) {
  const t = clamp(value, 0, 1);
  return t * t * (3 - 2 * t);
}

function getFramePath(rect, pointer, hoverStrength, drag) {
  const paths = FRAME_EDGES.map(([start, end], edgeIndex) => {
    const normal = FRAME_EDGE_NORMALS[edgeIndex];
    const edgeLength = Math.hypot(
      ((end.x - start.x) * rect.width) / 100,
      ((end.y - start.y) * rect.height) / 100
    );
    const points = Array.from({ length: 11 }, (_, sampleIndex) => {
      const t = sampleIndex / 10;
      const baseX = start.x + (end.x - start.x) * t;
      const baseY = start.y + (end.y - start.y) * t;
      const screenX = rect.left + (baseX * rect.width) / 100;
      const screenY = rect.top + (baseY * rect.height) / 100;
      const distanceX = pointer.x - screenX;
      const distanceY = pointer.y - screenY;
      const distance = Math.hypot(distanceX, distanceY);
      const signedDistance = distanceX * normal.x + distanceY * normal.y;
      const hoverInfluence = Math.exp(-((distance / 170) ** 2));
      const hoverDirection = Math.sign(signedDistance) || 1;
      const hoverMagnitude = Math.min(
        MAX_HOVER_PULL,
        Math.max(8, Math.abs(signedDistance))
      );
      const cornerMask =
        smoothstep((t - FRAME_CORNER_GAP) / 0.12) *
        (1 - smoothstep((t - (1 - FRAME_CORNER_GAP - 0.12)) / 0.12));
      let offset =
        hoverDirection * hoverMagnitude * hoverInfluence * hoverStrength;

      if (drag && drag.edgeIndex === edgeIndex) {
        const distanceAlongEdge = Math.abs(t - drag.t) * edgeLength;
        const dragInfluence = Math.exp(-((distanceAlongEdge / 150) ** 2));
        offset += drag.offset * dragInfluence;
      }

      offset *= cornerMask;

      return {
        x: baseX + ((normal.x * offset * 100) / rect.width),
        y: baseY + ((normal.y * offset * 100) / rect.height),
      };
    });

    return points;
  });

  return (
    paths
      .map((points, edgeIndex) => {
        const segments = points.slice(1).map((end, index) => {
          const start = points[index];
          const previous = points[Math.max(0, index - 1)];
          const next = points[Math.min(points.length - 1, index + 2)];
          const control1 = {
            x: start.x + (end.x - previous.x) / 6,
            y: start.y + (end.y - previous.y) / 6,
          };
          const control2 = {
            x: end.x - (next.x - start.x) / 6,
            y: end.y - (next.y - start.y) / 6,
          };

          return `C ${control1.x} ${control1.y}, ${control2.x} ${control2.y}, ${end.x} ${end.y}`;
        });
        const start = points[0];
        const move = edgeIndex === 0 ? `M ${start.x} ${start.y} ` : "";
        return `${move}${segments.join(" ")}`;
      })
      .join(" ") + " Z"
  );
}

function CursorMark({ fill, stroke }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_0_12px_rgba(249,115,22,0.6)]"
    >
      <path
        d="M4 4L14.5 29.5L18.5 18.5L29.5 14.5L4 4Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HeroSection() {
  const frameRef = useRef(null);

  useEffect(() => {
    const frame = frameRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");

    if (!frame || reducedMotion.matches || !finePointer.matches) return undefined;

    const outline = frame.querySelector("[data-wireframe-outline]");
    const hitArea = frame.querySelector("[data-wireframe-hit]");
    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let hoverStrength = 0;
    let targetHoverStrength = 0;
    let hasPointer = false;
    let drag = null;
    let animationFrame = null;

    const animate = () => {
      const rect = frame.getBoundingClientRect();
      pointer.x += (target.x - pointer.x) * 0.2;
      pointer.y += (target.y - pointer.y) * 0.2;
      hoverStrength += (targetHoverStrength - hoverStrength) * 0.12;

      if (drag) {
        drag.offset += (drag.targetOffset - drag.offset) * 0.2;
        if (!drag.isDragging && Math.abs(drag.offset) < 0.1) drag = null;
      }

      const path = getFramePath(rect, pointer, hoverStrength, drag);
      outline.setAttribute("d", path);
      hitArea.setAttribute("d", path);

      if (
        Math.abs(target.x - pointer.x) > 0.1 ||
        Math.abs(target.y - pointer.y) > 0.1 ||
        Math.abs(targetHoverStrength - hoverStrength) > 0.002 ||
        (drag && Math.abs(drag.targetOffset - drag.offset) > 0.1)
      ) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        animationFrame = null;
      }
    };

    const startAnimation = () => {
      if (animationFrame === null) animationFrame = requestAnimationFrame(animate);
    };

    const setPointerTarget = (event) => {
      if (!hasPointer) {
        pointer.x = event.clientX;
        pointer.y = event.clientY;
        hasPointer = true;
      }
      target.x = event.clientX;
      target.y = event.clientY;
      startAnimation();
    };

    const handlePointerMove = (event) => {
      setPointerTarget(event);

      if (drag && drag.isDragging) {
        const normal = FRAME_EDGE_NORMALS[drag.edgeIndex];
        const distance =
          (event.clientX - drag.startX) * normal.x +
          (event.clientY - drag.startY) * normal.y;
        drag.targetOffset = clamp(distance, -MAX_STRETCH, MAX_STRETCH);
      } else {
        targetHoverStrength = 1;
      }
      startAnimation();
    };

    const handlePointerDown = (event) => {
      if (event.button !== 0 || drag) return;

      const rect = frame.getBoundingClientRect();
      const edges = [
        {
          edgeIndex: 0,
          distance: Math.abs(event.clientY - rect.top),
          t: (event.clientX - rect.left) / rect.width,
        },
        {
          edgeIndex: 1,
          distance: Math.abs(event.clientX - rect.right),
          t: (event.clientY - rect.top) / rect.height,
        },
        {
          edgeIndex: 2,
          distance: Math.abs(event.clientY - rect.bottom),
          t: (rect.right - event.clientX) / rect.width,
        },
        {
          edgeIndex: 3,
          distance: Math.abs(event.clientX - rect.left),
          t: (rect.bottom - event.clientY) / rect.height,
        },
      ].sort((a, b) => a.distance - b.distance);
      const edge = edges[0];

      if (edge.t <= FRAME_CORNER_GAP || edge.t >= 1 - FRAME_CORNER_GAP) return;

      event.preventDefault();
      setPointerTarget(event);
      targetHoverStrength = 0;
      drag = {
        edgeIndex: edge.edgeIndex,
        t: edge.t,
        startX: event.clientX,
        startY: event.clientY,
        offset: 0,
        targetOffset: 0,
        isDragging: true,
        pointerId: event.pointerId,
      };
      hitArea.setPointerCapture(event.pointerId);
      hitArea.style.cursor = "grabbing";
      startAnimation();
    };

    const handlePointerUp = (event) => {
      if (!drag || drag.pointerId !== event.pointerId) return;

      drag.isDragging = false;
      drag.targetOffset = 0;
      targetHoverStrength = 0;
      hitArea.style.cursor = "grab";
      startAnimation();
    };

    const handlePointerOut = (event) => {
      if (event.relatedTarget !== null || (drag && drag.isDragging)) return;

      hasPointer = false;
      targetHoverStrength = 0;
      startAnimation();
    };

    const handleBlur = () => {
      hasPointer = false;
      targetHoverStrength = 0;
      if (drag) {
        drag.isDragging = false;
        drag.targetOffset = 0;
      }
      hitArea.style.cursor = "grab";
      startAnimation();
    };

    hitArea.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
    window.addEventListener("pointerout", handlePointerOut);
    window.addEventListener("blur", handleBlur);

    return () => {
      hitArea.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
      window.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("blur", handleBlur);
      if (animationFrame !== null) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16"
      id="home"
    >
      <Header />

      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Aurora Blend Background"
          className="w-full h-full object-cover transition-opacity duration-700"
        />
      </div>

      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div
          ref={frameRef}
          className="relative mx-auto w-full px-5 py-9 sm:px-10 sm:py-12 md:px-14 md:py-14 lg:px-16 lg:py-16"
        >
          <svg
            className="absolute inset-0 w-full h-full overflow-visible"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              data-wireframe-outline
              d="M 0 0 L 100 0 L 100 100 L 0 100 Z"
              fill="none"
              stroke="rgba(173, 198, 255, 0.2)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              pointerEvents="none"
            />
            <path
              data-wireframe-hit
              d="M 0 0 L 100 0 L 100 100 L 0 100 Z"
              fill="none"
              stroke="transparent"
              strokeWidth="16"
              vectorEffect="non-scaling-stroke"
              pointerEvents="stroke"
              className="cursor-grab"
            />
          </svg>

          {CORNER_POSITIONS.map((position) => (
            <div
              className={`absolute ${position} z-10 text-primary drop-shadow-[0_0_8px_rgba(173,198,255,0.6)] pointer-events-none`}
              key={position}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  d="M12 4V20M4 12H20"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              </svg>
            </div>
          ))}

          <div className="flex justify-center mb-5 sm:mb-6">
            <div
              className="inline-flex max-w-full items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 rounded-full border border-white/20 shadow-lg bg-surface-container/40 backdrop-blur-xl"
              style={{
                boxShadow:
                  "rgba(255, 255, 255, 0.1) 0px 1px 1px inset, rgba(0, 0, 0, 0.4) 0px -1px 1px inset, rgba(0, 0, 0, 0.4) 0px 4px 20px",
              }}
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span
                className="text-on-surface font-medium text-[9.5px] sm:text-[11px] tracking-[0.07em] sm:tracking-[0.1em] uppercase leading-tight text-center"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Pioneering Next-Gen Digital Infrastructure
              </span>
            </div>
          </div>

          <div className="text-center mx-auto max-w-container-max">
            <div className="absolute inset-0 pointer-events-none z-20 overflow-visible">
              {CURSOR_LABELS.map((item) => (
                <div
                  className={`absolute ${item.className} items-center gap-2 animate-bounce`}
                  style={{ animationDuration: item.duration, animationDelay: item.delay }}
                  key={item.label}
                >
                  <CursorMark fill={item.cursorFill} stroke={item.cursorStroke} />
                  <div
                    className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold tracking-widest uppercase backdrop-blur-xl border border-white/30 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_8px_24px_rgba(0,0,0,0.4)] ${
                      item.labelClassName || "bg-[#f97316]/90 text-white"
                    }`}
                    style={item.labelStyle}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <h1
              className="font-display-lg font-bold text-[clamp(2.25rem,1.1rem+5vw,4.875rem)] text-on-surface tracking-tight mb-5 sm:mb-6"
              style={{
                textShadow: "rgba(0, 0, 0, 0.3) 0px 4px 12px",
                fontFamily: "Poppins, sans-serif",
                letterSpacing: "-0.03em",
                lineHeight: "1.06",
                textWrap: "balance",
              }}
            >
              Building the next
              <span className="relative inline-block">
                <span
                  className="italic font-medium text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-fixed-dim to-primary-container"
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    marginLeft: "0.16em",
                    paddingRight: "0.1em",
                    paddingBottom: "0.12em",
                    display: "inline-block",
                  }}
                >
                  generation
                </span>
                <span className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 bottom-1" />
              </span>
              <span className="mt-1 sm:mt-1.5 block" style={{ letterSpacing: "-0.025em" }}>
                of digital excellence
              </span>
            </h1>

            <p
              className="mt-4 sm:mt-5 text-secondary font-body-md text-[clamp(0.95rem,0.85rem+0.45vw,1.1875rem)] leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: "Poppins, sans-serif", textWrap: "pretty" }}
            >
              Empowering the next generation of decentralized innovation with codox&apos;s premium design and engineering.
            </p>

            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 max-w-xs sm:max-w-none mx-auto">
              {HERO_ACTIONS.map((action) => (
                <a
                  href={action.href}
                  className={action.className}
                  style={action.style}
                  key={action.label}
                >
                  {action.label}
                  {action.icon === "rocket" ? (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-[18px] h-[18px] shrink-0"
                    >
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                      <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3" />
                      <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5" />
                    </svg>
                  ) : (
                    <span className="material-symbols-outlined text-[18px]">event</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
