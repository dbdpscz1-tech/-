/**
 * 사이트 콘텐츠 타입 정의 (헌법 규칙 2)
 *
 * 모든 블록 컴포넌트는 여기서 정의된 타입의 데이터가 "주입되면" 화면에 보여주기만 한다.
 * 데이터는 지금은 `src/data/sampleContent.ts`(샘플)에서, 나중에는 Supabase DB에서 온다.
 * 데이터 형태(shape)만 이 파일과 맞추면 컴포넌트를 수정할 필요가 없다.
 */

/** 클릭 가능한 링크 하나 (내비게이션, 버튼 등) */
export interface LinkItem {
  label: string;
  href: string;
  /** 외부 링크 여부. true면 새 탭으로 열림 */
  external?: boolean;
}

/** 이미지 한 장 (사진 데이터) */
export interface ImageItem {
  src: string;
  alt: string;
  /** 선택: 갤러리/카드용 캡션 */
  caption?: string;
}

/** 상단 헤더 블록 데이터 */
export interface HeaderContent {
  siteName: string;
  logo?: ImageItem;
  nav?: LinkItem[];
  cta?: LinkItem;
}

/** 배너(히어로) 블록 데이터 */
export interface BannerContent {
  title: string;
  subtitle?: string;
  background?: ImageItem;
  primaryAction?: LinkItem;
  secondaryAction?: LinkItem;
}

/** 특징/카드 섹션의 카드 한 장 */
export interface FeatureCard {
  title: string;
  description?: string;
  icon?: string;
  image?: ImageItem;
}

/** 특징/카드 섹션 블록 데이터 */
export interface FeatureSectionContent {
  heading?: string;
  description?: string;
  cards?: FeatureCard[];
}

/** 사진 갤러리 블록 데이터 */
export interface GalleryContent {
  heading?: string;
  images?: ImageItem[];
}

/** 글(포스트) 한 개 */
export interface PostItem {
  title: string;
  body: string;
  publishedAt?: string;
  cover?: ImageItem;
}

/** 글 목록 블록 데이터 */
export interface PostListContent {
  heading?: string;
  posts?: PostItem[];
}

/** 하단 푸터 블록 데이터 */
export interface FooterContent {
  siteName: string;
  description?: string;
  links?: LinkItem[];
  copyright?: string;
}

/** SEO / AEO(JSON-LD) 용 메타 데이터 (헌법 규칙 3) */
export interface SeoContent {
  title: string;
  description: string;
  /** 사이트 기본 URL (예: https://example.com) */
  siteUrl?: string;
  ogImage?: string;
  /** 지식 그래프(Organization 스키마)용 정보 */
  organizationName?: string;
  logoUrl?: string;
  sameAs?: string[];
}

/**
 * 페이지 전체 콘텐츠.
 * 각 블록은 선택적(optional)이라, 없는 블록은 화면에서 안전하게 생략된다.
 */
export interface PageContent {
  seo: SeoContent;
  header?: HeaderContent;
  banner?: BannerContent;
  features?: FeatureSectionContent;
  gallery?: GalleryContent;
  posts?: PostListContent;
  footer?: FooterContent;
}
