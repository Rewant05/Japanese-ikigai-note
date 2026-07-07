import { faqData } from "../config/siteData";

export function FAQ() {
  return (
    <section className="section faq-section" aria-labelledby="faq-title">
      <div className="section-heading">
        <span className="section-kicker">よくある質問</span>
        <h2 id="faq-title">安心して読むために、先に共有したいこと。</h2>
      </div>
      <div className="faq-list">
        {faqData.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
