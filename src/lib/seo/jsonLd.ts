import type { SeoContent } from "@/types/content";

/**
 * AEO(지식 그래프)용 JSON-LD 스키마 생성기 (헌법 규칙 3).
 *
 * SeoContent 데이터를 받아 schema.org 형식의 객체를 만든다.
 * 실제 렌더링은 `src/components/seo/JsonLd.tsx` 가 담당한다.
 */

/** WebSite 스키마 (검색엔진에 사이트 정보를 알려줌) */
export function buildWebSiteSchema(seo: SeoContent) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seo.title,
    description: seo.description,
    ...(seo.siteUrl ? { url: seo.siteUrl } : {}),
  };
}

/** Organization 스키마 (지식 그래프용 조직 정보) */
export function buildOrganizationSchema(seo: SeoContent) {
  const name = seo.organizationName ?? seo.title;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    ...(seo.siteUrl ? { url: seo.siteUrl } : {}),
    ...(seo.logoUrl ? { logo: seo.logoUrl } : {}),
    ...(seo.sameAs && seo.sameAs.length > 0 ? { sameAs: seo.sameAs } : {}),
  };
}

/** 페이지에 삽입할 모든 JSON-LD 스키마 묶음 */
export function buildAllSchemas(seo: SeoContent) {
  return [buildWebSiteSchema(seo), buildOrganizationSchema(seo)];
}
