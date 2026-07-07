import { LifestyleDisclaimer } from "../components/LifestyleDisclaimer";
import { PageHeader } from "../components/PageHeader";
import { WorkshopCard } from "../components/WorkshopCard";
import { site, workshopData } from "../config/siteData";

export function WorkshopsPage() {
  return (
    <>
      <PageHeader
        eyebrow="ワークショップ"
        title="問いを一人で抱え込まず、静かに並べる時間。"
        description="掲載している内容は架空のワークショップ情報です。予約や決済ではなく、お問い合わせによる案内表現のみを置いています。"
      />

      <section className="section workshop-note" aria-labelledby="workshop-note-title">
        <span className="section-kicker">架空案内について</span>
        <h2 id="workshop-note-title">このページから参加確定や支払いは発生しません。</h2>
        <p>{site.fictionalNotice}</p>
      </section>

      <section className="section card-grid two" aria-label="ワークショップ一覧">
        {workshopData.map((workshop) => (
          <WorkshopCard item={workshop} key={workshop.title} />
        ))}
      </section>

      <section className="section">
        <LifestyleDisclaimer />
      </section>
    </>
  );
}
