import type { SeoContent } from "@/types/content";
import { buildAllSchemas } from "@/lib/seo/jsonLd";

/**
 * JSON-LD(AEO) 스키마를 <script> 태그로 페이지에 삽입하는 블록.
 *
 * SeoContent 데이터만 주입하면, 지식 그래프/검색엔진용 구조화 데이터가 렌더링된다.
 * seo가 없으면 아무것도 렌더링하지 않는다. (안전한 폴백)
 */
export function JsonLd({ seo }: { seo?: SeoContent }) {
  if (!seo) return null;

  const schemas = buildAllSchemas(seo);

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // schema는 우리가 만든 신뢰 가능한 객체이므로 안전하게 직렬화한다.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
