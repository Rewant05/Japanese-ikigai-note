import { NonMedicalNotice } from "../components/NonMedicalNotice";
import { PageHeader } from "../components/PageHeader";
import { site } from "../config/siteData";

export function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="私たちについて"
        title="人生の答えを急がず、今日の小さな納得を集める編集室。"
        description={`${site.name}は、日々の選択、好きな時間、人との関わり、少しだけ心が動いた瞬間を言葉にしながら、自分にとって納得できる暮らしを考えるための架空のライフデザインスタジオです。`}
      />

      <section className="section editorial-section" aria-labelledby="about-purpose-title">
        <div>
          <span className="section-kicker">目的</span>
          <h2 id="about-purpose-title">大きな夢よりも、生活の手触りから始めます。</h2>
        </div>
        <div className="copy-stack">
          <p>
            {site.name}
            は、人生の答えを急いで決めるための場所ではありません。日々の小さな選択、好きな時間、人との関わり、少しだけ心が動いた瞬間を言葉にしながら、自分にとって納得できる暮らしを考えるための架空のライフデザインスタジオです。
          </p>
          <p>
            私たちが大切にしているのは、誰かの成功の形をまねることではなく、自分の生活に戻せる問いを持つことです。書くこと、眺めること、手放すことを通じて、暮らしの中にある静かな手がかりを探します。
          </p>
        </div>
      </section>

      <section className="section philosophy-grid" aria-labelledby="philosophy-title">
        <div className="section-heading">
          <span className="section-kicker">考え方</span>
          <h2 id="philosophy-title">生きがいを、日常の言葉に戻すために。</h2>
        </div>
        <article className="paper-card">
          <h3>暮らしから見つける</h3>
          <p>台所、机、移動時間、会話の余白。特別な場所ではなく、いつもの場面を観察します。</p>
        </article>
        <article className="paper-card">
          <h3>比べずに整える</h3>
          <p>人の速さや成果ではなく、自分の体力、時間、関係性に合う形を探します。</p>
        </article>
        <article className="paper-card">
          <h3>変化を許す</h3>
          <p>季節や生活の変化に合わせて、好きなことや大切なことも更新してよいと考えます。</p>
        </article>
      </section>

      <NonMedicalNotice />
    </>
  );
}
