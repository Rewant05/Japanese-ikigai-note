import { PageHeader } from "../components/PageHeader";
import { ReflectionCard } from "../components/ReflectionCard";
import { reflectionQuestionData } from "../config/siteData";

export function ReflectionNotesPage() {
  return (
    <>
      <PageHeader
        eyebrow="振り返りノート"
        title="書ける日も、書けない日も、戻ってこられる問い。"
        description="一日の出来事を採点せずに眺めるための、短い質問と記入例を集めました。"
      />

      <section className="section note-method" aria-labelledby="note-method-title">
        <div>
          <span className="section-kicker">使い方</span>
          <h2 id="note-method-title">一つ選び、三分だけ書き、閉じても大丈夫です。</h2>
        </div>
        <ol>
          <li>今日の気分に近い問いを一つだけ選ぶ。</li>
          <li>うまい文章にせず、場面や言葉を短く残す。</li>
          <li>明日試したいことがあれば、最後に一行だけ書く。</li>
        </ol>
      </section>

      <section className="section card-grid two" aria-label="振り返りの質問一覧">
        {reflectionQuestionData.map((item, index) => (
          <ReflectionCard item={item} index={index} key={item.title} />
        ))}
      </section>
    </>
  );
}
