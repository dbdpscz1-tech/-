import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * 서버(서버 컴포넌트 / 라우트 핸들러)에서 쓰는 Supabase 클라이언트.
 *
 * 환경변수가 아직 없으면 null을 반환해 앱이 죽지 않도록 한다.
 * (헌법 규칙 1: 코드가 절대 깨지지 않도록)
 */
export async function createSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[supabase] NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY 가 없어 서버 클라이언트를 생성하지 않았습니다. .env.local 을 확인하세요."
      );
    }
    return null;
  }

  const cookieStore = await cookies();

  return createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // 서버 컴포넌트에서 호출된 경우 set이 무시될 수 있음. 미들웨어에서 세션을 갱신한다면 안전하게 무시 가능.
        }
      },
    },
  });
}
