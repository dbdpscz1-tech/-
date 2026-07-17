/**
 * Template A (캠핑장/소개용 템플릿) 데이터 타입.
 *
 * 비개발자 사용자는 핵심적으로 아래 3가지 데이터만 입력하면 된다:
 *   - photoUrl     : 사진 URL
 *   - categoryName : 카테고리 이름
 *   - body         : 본문 텍스트
 *
 * 모든 필드는 optional 이거나 안전한 기본값을 가지므로, 일부만 채워도 화면이 깨지지 않는다.
 * (프로젝트 규칙: 독립 블록 + 데이터 주입형 + 절대 깨지지 않음)
 */

/** 메뉴/링크 하나 */
export interface TemplateALink {
  label: string;
  href?: string;
}

/** 헤더 블록 데이터 */
export interface TemplateAHeaderData {
  /** 카테고리 이름 (브랜드/사이트명으로 표시) */
  categoryName?: string;
  /** 사진 URL (로고). 없으면 텍스트 로고로 대체 */
  photoUrl?: string;
  /** 상단 메뉴 */
  menu?: TemplateALink[];
}

/** 히어로(메인 배너) 블록 데이터 */
export interface TemplateAHeroData {
  /** 사진 URL (배경 사진). 없으면 그라데이션 배경으로 대체 */
  photoUrl?: string;
  /** 카테고리 이름 (상단 배지) */
  categoryName?: string;
  /** 본문 텍스트 (메인 문구). 여러 줄 가능 */
  body?: string;
  /** 선택: 버튼 */
  ctaLabel?: string;
  ctaHref?: string;
}

/** 특징/카테고리 카드 하나 = [사진 URL, 카테고리 이름, 본문 텍스트] */
export interface TemplateAFeatureItem {
  photoUrl?: string;
  categoryName?: string;
  body?: string;
}

/** 특징/소개 영역 블록 데이터 */
export interface TemplateAFeaturesData {
  /** 섹션 제목 */
  heading?: string;
  /** 카드 목록. 비어 있으면 섹션이 안전하게 생략됨 */
  items?: TemplateAFeatureItem[];
}

/** 푸터 블록 데이터 */
export interface TemplateAFooterData {
  /** 카테고리 이름 (사이트명) */
  categoryName?: string;
  /** 본문 텍스트 (소개/주소/연락처 등) */
  body?: string;
  menu?: TemplateALink[];
}
