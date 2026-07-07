import { DailyPracticeCard } from "../components/DailyPracticeCard";
import { PageHeader } from "../components/PageHeader";
import { dailyPracticeData } from "../config/siteData";

export function DailyPracticePage() {
  return (
    <>
      <PageHeader
        eyebrow="日々の実践"
        title="生活の中で試せる、小さなセルフリフレクション。"
        description="続けることを目的にしすぎず、今日の暮らしに戻せる範囲で試す実践集です。"
      />

      <section className="section practice-intro" aria-labelledby="practice-intro-title">
        <span className="section-kicker">続け方</span>
        <h2 id="practice-intro-title">少し物足りないくらいで止めると、明日も戻りやすくなります。</h2>
        <p>
          生きがいに関する実践は、生活を大きく変えるための負荷ではなく、自分の選択を観察するための小さな習慣として扱います。
        </p>
      </section>

      <section className="section card-grid two" aria-label="日々の実践一覧">
        {dailyPracticeData.map((item, index) => (
          <DailyPracticeCard item={item} index={index} key={item.name} />
        ))}
      </section>
    </>
  );
}
