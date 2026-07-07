type JournalPageProps = {
  children: React.ReactNode;
  date?: string;
  side?: "left" | "right";
  title?: string;
};

export function JournalPage({ children, date, side = "left", title }: JournalPageProps) {
  return (
    <div className={`journal-page journal-page--${side}`}>
      <div className="journal-page__margin" aria-hidden="true" />
      {date && <span className="journal-date">{date}</span>}
      {title && <p className="journal-page__title">{title}</p>}
      <div className="journal-page__content">{children}</div>
    </div>
  );
}
