import { createBrowserClient } from "@supabase/ssr";

/**
 * 브라우저(클라이언트 컴포넌트)에서 쓰는 Supabase 클라이언트.
 *
 * 환경변수(NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY)가
 * 아직 설정되지 않았어도 앱이 죽지 않도록, 값이 없으면 null을 반환한다.
 * (헌법 규칙 1: 코드가 절대 깨지지 않도록)
 */
export function createSupabaseBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[supabase] NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY 가 없어 클라이언트를 생성하지 않았습니다. .env.local 을 확인하세요."
      );
    }
    return null;
  }

  return createBrowserClient(url, anonKey);
}
