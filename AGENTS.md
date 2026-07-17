# AGENTS.md

## Cursor Cloud specific instructions

### 프로젝트 개요
- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Supabase 기반의 **웹 빌더 서비스**.
- 설계 원칙: 모든 UI는 `src/components/blocks`의 독립 블록 컴포넌트이며, 데이터를 주입받아 "보여주기만" 한다. 표준 명령어/구조는 `README.md` 참고.

### 서비스 실행 (단일 서비스)
- 개발 서버: `npm run dev` → http://localhost:3000
- 린트: `npm run lint` · 타입체크: `npm run typecheck` · 빌드: `npm run build`
- 의존성은 시작 시 업데이트 스크립트(`npm install`)로 이미 새로고침됨. 추가 설치는 보통 불필요.

### 비자명한 주의사항 (durable)
- **환경변수는 모두 선택 사항이다.** `NEXT_PUBLIC_SUPABASE_URL/ANON_KEY`, `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_SITE_URL`가 없어도 앱은 정상 동작한다. Supabase 클라이언트(`src/lib/supabase/*`)는 값이 없으면 의도적으로 `null`을 반환하고, GTM 컴포넌트는 아무것도 렌더링하지 않는다. "환경변수 누락"을 오류로 취급하지 말 것.
- **데이터 소스 교체 지점은 `src/lib/content.ts`의 `getPageContent()` 한 곳뿐이다.** 현재는 `src/data/sampleContent.ts`(샘플)를 반환. Supabase로 바꿀 때 이 함수만 수정하면 되고, 반환 형태(`src/types/content.ts`의 `PageContent`)만 유지하면 블록/페이지 코드는 건드리지 않는다.
- **갤러리/카드/포스트 이미지는 일부러 `next/image`가 아닌 일반 `<img>`를 쓴다.** 사용자가 임의 도메인의 사진 URL을 주입해도 도메인 설정 없이 깨지지 않게 하기 위함이다. 관련 `eslint-disable @next/next/no-img-element` 주석을 임의로 제거하거나 `next/image`로 "고치지" 말 것(원하면 `next.config.ts`의 `images.remotePatterns` 설정이 선행되어야 함).
- **각 블록은 데이터가 없으면 `return null` 로 스스로 렌더링을 생략한다.** 이것이 "코드가 절대 깨지지 않는" 설계의 핵심이므로 이 폴백 패턴을 유지할 것.
