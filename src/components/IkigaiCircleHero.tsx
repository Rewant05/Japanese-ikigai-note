import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroCircles, heroNotes, site } from "../config/siteData";

export function IkigaiCircleHero() {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = heroRef.current;
    if (!root || typeof window === "undefined") return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      root.classList.add("is-reduced-motion");
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const circles = gsap.utils.toArray<HTMLElement>(".hero-circle");
      const notes = gsap.utils.toArray<HTMLElement>(".hero-note");
      const isMobile = window.innerWidth < 720;
      const spread = isMobile ? 88 : 142;
      const topOffset = isMobile ? 46 : 56;
      const bottomOffset = isMobile ? 72 : 82;
      const positions = [
        { x: -spread, y: -topOffset },
        { x: spread, y: -topOffset },
        { x: -spread * 0.78, y: bottomOffset },
        { x: spread * 0.78, y: bottomOffset },
      ];

      gsap.set(circles, {
        x: (index) => positions[index].x,
        y: (index) => positions[index].y,
        opacity: 0.86,
      });
      gsap.set(notes, { autoAlpha: 0, y: 22, rotate: (index) => [-3, 2, -1][index] });
      gsap.set(".center-glow", { autoAlpha: 0, scale: 0.72 });
      gsap.set(".ink-headline", { autoAlpha: 0.72, y: 6, filter: "blur(0.4px)" });

      gsap
        .timeline({
          defaults: { ease: "power1.out" },
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "+=125%",
            scrub: 0.8,
          },
        })
        .to(root, { "--sunrise-opacity": 1, duration: 1 }, 0)
        .to(circles, { x: 0, y: 0, scale: 0.92, opacity: 0.72, duration: 1.2 }, 0)
        .to(".center-glow", { autoAlpha: 1, scale: 1.18, duration: 0.9 }, 0.35)
        .to(notes, { autoAlpha: 1, y: 0, stagger: 0.12, duration: 0.7 }, 0.64)
        .to(".ink-headline", { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.75 }, 0.78);
    }, root);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="ikigai-hero" ref={heroRef} aria-labelledby="hero-title">
      <div className="pencil-lines" aria-hidden="true" />
      <div className="vertical-copy" aria-hidden="true">
        日々の小さな意味を、静かに見つける。
      </div>

      <div className="hero-stage" aria-hidden="true">
        <div className="sunrise-glow" />
        <div className="center-glow" />
        {heroCircles.map((circle) => (
          <div className={`hero-circle ${circle.className}`} key={circle.label}>
            <strong>{circle.label}</strong>
            <span>{circle.detail}</span>
          </div>
        ))}
        {heroNotes.map((note, index) => (
          <div className={`hero-note hero-note--${index + 1}`} key={note}>
            {note}
          </div>
        ))}
      </div>

      <div className="hero-copy">
        <p className="hero-label">{site.studioName}</p>
        <h1 className="ink-headline" id="hero-title">
          「生きがいは、大きな夢よりも、今日の小さな納得から。」
        </h1>
        <p>
          「{site.name}は、仕事、暮らし、人との関わり、自分の好きなことを静かに見つめ直すための架空のライフデザインスタジオです。」
        </p>
        <div className="hero-actions">
          <a className="button button--primary" href="/reflection-notes">
            問いを見つける
          </a>
          <a className="button button--ghost" href="/daily-practice">
            ノートの使い方
          </a>
        </div>
      </div>

      <a className="sticky-note-card" href="/reflection-notes">
        <span>今日の小さな問い</span>
        <strong>何に、少し心が動きましたか。</strong>
      </a>
    </section>
  );
}
