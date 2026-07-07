import { LegalPageLayout } from "../components/LegalPageLayout";
import { privacyPolicySections, site } from "../config/siteData";

export function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="プライバシーポリシー"
      description={`${site.studioName}が運営する架空サイトにおける、個人情報と閲覧情報の取り扱いについてまとめます。`}
      sections={privacyPolicySections}
    />
  );
}
