import { LifestyleDisclaimer } from "../components/LifestyleDisclaimer";
import { PageHeader } from "../components/PageHeader";
import { ikigaiGuideData } from "../config/siteData";

export function GuidePage() {
  return (
    <>
      <PageHeader
        eyebrow="生きがいガイド"
        title="四つの視点から、今日の納得を見つける。"
        description="好きなこと、得意なこと、大切にしたい価値観、日々に役立つこと。四つの円を生活の言葉で眺めるためのガイドです。"
      />

      <section className="section guide-grid" aria-label="生きがいガイド一覧">
        {ikigaiGuideData.map((guide, index) => (
          <article className="paper-card guide-card" key={guide.title}>
            <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
            <h2>{guide.title}</h2>
            <p>{guide.explanation}</p>
            <dl>
              <div>
                <dt>問い</dt>
                <dd>{guide.question}</dd>
              </div>
              <div>
                <dt>はじめの一歩</dt>
                <dd>{guide.tip}</dd>
              </div>
              <div>
                <dt>日々の例</dt>
                <dd>{guide.example}</dd>
              </div>
            </dl>
            <p className="gentle-note">{guide.reminder}</p>
          </article>
        ))}
      </section>

      <section className="section">
        <LifestyleDisclaimer />
      </section>
    </>
  );
}
