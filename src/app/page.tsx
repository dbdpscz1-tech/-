import {
  Header,
  Banner,
  FeatureSection,
  Gallery,
  PostList,
  Footer,
} from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPageContent } from "@/lib/content";

/**
 * 홈 페이지 = 독립 블록들의 조립.
 *
 * 데이터(content)를 한 번 불러와서 각 블록에 "주입"하기만 한다.
 * 각 블록은 데이터가 없으면 스스로 렌더링을 생략하므로, 일부 데이터가 비어도 페이지는 절대 깨지지 않는다.
 */
export default async function Home() {
  const content = await getPageContent();

  return (
    <>
      {/* AEO: 검색엔진/지식그래프용 구조화 데이터 (화면에는 안 보임) */}
      <JsonLd seo={content.seo} />

      <Header data={content.header} />
      <main className="flex flex-1 flex-col">
        <Banner data={content.banner} />
        <FeatureSection data={content.features} />
        <Gallery data={content.gallery} />
        <PostList data={content.posts} />
      </main>
      <Footer data={content.footer} />
    </>
  );
}
