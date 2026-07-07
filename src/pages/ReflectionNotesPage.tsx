import { PageHeader } from "../components/PageHeader";
import { reflectionQuestionData } from "../config/siteData";

export function ReflectionNotesPage() {
  return (
    <>
      <PageHeader
        eyebrow="振り返りノート"
        title="印刷して使うワークブックのように、問いを一枚ずつ。"
        description="一日の出来事を採点せず、チェック欄と罫線に沿って短く書き残すためのページです。"
      />

      <section className="section workbook-intro" aria-labelledby="workbook-intro-title">
        <span className="page-tab">how to write</span>
        <h2 id="workbook-intro-title">三分だけ、鉛筆を置く。</h2>
        <ol>
          <li>今日の気分に近い問いへ印をつける。</li>
          <li>うまい文章にせず、場面と言葉を一行ずつ残す。</li>
          <li>明日試したいことがあれば、最後に小さく書く。</li>
        </ol>
      </section>

      <section className="section workbook-pages" aria-label="振り返りの質問一覧">
        {reflectionQuestionData.map((item, index) => (
          <article className="workbook-row" key={item.title}>
            <div className="workbook-check" aria-hidden="true" />
            <div>
              <span className="handwritten-label">prompt {String(index + 1).padStart(2, "0")}</span>
              <h2>{item.title}</h2>
              <p className="question-line">{item.question}</p>
              <p>{item.purpose}</p>
            </div>
            <div className="lined-answer">
              <strong>記入例</strong>
              <p>{item.example}</p>
              <small>{item.time} / {item.note}</small>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
