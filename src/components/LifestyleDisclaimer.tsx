import { site } from "../config/siteData";

type LifestyleDisclaimerProps = {
  compact?: boolean;
};

export function LifestyleDisclaimer({ compact = false }: LifestyleDisclaimerProps) {
  return (
    <aside className={`notice ${compact ? "notice--compact" : ""}`} aria-label="ライフスタイル情報の注意事項">
      <strong>ご利用前の大切なお知らせ</strong>
      <p>{site.lifestyleDisclaimer}</p>
    </aside>
  );
}
