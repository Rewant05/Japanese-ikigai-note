import { useEffect, useRef } from "react";
import { featuredQuestion, heroNotes, notebookPrompts, site } from "../config/siteData";
import { HandwritingLine } from "./HandwritingLine";
import { JournalPage } from "./JournalPage";

type IdleWindow = Window &
  typeof globalThis & {
    requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
    cancelIdleCallback?: (handle: number) => void;
  };

export function NotebookWritingHero() {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = heroRef.current;
    if (!root || typeof window === "undefined") return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      root.classList.add("is-reduced-motion");
      return;
    }

    let cancelled = false;
    let ctx: { revert: () => void } | undefined;
    let idleHandle: number | undefined;
    const idleWindow = window as IdleWindow;

    const runAnimation = async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
      const strokes = gsap.utils.toArray<SVGPathElement>(".handwriting-line__stroke path");
      const sideNotes = gsap.utils.toArray<HTMLElement>(".notebook-side-note");

      strokes.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      });

      gsap.set(".notebook-spread", { rotateX: 7, y: 28, scale: 0.96, transformPerspective: 1000 });
      gsap.set(".hero-pencil", { autoAlpha: 0, x: -120, y: 58, rotate: -24 });
      gsap.set(".hero-sticky-note", { autoAlpha: 0, y: 18, rotate: -5 });
      gsap.set(".bookmark-cta", { autoAlpha: 0, y: 38 });
      gsap.set(".hero-photo", { autoAlpha: 0, y: 22, scale: 0.94 });
      gsap.set(sideNotes, { autoAlpha: 0, x: -12, rotate: -2 });

      gsap
        .timeline({ defaults: { ease: "power2.out" } })
        .to(".hero-photo", { autoAlpha: 1, y: 0, scale: 1, stagger: 0.12, duration: 0.68 })
        .to(".notebook-spread", { autoAlpha: 1, rotateX: 0, y: 0, scale: 1, duration: 0.95 })
        .to(sideNotes, { autoAlpha: 1, x: 0, stagger: 0.12, duration: 0.5 }, "-=0.28")
        .to(".hero-pencil", { autoAlpha: 1, duration: 0.2 }, "-=0.25")
        .to(".hero-pencil", { x: 170, y: 42, rotate: -18, duration: 1.15, ease: "sine.inOut" }, "-=0.1")
        .to(strokes, { strokeDashoffset: 0, stagger: 0.18, duration: 0.9, ease: "sine.inOut" }, "-=1.0")
        .to(".hero-pencil", { x: 252, y: 132, rotate: -10, duration: 0.65, ease: "sine.inOut" }, "-=0.28")
        .to(".hero-sticky-note", { autoAlpha: 1, y: 0, rotate: -2, duration: 0.55 }, "-=0.08")
        .to(".bookmark-cta", { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.55 }, "-=0.24");

      gsap
        .timeline({
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "+=80%",
            scrub: 0.75,
          },
        })
        .to(root, { "--page-curl": 1, duration: 1 }, 0)
        .to(".notebook-spread", { y: -34, rotate: -1.4, duration: 1 }, 0)
        .to(".hero-photo--desk", { y: -26, x: -18, rotate: -8, duration: 1 }, 0)
        .to(".hero-photo--detail", { y: -18, x: 16, rotate: 7, duration: 1 }, 0)
        .to(".page-corner", { rotate: -16, y: -18, x: -10, duration: 1 }, 0)
        .to(".next-question-ink", { autoAlpha: 1, y: 0, duration: 0.7 }, 0.35);
      }, root);
    };

    idleHandle = idleWindow.requestIdleCallback
      ? idleWindow.requestIdleCallback(runAnimation, { timeout: 900 })
      : window.setTimeout(runAnimation, 120);

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

  return (
    <section className="notebook-hero" ref={heroRef} aria-labelledby="hero-title">
      <div className="desk-grain" aria-hidden="true" />
      <div className="notebook-index-tab" aria-hidden="true">
        今日のページ
      </div>
      <div className="paper-clip paper-clip--one" aria-hidden="true" />
      <div className="paper-clip paper-clip--two" aria-hidden="true" />
      <figure className="hero-photo hero-photo--desk" aria-hidden="true">
        <img src="/images/ikigai-desk-hero-640.webp" alt="" width={640} height={342} loading="lazy" decoding="async" />
      </figure>
      <figure className="hero-photo hero-photo--detail" aria-hidden="true">
        <img src="/images/reflection-notebook-detail-480.webp" alt="" width={480} height={480} loading="lazy" decoding="async" />
      </figure>

      <div className="notebook-spread">
        <div className="bookmark-string" aria-hidden="true" />
        <JournalPage side="left" date="2026.07.08" title={site.name}>
          <p className="notebook-side-note">朝の机で、まだ答えにしない。</p>
          <p className="notebook-side-note">小さく心が動いた場面を拾う。</p>
          <ul className="notebook-checklist">
            {notebookPrompts.slice(0, 3).map((prompt) => (
              <li key={prompt}>{prompt}</li>
            ))}
          </ul>
          <div className="hero-sticky-note">
            <span>今日の問い</span>
            <strong>{featuredQuestion.question}</strong>
          </div>
        </JournalPage>

        <JournalPage side="right" title="手書きの余白">
          <p className="hero-label">{site.studioName}</p>
          <h1 className="ink-headline" id="hero-title">
            <HandwritingLine text="「今日の小さな納得を、" />
            <HandwritingLine text="言葉にする。」" delay={0.2} />
          </h1>
          <p className="hero-subtext">
            「{site.name}は、暮らし、仕事、人との関わり、自分の好きな時間を、静かに書き留めるための架空のライフデザインノートです。」
          </p>
          <p className="next-question-ink">{heroNotes[0]}</p>
          <span className="page-corner" aria-hidden="true" />
        </JournalPage>

        <svg className="hero-pencil" viewBox="0 0 190 32" aria-hidden="true" focusable="false">
          <path d="M14 15 L132 6 L175 15 L132 25 Z" fill="#d0a15f" />
          <path d="M132 6 L160 15 L132 25 Z" fill="#f3d6a1" />
          <path d="M160 15 L181 15" stroke="#302c25" strokeWidth="5" strokeLinecap="round" />
          <path d="M14 15 L4 10 L5 22 Z" fill="#59633d" />
        </svg>
      </div>

      <nav className="notebook-hero-actions" aria-label="ヒーロー内リンク">
        <a className="bookmark-cta bookmark-cta--primary" href="/reflection-notes">
          今日の問いを書く
        </a>
        <a className="bookmark-cta bookmark-cta--secondary" href="/daily-practice">
          ノートの使い方を見る
        </a>
      </nav>
    </section>
  );
}
