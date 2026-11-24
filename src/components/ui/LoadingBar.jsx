import { useEffect, useState } from "react";
import codoxLoader from "../../assets/codox-loader.svg"

const INTRO_DURATION = 2000;
const EXIT_DURATION = 700;

export default function LoadingBar({ onComplete }) {
  const [isLeaving, setIsLeaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const introDuration = reducedMotion ? 0 : INTRO_DURATION;
    const exitDuration = reducedMotion ? 0 : EXIT_DURATION;

    const introTimer = window.setTimeout(() => {
      setIsLeaving(true);
    }, introDuration);
    const revealTimer = window.setTimeout(() => {
      onComplete();
    }, introDuration + (reducedMotion ? 0 : 120));
    const removeTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, introDuration + exitDuration);

    return () => {
      window.clearTimeout(introTimer);
      window.clearTimeout(revealTimer);
      window.clearTimeout(removeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`loading-screen${isLeaving ? " loading-screen--leaving" : ""}`}
      role="status"
      aria-label="Loading Codox"
      aria-live="polite"
    >
      <div className="loading-content">
        <img
          className="loading-logo"
          src={codoxLoader}
          alt="Codox logo animation"
        />
      </div>
    </div>
  );
}
