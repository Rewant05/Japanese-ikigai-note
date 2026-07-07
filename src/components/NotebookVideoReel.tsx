import { useEffect, useRef, useState } from "react";
import { videoStories } from "../config/siteData";

export function NotebookVideoReel() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [loadVideos, setLoadVideos] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || loadVideos) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadVideos(true);
          observer.disconnect();
        }
      },
      { rootMargin: "520px 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [loadVideos]);

  return (
    <section className="section video-reel-section" ref={sectionRef} aria-labelledby="video-reel-title">
      <div className="section-heading">
        <span className="section-kicker">映像の余白</span>
        <h2 id="video-reel-title">ノートのそばで流れる、三つの短い記録。</h2>
      </div>

      <div className="video-reel-grid">
        {videoStories.map((story) => (
          <article className="video-card" key={story.title}>
            <div className="video-card__media">
              <video autoPlay={loadVideos} loop muted playsInline preload="none" poster={story.poster} aria-label={story.title}>
                {loadVideos ? <source src={story.src} type="video/webm" /> : null}
              </video>
              <span>{story.label}</span>
            </div>
            <div className="video-card__copy">
              <h3>{story.title}</h3>
              <p>{story.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
