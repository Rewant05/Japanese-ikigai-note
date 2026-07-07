import { reflectionQuestionData } from "../config/siteData";

type ReflectionCardProps = {
  item: (typeof reflectionQuestionData)[number];
  index: number;
};

export function ReflectionCard({ item, index }: ReflectionCardProps) {
  return (
    <article className="paper-card reflection-card">
      <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
      <h3>{item.title}</h3>
      <p className="question-line">{item.question}</p>
      <dl>
        <div>
          <dt>目的</dt>
          <dd>{item.purpose}</dd>
        </div>
        <div>
          <dt>記入例</dt>
          <dd>{item.example}</dd>
        </div>
        <div>
          <dt>目安</dt>
          <dd>{item.time}</dd>
        </div>
      </dl>
      <p className="gentle-note">{item.note}</p>
    </article>
  );
}
