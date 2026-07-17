import type {
  TemplateAHeaderData,
  TemplateAHeroData,
  TemplateAFeaturesData,
  TemplateAFooterData,
} from "./types";

/**
 * 캠핑장 소개용 샘플 데이터 (미리보기/데모용).
 *
 * 실제로는 비개발자 사용자가 [사진 URL, 카테고리 이름, 본문 텍스트]만 입력하면 되고,
 * 나중에는 이 값을 Supabase에서 불러오게 된다. (형태만 유지하면 컴포넌트 수정 불필요)
 */

const IMG = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const sampleHeader: TemplateAHeaderData = {
  categoryName: "별빛 숲 캠핑장",
  menu: [
    { label: "소개", href: "#top" },
    { label: "이용 안내", href: "#features" },
    { label: "예약 문의", href: "#footer" },
  ],
};

export const sampleHero: TemplateAHeroData = {
  photoUrl: IMG("photo-1504280390367-361c6d9f38f4"),
  categoryName: "숲속 오토캠핑",
  body: "별빛 아래, 자연이 주는\n가장 편안한 하룻밤",
  ctaLabel: "이용 안내 보기",
  ctaHref: "#features",
};

export const sampleFeatures: TemplateAFeaturesData = {
  heading: "캠핑장 이용 안내",
  items: [
    {
      photoUrl: IMG("photo-1537565266759-34bbc16b62c2"),
      categoryName: "넓은 오토캠핑 사이트",
      body: "차를 사이트 바로 옆에 댈 수 있어 짐 옮기기 편한 넓은 잔디 사이트입니다.",
    },
    {
      photoUrl: IMG("photo-1478131143081-80f7f84ca84d"),
      categoryName: "감성 캠프파이어존",
      body: "저녁이면 모닥불을 피울 수 있는 전용 화로대가 사이트마다 준비되어 있습니다.",
    },
    {
      photoUrl: IMG("photo-1471115853179-bb1d604434e0"),
      categoryName: "숲속 산책로",
      body: "캠핑장을 둘러싼 조용한 숲길에서 아침 산책을 즐겨보세요.",
    },
  ],
};

export const sampleFooter: TemplateAFooterData = {
  categoryName: "별빛 숲 캠핑장",
  body: "강원도 어딘가 숲속 123 · 매일 09:00–18:00 · 010-0000-0000",
  menu: [
    { label: "오시는 길", href: "#" },
    { label: "예약 규정", href: "#" },
    { label: "자주 묻는 질문", href: "#" },
  ],
};
