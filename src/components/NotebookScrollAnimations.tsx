import { useEffect } from "react";

type IdleWindow = Window &
  typeof globalThis & {
    requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
    cancelIdleCallback?: (handle: number) => void;
  };

export function NotebookScrollAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    let cancelled = false;
    let ctx: { revert: () => void } | undefined;
    let idleHandle: number | undefined;
    const idleWindow = window as IdleWindow;

    const runAnimations = async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
      const revealSections = gsap.utils.toArray<HTMLElement>(
        [
          ".today-question-sheet",
          ".notebook-spread-section",
          ".editorial-essay",
          ".video-reel-section",
          ".notebook-timeline",
          ".sticky-note-mosaic",
          ".guide-manuscript",
          ".corkboard-section",
          ".habit-margin-notes",
          ".faq-list",
          ".envelope-cta",
        ].join(", "),
      );

      revealSections.forEach((section) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 64 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              once: true,
            },
          },
        );
      });

      gsap.fromTo(
        ".notebook-timeline li",
        { autoAlpha: 0, x: -34 },
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.12,
          duration: 0.72,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".notebook-timeline",
            start: "top 72%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".sticky-note",
        { autoAlpha: 0, y: 44 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.72,
          ease: "back.out(1.25)",
          scrollTrigger: {
            trigger: ".sticky-note-mosaic",
            start: "top 72%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".video-card",
        { autoAlpha: 0, y: 58, clipPath: "inset(14% 0% 14% 0%)" },
        {
          autoAlpha: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          stagger: 0.14,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".video-reel-section",
            start: "top 74%",
            once: true,
          },
        },
      );

      gsap.utils.toArray<HTMLElement>(".video-card video").forEach((video) => {
        gsap.to(video, {
          y: -16,
          scale: 1.055,
          ease: "none",
          scrollTrigger: {
            trigger: video,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      });

      gsap.to(".pinned-note", {
        y: (index) => (index % 2 === 0 ? -18 : 16),
        ease: "none",
        scrollTrigger: {
          trigger: ".corkboard",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.9,
        },
      });
      }, document.body);
    };

    idleHandle = idleWindow.requestIdleCallback
      ? idleWindow.requestIdleCallback(runAnimations, { timeout: 1400 })
      : window.setTimeout(runAnimations, 220);

    return () => {
      cancelled = true;
      if (idleHandle !== undefined) {
        if (idleWindow.cancelIdleCallback) {
          idleWindow.cancelIdleCallback(idleHandle);
        } else {
          window.clearTimeout(idleHandle);
        }
      }
      ctx?.revert();
    };
  }, []);

  return null;
}
