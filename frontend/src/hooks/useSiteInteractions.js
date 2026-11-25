import { useEffect } from "react";

/**
 * useSiteInteractions
 * Coordinates 3D card tilts, pointer glare tracking, and scroll reveal animations.
 * Safely adapts for touch devices and reduced-motion preferences, and re-binds on route changes.
 */
export default function useSiteInteractions(routeKey = "/") {
  useEffect(() => {
    const cleanups = [];
    const observers = [];
    const canHoverFine =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const enableTilt = canHoverFine && !prefersReducedMotion;

    // 1. Bento Cards 3D Tilt & Glare
    if (enableTilt) {
      const bentoWrappers = document.querySelectorAll(".bento-card-wrapper");
      bentoWrappers.forEach((wrapper) => {
        const card = wrapper.querySelector(".bento-card");
        const glare = wrapper.querySelector(".bento-glare");
        if (!card) return;

        const onMouseMove = (e) => {
          const rect = wrapper.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = (centerY - y) / 22;
          const rotateY = (x - centerX) / 22;

          card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
          if (glare) {
            glare.style.opacity = "1";
            glare.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);
            glare.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);
          }
        };

        const onMouseLeave = () => {
          card.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
          if (glare) glare.style.opacity = "0";
        };

        wrapper.addEventListener("mousemove", onMouseMove);
        wrapper.addEventListener("mouseleave", onMouseLeave);
        cleanups.push(() => {
          wrapper.removeEventListener("mousemove", onMouseMove);
          wrapper.removeEventListener("mouseleave", onMouseLeave);
        });
      });
    }

    const setupRevealObserver = (elements, staggerMs = 0) => {
      if (elements.length === 0) return;

      if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
        elements.forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        });
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              const delay = staggerMs ? index * staggerMs : 0;
              window.setTimeout(() => {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
              }, delay);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
      );
      observers.push(observer);

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        } else {
          el.style.opacity = "0";
          el.style.transform = "translateY(28px)";
          el.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";
          observer.observe(el);
        }
      });
    };

    // 2. Project Cards 3D Tilt, Glare & Parallax Image
    const projectWrappers = document.querySelectorAll(".project-card-wrapper");
    if (projectWrappers.length > 0) {
      setupRevealObserver(projectWrappers);

      if (enableTilt) {
        projectWrappers.forEach((wrapper) => {
          const card = wrapper.querySelector(".project-card");
          const spotlight = card?.querySelector(".project-spotlight");
          const image = card?.querySelector(".project-image");
          if (!card) return;

          const onMouseMove = (e) => {
            const rect = wrapper.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (centerY - y) / 28;
            const rotateY = (x - centerX) / 28;

            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;

            if (image) {
              const moveX = (x - centerX) / 30;
              const moveY = (y - centerY) / 30;
              image.style.transform = `translate(${-moveX}px, ${-moveY}px) scale(1.12)`;
            }

            if (spotlight) {
              spotlight.style.opacity = "1";
              spotlight.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);
              spotlight.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);
            }
          };

          const onMouseLeave = () => {
            card.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
            if (image) image.style.transform = "translate(0, 0) scale(1)";
            if (spotlight) spotlight.style.opacity = "0";
          };

          wrapper.addEventListener("mousemove", onMouseMove);
          wrapper.addEventListener("mouseleave", onMouseLeave);
          cleanups.push(() => {
            wrapper.removeEventListener("mousemove", onMouseMove);
            wrapper.removeEventListener("mouseleave", onMouseLeave);
          });
        });
      }
    }

    // 3. Team Member Cards
    const teamWrappers = document.querySelectorAll(".team-card-wrapper");
    if (teamWrappers.length > 0) {
      setupRevealObserver(teamWrappers, 120);

      if (enableTilt) {
        teamWrappers.forEach((wrapper) => {
          const card = wrapper.querySelector(".team-card");
          if (!card) return;

          const onMouseMove = (e) => {
            const rect = wrapper.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (centerY - y) / 28;
            const rotateY = (x - centerX) / 28;

            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
          };

          const onMouseLeave = () => {
            card.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
          };

          wrapper.addEventListener("mousemove", onMouseMove);
          wrapper.addEventListener("mouseleave", onMouseLeave);
          cleanups.push(() => {
            wrapper.removeEventListener("mousemove", onMouseMove);
            wrapper.removeEventListener("mouseleave", onMouseLeave);
          });
        });
      }
    }

    // 4. Pricing Cards Tilt & Reveal
    const pricingWrappers = document.querySelectorAll(".pricing-card-wrapper");
    if (pricingWrappers.length > 0) {
      setupRevealObserver(pricingWrappers, 120);

      if (enableTilt) {
        pricingWrappers.forEach((wrapper) => {
          const card = wrapper.querySelector(".pricing-card");
          if (!card) return;

          const onMouseMove = (e) => {
            const rect = wrapper.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (centerY - y) / 32;
            const rotateY = (x - centerX) / 32;
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
          };

          const onMouseLeave = () => {
            card.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
          };

          wrapper.addEventListener("mousemove", onMouseMove);
          wrapper.addEventListener("mouseleave", onMouseLeave);
          cleanups.push(() => {
            wrapper.removeEventListener("mousemove", onMouseMove);
            wrapper.removeEventListener("mouseleave", onMouseLeave);
          });
        });
      }
    }

    return () => {
      cleanups.forEach((fn) => fn());
      observers.forEach((obs) => obs.disconnect());
    };
  }, [routeKey]);
}
