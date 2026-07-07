import { ContactForm } from "../components/ContactForm";
import { PageHeader } from "../components/PageHeader";
import { site } from "../config/siteData";

export function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="お問い合わせ"
        title="一通の手紙として、編集室へ届ける。"
        description="ガイド、振り返りノート、架空ワークショップ、取材・掲載、コラボレーションについてのお問い合わせ欄です。"
      />

      <section className="section contact-layout letter-contact-layout">
        <div className="contact-info letter-address" aria-label="連絡先">
          <span className="section-kicker">宛先</span>
          <h2>返信に必要な範囲で、静かに確認します。</h2>
          <address>
            <span>{site.studioName}</span>
            <span>{site.address}</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>{site.businessHours}</span>
            <a href={site.instagram} target="_blank" rel="noreferrer">
              インスタグラム
            </a>
          </address>
          <p>{site.fictionalNotice}</p>
        </div>
        <div className="letter-form-shell">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
