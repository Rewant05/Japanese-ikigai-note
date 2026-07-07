import { workshopData } from "../config/siteData";

type WorkshopCardProps = {
  item: (typeof workshopData)[number];
};

export function WorkshopCard({ item }: WorkshopCardProps) {
  return (
    <article className="paper-card workshop-card">
      <span className="format-pill">{item.format}</span>
      <h3>{item.title}</h3>
      <dl>
        <div>
          <dt>時間</dt>
          <dd>{item.duration}</dd>
        </div>
        <div>
          <dt>対象</dt>
          <dd>{item.audience}</dd>
        </div>
        <div>
          <dt>振り返ること</dt>
          <dd>{item.reflection}</dd>
        </div>
      </dl>
      <a className="text-link" href="/contact">
        {item.cta}
      </a>
      <p className="fictional-note">{item.note}</p>
    </article>
  );
}
