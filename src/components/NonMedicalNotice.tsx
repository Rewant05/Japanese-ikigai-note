import { site } from "../config/siteData";

export function NonMedicalNotice() {
  return (
    <section className="non-medical" aria-label="非医療情報について">
      <div>
        <span className="section-kicker">立場について</span>
        <h2>答えを急がず、暮らしを見つめるための場所です。</h2>
      </div>
      <p>{site.lifestyleDisclaimer}</p>
      <p>{site.fictionalNotice}</p>
    </section>
  );
}
