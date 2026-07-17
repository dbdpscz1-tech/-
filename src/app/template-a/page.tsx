import type { Metadata } from "next";
import { Header, Hero, Features, Footer } from "@/components/template-a";
import {
  sampleHeader,
  sampleHero,
  sampleFeatures,
  sampleFooter,
} from "@/components/template-a/sampleCampingData";

export const metadata: Metadata = {
  title: "별빛 숲 캠핑장 | Template A 미리보기",
  description: "캠핑장/소개용 템플릿 A 미리보기 페이지입니다.",
};

/**
 * Template A 미리보기 페이지.
 * 4개의 독립 블록(Header/Hero/Features/Footer)에 캠핑장 샘플 데이터를 주입해 조립한다.
 */
export default function TemplateAPreview() {
  return (
    <>
      <Header data={sampleHeader} />
      <main className="flex flex-1 flex-col">
        <Hero data={sampleHero} />
        <Features data={sampleFeatures} />
      </main>
      <Footer data={sampleFooter} />
    </>
  );
}
