import React, { useEffect, useId, useRef, useState } from "react";
import { cn } from "../../lib/utils";

function supportsUrlBackdropFilter() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return (
    CSS.supports("backdrop-filter", "url(#liquid-glass)") ||
    CSS.supports("-webkit-backdrop-filter", "url(#liquid-glass)")
  );
}

function isSafariLike() {
  if (typeof navigator === "undefined") return false;
  return /Safari/.test(navigator.userAgent) &&
    !/Chrome|Chromium|Edg|OPR/.test(navigator.userAgent);
}

function createDisplacementMap(width, height, radius, bevelDepth) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = Math.max(1, Math.round(width * dpr));
  const h = Math.max(1, Math.round(height * dpr));
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const context = canvas.getContext("2d");
  if (!context) return null;

  const data = context.createImageData(w, h);
  const halfW = w / 2;
  const halfH = h / 2;
  const r = Math.min(radius * dpr, halfW, halfH);
  const bevel = Math.max(1, bevelDepth * dpr);

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const px = x - halfW + 0.5;
      const py = y - halfH + 0.5;
      const qx = Math.abs(px) - halfW + r;
      const qy = Math.abs(py) - halfH + r;
      const outside = Math.hypot(Math.max(qx, 0), Math.max(qy, 0));
      const inside = Math.min(Math.max(qx, qy), 0);
      const distance = inside + outside - r;
      const index = (y * w + x) * 4;

      if (distance > 0) {
        data.data[index] = 128;
        data.data[index + 1] = 128;
        data.data[index + 2] = 128;
        data.data[index + 3] = 0;
        continue;
      }

      const rimDepth = Math.max(0, Math.min(1, -distance / bevel));
      const nx = px / (halfW || 1);
      const ny = py / (halfH || 1);
      const angle = Math.atan2(ny, nx);
      const strength = 0.75 + Math.pow(rimDepth, 2) * 0.55;
      data.data[index] = Math.round(128 - Math.cos(angle) * strength * 127);
      data.data[index + 1] = Math.round(128 - Math.sin(angle) * strength * 127);
      data.data[index + 2] = Math.round(
        255 * Math.max(0, -nx * 0.55 - ny * 0.85) * rimDepth,
      );
      data.data[index + 3] = 255;
    }
  }

  context.putImageData(data, 0, 0);
  return canvas;
}

export function LiquidGlass({
  children,
  className,
  contentClassName,
  radius = 999,
  bevelDepth = 14,
  scale = 48,
  aberration = 4,
  frost = 0.4,
  tint = 0.12,
  style,
  ...rest
}) {
  const reactId = useId().replace(/:/g, "");
  const rootRef = useRef(null);
  const blobRef = useRef(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [filter, setFilter] = useState(null);
  const [mode, setMode] = useState("pending");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-transparency: reduce)").matches) {
      setMode("opaque");
    } else if (isSafariLike() || !supportsUrlBackdropFilter()) {
      setMode("simple");
    }
  }, []);

  useEffect(() => {
    const element = rootRef.current;
    if (!element || mode !== "pending") return undefined;
    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return;
      const box = entry.borderBoxSize?.[0];
      setSize({
        w: Math.max(1, Math.round(box?.inlineSize ?? entry.contentRect.width)),
        h: Math.max(1, Math.round(box?.blockSize ?? entry.contentRect.height)),
      });
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [mode]);

  useEffect(() => {
    if (mode !== "pending" || size.w <= 1 || size.h <= 1) return undefined;
    let cancelled = false;
    let mapUrl = null;

    const buildFilter = async () => {
      const canvas = createDisplacementMap(
        size.w,
        size.h,
        Math.min(radius, size.w / 2, size.h / 2),
        Math.min(bevelDepth, Math.min(size.w, size.h) / 2),
      );
      if (!canvas) return;
      const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
      if (!blob || cancelled) return;
      mapUrl = URL.createObjectURL(blob);
      await new Promise((resolve) => {
        const image = new Image();
        image.onload = image.onerror = resolve;
        image.src = mapUrl;
      });
      if (cancelled) {
        URL.revokeObjectURL(mapUrl);
        return;
      }
      if (blobRef.current) URL.revokeObjectURL(blobRef.current);
      blobRef.current = mapUrl;

      const id = `lg-${reactId}-${size.w}x${size.h}-${Date.now().toString(36)}`;
      const pad = Math.ceil(scale + aberration + 4);
      const px = (pad / Math.max(1, size.w)) * 100;
      const py = (pad / Math.max(1, size.h)) * 100;
      setFilter({
        id,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">
          <filter id="${id}" color-interpolation-filters="sRGB" x="-${px}%" y="-${py}%" width="${100 + 2 * px}%" height="${100 + 2 * py}%">
            <feImage href="${mapUrl}" xlink:href="${mapUrl}" x="0" y="0" width="${size.w}" height="${size.h}" result="map" preserveAspectRatio="none"/>
            <feDisplacementMap in="SourceGraphic" in2="map" scale="${scale}" xChannelSelector="R" yChannelSelector="G" result="displaced"/>
            <feGaussianBlur in="displaced" stdDeviation="${frost}"/>
          </filter>
        </svg>`,
      });
    };

    buildFilter();
    return () => {
      cancelled = true;
    };
  }, [mode, size.w, size.h, radius, bevelDepth, scale, aberration, frost, reactId]);

  useEffect(() => () => {
    if (blobRef.current) URL.revokeObjectURL(blobRef.current);
  }, []);

  const backdrop =
    mode === "opaque"
      ? "none"
      : mode === "simple"
        ? "blur(20px) saturate(1.4)"
        : filter
          ? `url(#${filter.id}) blur(0.5px) saturate(1.85) brightness(1.02)`
          : "blur(10px) saturate(1.6) brightness(1.04)";

  return (
    <div
      ref={rootRef}
      data-refract={mode === "pending" && filter ? "true" : "false"}
      className={cn(
        "relative overflow-hidden",
        mode === "simple" && "bg-white/70",
        mode === "opaque" && "bg-white",
        className,
      )}
      style={{
        borderRadius: radius,
        backgroundColor: mode === "pending" ? `rgb(255 255 255 / ${tint})` : undefined,
        backdropFilter: backdrop,
        WebkitBackdropFilter: backdrop,
        ...style,
      }}
      {...rest}
    >
      {filter ? (
        <span
          key={filter.id}
          aria-hidden="true"
          className="pointer-events-none absolute h-0 w-0 overflow-hidden"
          dangerouslySetInnerHTML={{ __html: filter.svg }}
        />
      ) : null}
      {contentClassName ? (
        <div className={contentClassName}>{children}</div>
      ) : children}
    </div>
  );
}
