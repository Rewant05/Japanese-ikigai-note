import { LifestyleDisclaimer } from "../components/LifestyleDisclaimer";
import { PageHeader } from "../components/PageHeader";
import { site, workshopData } from "../config/siteData";

export function WorkshopsPage() {
  return (
    <>
      <PageHeader
        eyebrow="ワークショップ"
        title="掲示板に留めた、架空のノート時間。"
        description="掲載している内容は架空のワークショップ情報です。予約や決済ではなく、お問い合わせによる案内表現のみを置いています。"
      />

      <section className="section workshop-note" aria-labelledby="workshop-note-title">
        <span className="section-kicker">架空案内について</span>
        <h2 id="workshop-note-title">このページから参加確定や支払いは発生しません。</h2>
        <p>{site.fictionalNotice}</p>
      </section>

      <section className="section corkboard corkboard--page" aria-label="ワークショップ一覧">
        {workshopData.map((workshop, index) => (
          <article className={`pinned-note pinned-note--${(index % 4) + 1}`} key={workshop.title}>
            <span className="pin" aria-hidden="true" />
            <span className="format-pill">{workshop.format}</span>
            <h2>{workshop.title}</h2>
            <dl>
              <div>
                <dt>時間</dt>
                <dd>{workshop.duration}</dd>
              </div>
              <div>
                <dt>対象</dt>
                <dd>{workshop.audience}</dd>
              </div>
              <div>
                <dt>振り返ること</dt>
                <dd>{workshop.reflection}</dd>
              </div>
            </dl>
            <a href="/contact">{workshop.cta}</a>
            <p className="fictional-note">{workshop.note}</p>
          </article>
        ))}
      </section>

      <section className="section">
        <LifestyleDisclaimer />
      </section>
    </>
  );
}
