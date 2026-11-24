import React, { useEffect, useLayoutEffect, useRef } from "react";
import { LiquidGlass } from "../ui/LiquidGlass";

const MARGIN = 12;
const RESTITUTION = 0.8;
const DAMPING = 0.35;
const MAX_SPEED = 2500;
const IDLE_DRIFT = 18;

function getInitialPosition(area, anchor, size) {
  const width = area.clientWidth;
  const height = area.clientHeight;
  const areaRect = area.getBoundingClientRect();
  const anchorRect = anchor?.getBoundingClientRect();
  const desiredX = anchorRect
    ? anchorRect.right - areaRect.left + 18
    : width - size - MARGIN;
  const desiredY = anchorRect
    ? anchorRect.top - areaRect.top + anchorRect.height / 2 - size / 2
    : (height - size) / 2;

  return {
    x: Math.max(MARGIN, Math.min(width - size - MARGIN, desiredX)),
    y: Math.max(MARGIN, Math.min(height - size - MARGIN, desiredY)),
  };
}

export default function LiquidGlassMagnifier({
  areaRef,
  anchorRef,
  size = 160,
  className = "",
}) {
  const lensRef = useRef(null);
  const physics = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    dragging: false,
    pointerId: null,
    offsetX: 0,
    offsetY: 0,
    samples: [],
    positioned: false,
  });

  const applyTransform = () => {
    const { x, y } = physics.current;
    if (lensRef.current) {
      lensRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
  };

  useLayoutEffect(() => {
    const positionLens = () => {
      const area = areaRef.current;
      if (!area) return;
      const { x, y } = getInitialPosition(area, anchorRef?.current, size);
      physics.current.x = x;
      physics.current.y = y;
      physics.current.positioned = true;
      applyTransform();
    };

    positionLens();
    const initialPositionFrame = requestAnimationFrame(positionLens);
    window.addEventListener("resize", positionLens);
    const resizeObserver =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(positionLens);
    if (areaRef.current) resizeObserver?.observe(areaRef.current);
    if (anchorRef?.current) resizeObserver?.observe(anchorRef.current);

    return () => {
      cancelAnimationFrame(initialPositionFrame);
      window.removeEventListener("resize", positionLens);
      resizeObserver?.disconnect();
    };
  }, [areaRef, anchorRef, size]);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    let animationFrame;
    let last = performance.now();

    const tick = (now) => {
      const delta = Math.min((now - last) / 1000, 0.032);
      last = now;
      const current = physics.current;
      const area = areaRef.current;

      if (area && !current.dragging) {
        if (!current.positioned) {
          const { x, y } = getInitialPosition(
            area,
            anchorRef?.current,
            size
          );
          current.x = x;
          current.y = y;
          current.positioned = true;
        }

        const maxX = Math.max(MARGIN, area.clientWidth - size - MARGIN);
        const maxY = Math.max(MARGIN, area.clientHeight - size - MARGIN);

        if (!reduceMotion) {
          current.vx += Math.sin(now / 1700 + 1) * IDLE_DRIFT * delta;
          current.vy += Math.cos(now / 1300) * IDLE_DRIFT * delta;
        }

        const damping = Math.pow(DAMPING, delta);
        current.vx *= damping;
        current.vy *= damping;
        current.x += current.vx * delta;
        current.y += current.vy * delta;

        if (current.x < MARGIN) {
          current.x = MARGIN;
          current.vx = Math.abs(current.vx) * RESTITUTION;
        } else if (current.x > maxX) {
          current.x = maxX;
          current.vx = -Math.abs(current.vx) * RESTITUTION;
        }
        if (current.y < MARGIN) {
          current.y = MARGIN;
          current.vy = Math.abs(current.vy) * RESTITUTION;
        } else if (current.y > maxY) {
          current.y = maxY;
          current.vy = -Math.abs(current.vy) * RESTITUTION;
        }
        applyTransform();
      }
      animationFrame = requestAnimationFrame(tick);
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [areaRef, anchorRef, size]);

  const startDrag = (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    const current = physics.current;
    const lensRect = event.currentTarget.getBoundingClientRect();
    current.dragging = true;
    current.pointerId = event.pointerId;
    current.offsetX = event.clientX - lensRect.left;
    current.offsetY = event.clientY - lensRect.top;
    current.vx = 0;
    current.vy = 0;
    current.samples = [];
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const moveDrag = (event) => {
    const current = physics.current;
    if (!current.dragging || current.pointerId !== event.pointerId) return;
    const area = areaRef.current;
    if (!area) return;
    const rect = area.getBoundingClientRect();
    const maxX = Math.max(MARGIN, rect.width - size - MARGIN);
    const maxY = Math.max(MARGIN, rect.height - size - MARGIN);
    current.x = Math.max(
      MARGIN,
      Math.min(maxX, event.clientX - rect.left - current.offsetX)
    );
    current.y = Math.max(
      MARGIN,
      Math.min(maxY, event.clientY - rect.top - current.offsetY)
    );
    const now = performance.now();
    current.samples.push({ x: current.x, y: current.y, t: now });
    while (current.samples.length && now - current.samples[0].t > 100) {
      current.samples.shift();
    }
    applyTransform();
  };

  const stopDrag = (event) => {
    const current = physics.current;
    if (!current.dragging || current.pointerId !== event.pointerId) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    const now = performance.now();
    const samples = current.samples;
    let vx = 0;
    let vy = 0;
    if (samples.length >= 2 && now - samples[samples.length - 1].t < 80) {
      const first = samples[0];
      const last = samples[samples.length - 1];
      const span = (last.t - first.t) / 1000;
      if (span > 0.01) {
        vx = (last.x - first.x) / span;
        vy = (last.y - first.y) / span;
      }
    }
    const speed = Math.hypot(vx, vy);
    if (speed > MAX_SPEED) {
      vx = (vx / speed) * MAX_SPEED;
      vy = (vy / speed) * MAX_SPEED;
    }
    current.vx = vx;
    current.vy = vy;
    current.dragging = false;
    current.pointerId = null;
    current.samples = [];
  };

  return (
    <div
      ref={lensRef}
      title="Drag or throw the lens"
      className={`absolute left-0 top-0 z-20 cursor-grab touch-none active:cursor-grabbing will-change-transform ${className}`}
      style={{ width: size, height: size }}
      onPointerDown={startDrag}
      onPointerMove={moveDrag}
      onPointerUp={stopDrag}
      onPointerCancel={stopDrag}
    >
      <LiquidGlass
        radius={size / 2}
        scale={14}
        aberration={1.5}
        bevelDepth={6}
        frost={0.05}
        tint={0.05}
        className="h-full w-full border border-white/35 shadow-[0_16px_48px_rgba(0,0,0,0.45),0_0_30px_rgba(173,198,255,0.12),inset_0_1px_0_rgba(255,255,255,0.55)]"
      >
        <div className="absolute inset-2.5 rounded-full border border-white/15" />
        <div className="absolute left-[30px] top-[22px] h-[46px] w-[72px] rotate-[-28deg] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.42),rgba(255,255,255,0.06)_58%,transparent_68%)] blur-[1px]" />
      </LiquidGlass>
    </div>
  );
}
