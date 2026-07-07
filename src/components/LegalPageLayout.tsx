type LegalSection = {
  title: string;
  body: string;
};

type LegalPageLayoutProps = {
  title: string;
  description: string;
  sections: LegalSection[];
  children?: React.ReactNode;
};

export function LegalPageLayout({ title, description, sections, children }: LegalPageLayoutProps) {
  return (
    <article className="legal-layout">
      <header className="page-header">
        <span className="section-kicker">大切な規定</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
      <div className="legal-body">
        {sections.map((section, index) => (
          <section key={section.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </div>
      {children}
    </article>
  );
}
