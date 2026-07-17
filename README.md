# 웹 빌더 서비스

사용자가 **데이터(사진·글)만 입력하면 에러 없이 렌더링되는** 웹 빌더 서비스입니다.

## 핵심 기술 스택

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Supabase** (`@supabase/ssr`, `@supabase/supabase-js`)

## 설계 원칙 (프로젝트 헌법)

1. **독립 블록 구조** — 헤더/배너/푸터 등 모든 UI를 완전히 독립된 블록 컴포넌트(`src/components/blocks`)로 분리. 한 블록이 비거나 실패해도 나머지는 정상 동작.
2. **데이터 주입형(presentational)** — 컴포넌트는 데이터를 받아 "보여주기만" 한다. 데이터 소스는 지금은 샘플, 나중엔 Supabase로 교체 가능 (`src/lib/content.ts` 한 곳만 수정).
3. **확장 가능한 구조** — Google Tag Manager(GTM)와 JSON-LD(AEO/지식 그래프)를 위한 폴더/모듈을 미리 마련.

## 폴더 구조

```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 + 동적 SEO 메타데이터 + GTM
│   ├── page.tsx            # 블록들을 조립하는 홈 페이지
│   └── globals.css         # Tailwind
├── components/
│   ├── blocks/             # 독립 블록: Header, Banner, FeatureSection, Gallery, PostList, Footer
│   ├── analytics/          # GoogleTagManager (GTM)
│   └── seo/                # JsonLd (AEO 구조화 데이터)
├── lib/
│   ├── content.ts          # 콘텐츠 로더 (데이터 소스 교체 지점)
│   ├── supabase/           # client.ts(브라우저), server.ts(서버)
│   └── seo/                # jsonLd.ts (schema.org 스키마 생성)
├── data/
│   └── sampleContent.ts    # 샘플 데이터 (나중에 Supabase로 대체)
└── types/
    └── content.ts          # 모든 블록의 데이터 타입 (단일 진실 공급원)
```

## 시작하기

```bash
# 1) 의존성 설치
npm install

# 2) 환경변수 준비 (선택: 값이 없어도 앱은 정상 동작)
cp .env.local.example .env.local

# 3) 개발 서버 실행
npm run dev
# http://localhost:3000
```

## 자주 쓰는 명령어

| 목적 | 명령어 |
|------|--------|
| 개발 서버 | `npm run dev` |
| 프로덕션 빌드 | `npm run build` |
| 린트 | `npm run lint` |
| 타입 체크 | `npm run typecheck` |

## 환경변수

| 변수 | 설명 | 없으면 |
|------|------|--------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase 프로젝트 URL | Supabase 클라이언트 미생성(앱은 정상) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon 키 | 위와 동일 |
| `NEXT_PUBLIC_GTM_ID` | GTM 컨테이너 ID | GTM 스크립트 미로드 |
| `NEXT_PUBLIC_SITE_URL` | 사이트 기본 URL | 메타데이터 base 생략 |

## 데이터를 Supabase로 바꾸려면

`src/lib/content.ts`의 `getPageContent()` 안에서만 데이터 소스를 바꾸면 됩니다.
반환 형태(`PageContent`)만 유지하면 블록/페이지 코드는 수정할 필요가 없습니다.
