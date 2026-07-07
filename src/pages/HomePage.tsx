import { FAQ } from "../components/FAQ";
import { IkigaiCircleHero } from "../components/IkigaiCircleHero";
import { LifestyleDisclaimer } from "../components/LifestyleDisclaimer";
import { WorkshopCard } from "../components/WorkshopCard";
import {
  dailyPracticeData,
  featuredQuestion,
  habitCards,
  heroCircles,
  ikigaiGuideData,
  personalValues,
  workshopData,
} from "../config/siteData";

export function HomePage() {
  return (
    <>
      <IkigaiCircleHero />

      <section className="section featured-question" aria-labelledby="featured-question-title">
        <div>
          <span className="section-kicker">{featuredQuestion.eyebrow}</span>
          <h2 id="featured-question-title">{featuredQuestion.question}</h2>
        </div>
        <p>{featuredQuestion.hint}</p>
      </section>

      <section className="section four-circle-section" aria-labelledby="four-circle-title">
        <div className="section-heading">
          <span className="section-kicker">四つの円</span>
          <h2 id="four-circle-title">答えを探す前に、生活の中の手がかりを並べます。</h2>
        </div>
        <div className="circle-explain-grid">
          {heroCircles.map((circle, index) => (
            <article className="paper-card" key={circle.label}>
              <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{circle.label}</h3>
              <p>{circle.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section journal-preview" aria-labelledby="journal-preview-title">
        <div className="notebook-visual" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div>
          <span className="section-kicker">ノートの入口</span>
          <h2 id="journal-preview-title">三行だけでも、暮らしの輪郭は少し見えてきます。</h2>
          <p>
            朝に一つ問いを置き、夜に一行だけ戻ってくる。長く書くよりも、戻れる場所をつくることを大切にしています。
          </p>
          <a className="text-link" href="/reflection-notes">
            振り返りノートを見る
          </a>
        </div>
      </section>

      <section className="section habit-section" aria-labelledby="habit-title">
        <div className="section-heading">
          <span className="section-kicker">続けやすい工夫</span>
          <h2 id="habit-title">がんばり過ぎないための、やさしい習慣。</h2>
        </div>
        <div className="card-grid three">
          {habitCards.map((habit) => (
            <article className="paper-card" key={habit.title}>
              <h3>{habit.title}</h3>
              <p>{habit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section preview-list" aria-labelledby="practice-preview-title">
        <div className="section-heading">
          <span className="section-kicker">日々の実践</span>
          <h2 id="practice-preview-title">生活の中で試せる、小さな練習。</h2>
        </div>
        <div className="soft-list">
          {dailyPracticeData.slice(0, 4).map((practice) => (
            <a href="/daily-practice" key={practice.name}>
              <strong>{practice.name}</strong>
              <span>{practice.time}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section workshop-preview" aria-labelledby="workshop-preview-title">
        <div className="section-heading">
          <span className="section-kicker">ワークショップ</span>
          <h2 id="workshop-preview-title">一人で考えすぎないための、静かな場。</h2>
        </div>
        <div className="card-grid two">
          {workshopData.slice(0, 2).map((workshop) => (
            <WorkshopCard item={workshop} key={workshop.title} />
          ))}
        </div>
      </section>

      <section className="section values-section" aria-labelledby="values-title">
        <div>
          <span className="section-kicker">大切にしていること</span>
          <h2 id="values-title">速さよりも、納得のある暮らしへ。</h2>
          <p>
            生きがいノートでは、人生を大きく変える言葉よりも、今日の選択に戻せる小さな言葉を大切にします。
          </p>
        </div>
        <ul>
          {personalValues.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </section>

      <section className="section guide-teaser" aria-labelledby="guide-teaser-title">
        <div className="section-heading">
          <span className="section-kicker">読みもの</span>
          <h2 id="guide-teaser-title">最初に読むなら、この三つから。</h2>
        </div>
        <div className="card-grid three">
          {ikigaiGuideData.slice(0, 3).map((guide) => (
            <article className="paper-card" key={guide.title}>
              <h3>{guide.title}</h3>
              <p>{guide.explanation}</p>
              <a className="text-link" href="/ikigai-guide">
                ガイドを読む
              </a>
            </article>
          ))}
        </div>
      </section>

      <FAQ />

      <section className="section contact-cta" aria-labelledby="contact-cta-title">
        <span className="section-kicker">お問い合わせ</span>
        <h2 id="contact-cta-title">問いを持ち寄る場所について、静かに相談できます。</h2>
        <p>実際の予約や決済ではなく、掲載内容や架空ワークショップ案内についての問い合わせ導線です。</p>
        <a className="button button--primary" href="/contact">
          お問い合わせへ
        </a>
      </section>

      <section className="section">
        <LifestyleDisclaimer />
      </section>
    </>
  );
}
