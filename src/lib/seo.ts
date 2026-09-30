import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  path?: string;
};

const SITE = "AV Appliance Services";

export function useSEO({ title, description, path = "" }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | ${SITE}`;
    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", `${window.location.origin}${path}`, true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
  }, [title, description, path]);
}

function setMeta(name: string, content: string, property = false) {
  const attr = property ? "property" : "name";
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}
