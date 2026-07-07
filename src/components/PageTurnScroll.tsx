import { featuredQuestion } from "../config/siteData";

export function PageTurnScroll() {
  return (
    <section className="page-turn-scroll" aria-labelledby="page-turn-title">
      <div className="page-turn-scroll__page">
        <span className="handwritten-label">next page</span>
        <h2 id="page-turn-title">ページをめくるように、次の問いへ。</h2>
        <p>{featuredQuestion.question}</p>
      </div>
    </section>
  );
}
