import { dailyPracticeData } from "../config/siteData";

type DailyPracticeCardProps = {
  item: (typeof dailyPracticeData)[number];
  index: number;
};

export function DailyPracticeCard({ item, index }: DailyPracticeCardProps) {
  return (
    <article className="paper-card practice-card">
      <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
      <h3>{item.name}</h3>
      <dl>
        <div>
          <dt>やり方</dt>
          <dd>{item.how}</dd>
        </div>
        <div>
          <dt>時間</dt>
          <dd>{item.time}</dd>
        </div>
        <div>
          <dt>役立つ理由</dt>
          <dd>{item.why}</dd>
        </div>
        <div>
          <dt>気をつけること</dt>
          <dd>{item.caution}</dd>
        </div>
      </dl>
      <p className="gentle-note">{item.nextStep}</p>
    </article>
  );
}
