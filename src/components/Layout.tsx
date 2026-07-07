import { useEffect, useState } from "react";
import { footerLinks, navLinks, site } from "../config/siteData";
import { LifestyleDisclaimer } from "./LifestyleDisclaimer";

type LayoutProps = {
  children: React.ReactNode;
  currentPath: string;
};

export function Layout({ children, currentPath }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <a className="logo" href="/" aria-label={`${site.name}のホームへ`}>
          <span className="logo__mark" aria-hidden="true">
            <span />
          </span>
          <span className="logo__text">
            <span>{site.name}</span>
            <small>{site.tagline}</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="主要ナビゲーション">
          {navLinks.map((link) => (
            <a className={currentPath === link.href ? "is-active" : ""} href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="sticky-cta header-cta" href="/reflection-notes">
          今日の問い
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-panel ${menuOpen ? "is-open" : ""}`} id="mobile-menu">
        <nav aria-label="モバイルナビゲーション">
          {navLinks.map((link) => (
            <a
              className={currentPath === link.href ? "is-active" : ""}
              href={link.href}
              key={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a className="sticky-cta" href="/reflection-notes" onClick={() => setMenuOpen(false)}>
            今日の問い
          </a>
        </nav>
      </div>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="footer-main">
          <div>
            <a className="logo logo--footer" href="/" aria-label={`${site.name}のホームへ`}>
              <span className="logo__mark" aria-hidden="true">
                <span />
              </span>
              <span className="logo__text">
                <span>{site.name}</span>
                <small>{site.tagline}</small>
              </span>
            </a>
            <p>{site.description}</p>
          </div>
          <address>
            <span>{site.studioName}</span>
            <span>{site.address}</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>{site.businessHours}</span>
            <a href={site.instagram} target="_blank" rel="noreferrer">
              インスタグラム
            </a>
          </address>
        </div>

        <LifestyleDisclaimer compact />

        <div className="footer-bottom">
          <nav aria-label="フッターナビゲーション">
            {footerLinks.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <small>© 2026 {site.studioName}</small>
        </div>
      </footer>
    </>
  );
}
