import { PageHeader } from "../components/PageHeader";
import { dailyPracticeData } from "../config/siteData";

const weekLabels = ["月", "火", "水", "木", "金", "土", "日", "季"];

export function DailyPracticePage() {
  return (
    <>
      <PageHeader
        eyebrow="日々の実践"
        title="一週間の余白に置く、小さな練習。"
        description="続けることを目的にしすぎず、曜日ごとの小さなブロックとして暮らしの中で試します。"
      />

      <section className="section weekly-planner" aria-label="日々の実践一覧">
        {dailyPracticeData.map((item, index) => (
          <article className="planner-day" key={item.name}>
            <span className="planner-day__label">{weekLabels[index]}</span>
            <div>
              <h2>{item.name}</h2>
              <p>{item.how}</p>
            </div>
            <dl>
              <div>
                <dt>時間</dt>
                <dd>{item.time}</dd>
              </div>
              <div>
                <dt>理由</dt>
                <dd>{item.why}</dd>
              </div>
            </dl>
            <p className="sticky-reminder">{item.caution} / {item.nextStep}</p>
          </article>
        ))}
      </section>
    </>
  );
}
