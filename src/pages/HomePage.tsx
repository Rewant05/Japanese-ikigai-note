import { FAQ } from "../components/FAQ";
import { LifestyleDisclaimer } from "../components/LifestyleDisclaimer";
import { NotebookScrollAnimations } from "../components/NotebookScrollAnimations";
import { NotebookVideoReel } from "../components/NotebookVideoReel";
import { NotebookWritingHero } from "../components/NotebookWritingHero";
import { PageTurnScroll } from "../components/PageTurnScroll";
import {
  dailyPracticeData,
  featuredQuestion,
  habitCards,
  ikigaiGuideData,
  reflectionQuestionData,
  workshopData,
} from "../config/siteData";

export function HomePage() {
  return (
    <>
      <NotebookScrollAnimations />
      <NotebookWritingHero />
      <PageTurnScroll />

      <section className="section today-question-sheet" aria-labelledby="today-question-title">
        <span className="handwritten-label">2026.07.08 / 今日の問い</span>
        <h2 id="today-question-title">{featuredQuestion.question}</h2>
        <p>{featuredQuestion.hint}</p>
        <a className="paper-tag-link" href="/reflection-notes">
          この問いを開く
        </a>
      </section>

      <section className="section notebook-spread-section" aria-labelledby="spread-title">
        <div className="spread-heading">
          <span className="section-kicker">余白に書くこと</span>
          <h2 id="spread-title">答えを決める前に、左右のページへそっと分けてみる。</h2>
        </div>
        <div className="wide-notebook-spread">
          <div className="ruled-page">
            <span className="page-tab">categories</span>
            {reflectionQuestionData.slice(0, 5).map((item) => (
              <label className="checkbox-row" key={item.title}>
                <span aria-hidden="true" />
                {item.title}
              </label>
            ))}
          </div>
          <div className="ruled-page ruled-page--answer">
            <span className="handwritten-label">example</span>
            <p>今日は、急いで返事をしなかった。少し待ったことで、自分の言葉を選べた。</p>
            <p>明日は、机の上を一つだけ戻してから一日を終える。</p>
          </div>
        </div>
      </section>

      <section className="section editorial-essay" aria-labelledby="essay-title">
        <span className="vermilion-stamp">納得</span>
        <h2 id="essay-title">生きがいを急がない。</h2>
        <p>
          生きがいは、ひとつの大きな結論として急いで見つけるものではなく、日々の選択を少し丁寧に見つめた先に残る手触りだと考えています。うまく説明できない違和感も、続けたい小さな習慣も、紙の上に置くと暮らしの輪郭になります。
        </p>
      </section>

      <NotebookVideoReel />

      <section className="section notebook-timeline" aria-labelledby="timeline-title">
        <div className="section-heading">
          <span className="section-kicker">ノートの使い方</span>
          <h2 id="timeline-title">余白を残しながら、三つの手順で戻ってくる。</h2>
        </div>
        <ol>
          <li>
            <span>01</span>
            <strong>朝に問いをひとつ置く</strong>
            <p>今日大切にしたいことを、一行だけページの端に書きます。</p>
          </li>
          <li>
            <span>02</span>
            <strong>夜に場面を一つ拾う</strong>
            <p>よかったこと、疲れたこと、続けたいことから一つだけ選びます。</p>
          </li>
          <li>
            <span>03</span>
            <strong>明日の小さな実験にする</strong>
            <p>十五分で試せる行動へ落とし、できなかった日も記録として残します。</p>
          </li>
        </ol>
      </section>

      <section className="section sticky-note-mosaic" aria-labelledby="practice-preview-title">
        <div className="section-heading">
          <span className="section-kicker">日々の小さな実践</span>
          <h2 id="practice-preview-title">同じ形にそろえず、暮らしの中へ散らしておく。</h2>
        </div>
        <div className="sticky-mosaic">
          {dailyPracticeData.slice(0, 6).map((practice, index) => (
            <a className={`sticky-note sticky-note--${index + 1}`} href="/daily-practice" key={practice.name}>
              <strong>{practice.name}</strong>
              <span>{practice.time}</span>
              <p>{practice.nextStep}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section guide-manuscript" aria-labelledby="guide-manuscript-title">
        <div>
          <span className="section-kicker">読みもの</span>
          <h2 id="guide-manuscript-title">最初の章だけ、手帳の端に写しておく。</h2>
        </div>
        <div className="chapter-strip">
          {ikigaiGuideData.slice(0, 4).map((guide, index) => (
            <a href="/ikigai-guide" key={guide.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{guide.title}</strong>
              <small>{guide.question}</small>
            </a>
          ))}
        </div>
      </section>

      <section className="section corkboard-section" aria-labelledby="workshop-preview-title">
        <div className="section-heading">
          <span className="section-kicker">ワークショップ案内</span>
          <h2 id="workshop-preview-title">掲示板に留めた、架空の振り返り会。</h2>
        </div>
        <div className="corkboard">
          {workshopData.slice(0, 4).map((workshop, index) => (
            <article className={`pinned-note pinned-note--${index + 1}`} key={workshop.title}>
              <span className="pin" aria-hidden="true" />
              <h3>{workshop.title}</h3>
              <p>{workshop.reflection}</p>
              <a href="/workshops">{workshop.cta}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section habit-margin-notes" aria-labelledby="habit-title">
        <div className="section-heading">
          <span className="section-kicker">余白のメモ</span>
          <h2 id="habit-title">書きすぎないための、小さな約束。</h2>
        </div>
        <div className="margin-note-row">
          {habitCards.map((habit) => (
            <article key={habit.title}>
              <h3>{habit.title}</h3>
              <p>{habit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <FAQ />

      <section className="section envelope-cta" aria-labelledby="contact-cta-title">
        <span className="section-kicker">お問い合わせ</span>
        <h2 id="contact-cta-title">一通の手紙のように、静かに相談する。</h2>
        <p>実際の予約や決済ではなく、掲載内容や架空ワークショップ案内についての問い合わせ導線です。</p>
        <a className="paper-tag-link" href="/contact">
          お問い合わせへ
        </a>
      </section>

      <section className="section">
        <LifestyleDisclaimer />
      </section>
    </>
  );
}
