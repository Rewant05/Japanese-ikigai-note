import { LegalPageLayout } from "../components/LegalPageLayout";
import { LifestyleDisclaimer } from "../components/LifestyleDisclaimer";
import { termsSections } from "../config/siteData";

export function TermsPage() {
  return (
    <LegalPageLayout
      title="利用規約"
      description="当サイトの閲覧にあたって確認いただきたい、架空情報、非医療情報、ワークショップ案内、免責事項についての規定です。"
      sections={termsSections}
    >
      <section className="section">
        <LifestyleDisclaimer />
      </section>
    </LegalPageLayout>
  );
}
