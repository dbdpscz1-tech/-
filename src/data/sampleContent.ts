import type { PageContent } from "@/types/content";

/**
 * 샘플(목업) 데이터.
 *
 * 지금은 이 파일이 페이지에 데이터를 "주입"한다.
 * 나중에 Supabase 연동 시, 이 객체와 동일한 형태(PageContent)로 DB에서 데이터를 불러와
 * 그대로 넘겨주기만 하면 컴포넌트는 전혀 수정할 필요가 없다.
 * (예: `src/lib/content.ts`의 getPageContent()가 이 값을 반환)
 */
export const sampleContent: PageContent = {
  seo: {
    title: "내 웹사이트 | 데이터만 넣으면 완성되는 웹 빌더",
    description:
      "사진과 글만 입력하면 에러 없이 렌더링되는 웹 빌더로 만든 데모 페이지입니다.",
    siteUrl: "https://example.com",
    ogImage: "/next.svg",
    organizationName: "내 웹사이트",
    logoUrl: "https://example.com/next.svg",
    sameAs: [
      "https://www.instagram.com/example",
      "https://www.youtube.com/@example",
    ],
  },
  header: {
    siteName: "내 웹사이트",
    nav: [
      { label: "소개", href: "#features" },
      { label: "갤러리", href: "#gallery" },
      { label: "소식", href: "#posts" },
    ],
    cta: { label: "문의하기", href: "#footer" },
  },
  banner: {
    title: "데이터만 넣으면, 웹사이트가 완성됩니다",
    subtitle:
      "사진과 글을 입력하면 각 블록이 알아서 예쁘게 렌더링됩니다. 코드는 건드릴 필요가 없어요.",
    primaryAction: { label: "지금 시작하기", href: "#features" },
    secondaryAction: { label: "갤러리 보기", href: "#gallery" },
  },
  features: {
    heading: "이 빌더의 특징",
    description: "모든 요소는 독립된 블록으로 분리되어 있어 절대 서로를 깨뜨리지 않습니다.",
    cards: [
      {
        title: "독립 블록 구조",
        description: "헤더, 배너, 푸터가 각각 완전히 분리되어 하나가 비어도 나머지는 정상 동작합니다.",
        icon: "🧱",
      },
      {
        title: "데이터 주입형",
        description: "컴포넌트는 데이터를 받아 보여주기만 합니다. 데이터 소스는 언제든 교체 가능합니다.",
        icon: "🔌",
      },
      {
        title: "확장 준비 완료",
        description: "GTM 광고 태그와 JSON-LD(AEO) 스키마 연동을 위한 폴더 구조를 갖췄습니다.",
        icon: "🚀",
      },
    ],
  },
  gallery: {
    heading: "갤러리",
    images: [
      { src: "/next.svg", alt: "예시 이미지 1", caption: "첫 번째 사진" },
      { src: "/vercel.svg", alt: "예시 이미지 2", caption: "두 번째 사진" },
      { src: "/globe.svg", alt: "예시 이미지 3", caption: "세 번째 사진" },
    ],
  },
  posts: {
    heading: "소식",
    posts: [
      {
        title: "첫 번째 글입니다",
        body: "글만 입력하면 이렇게 카드 형태로 자동 렌더링됩니다. 마크업을 몰라도 괜찮아요.",
        publishedAt: "2026-07-17",
      },
      {
        title: "두 번째 글입니다",
        body: "나중에 Supabase에서 글을 불러오면 이 목록이 자동으로 채워집니다.",
        publishedAt: "2026-07-16",
      },
    ],
  },
  footer: {
    siteName: "내 웹사이트",
    description: "데이터만 넣으면 완성되는 웹 빌더로 제작되었습니다.",
    links: [
      { label: "개인정보처리방침", href: "#" },
      { label: "이용약관", href: "#" },
    ],
    copyright: "© 2026 내 웹사이트. All rights reserved.",
  },
};
