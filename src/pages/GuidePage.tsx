import { LifestyleDisclaimer } from "../components/LifestyleDisclaimer";
import { PageHeader } from "../components/PageHeader";
import { ikigaiGuideData } from "../config/siteData";

export function GuidePage() {
  return (
    <>
      <PageHeader
        eyebrow="生きがいガイド"
        title="ノートの章として読む、生きがいの見つめ方。"
        description="答えを急がず、ページの端にメモを残すように、好きなこと、得意なこと、価値観、日々に役立つことを読み解きます。"
      />

      <section className="section notebook-chapters" aria-label="生きがいガイド一覧">
        {ikigaiGuideData.map((guide, index) => (
          <article className="chapter-page" key={guide.title}>
            <aside className="chapter-margin">
              <span>page {String(index + 1).padStart(2, "0")}</span>
              <em>{guide.reminder}</em>
            </aside>
            <div className="chapter-body">
              <p className="handwritten-label">chapter</p>
              <h2>{guide.title}</h2>
              <p>{guide.explanation}</p>
              <blockquote>{guide.question}</blockquote>
              <dl>
                <div>
                  <dt>はじめの一歩</dt>
                  <dd>{guide.tip}</dd>
                </div>
                <div>
                  <dt>小さな例</dt>
                  <dd>{guide.example}</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </section>

      <section className="section">
        <LifestyleDisclaimer />
      </section>
    </>
  );
}
