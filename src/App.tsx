import { useEffect } from "react";
import { Layout } from "./components/Layout";
import { pageMeta, site } from "./config/siteData";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { DailyPracticePage } from "./pages/DailyPracticePage";
import { GuidePage } from "./pages/GuidePage";
import { HomePage } from "./pages/HomePage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { ReflectionNotesPage } from "./pages/ReflectionNotesPage";
import { TermsPage } from "./pages/TermsPage";
import { WorkshopsPage } from "./pages/WorkshopsPage";

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/ikigai-guide", component: GuidePage },
  { path: "/reflection-notes", component: ReflectionNotesPage },
  { path: "/daily-practice", component: DailyPracticePage },
  { path: "/workshops", component: WorkshopsPage },
  { path: "/contact", component: ContactPage },
  { path: "/privacy-policy", component: PrivacyPolicyPage },
  { path: "/terms", component: TermsPage },
];

function normalizePath(pathname: string) {
  const path = pathname.replace(/\/+$/, "");
  return path === "" ? "/" : path;
}

function setMeta(name: string, content: string, property = false) {
  const attr = property ? "property" : "name";
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

export default function App() {
  const currentPath = normalizePath(window.location.pathname);
  const match = routes.find((route) => route.path === currentPath) ?? routes[0];
  const Page = match.component;
  const meta = pageMeta[match.path as keyof typeof pageMeta] ?? pageMeta["/"];

  useEffect(() => {
    document.documentElement.lang = "ja";
    document.title = meta.title;
    setMeta("description", meta.description);
    setMeta("og:title", meta.title, true);
    setMeta("og:description", meta.description, true);
    setMeta("og:type", "website", true);
    setMeta("og:site_name", site.name, true);
  }, [meta.description, meta.title]);

  return (
    <Layout currentPath={match.path}>
      <Page />
    </Layout>
  );
}
