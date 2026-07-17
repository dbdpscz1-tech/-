import type { PageContent } from "@/types/content";
import { sampleContent } from "@/data/sampleContent";

/**
 * 페이지 콘텐츠를 가져오는 단일 진입점.
 *
 * ── 지금 ──────────────────────────────────────────────
 * 샘플 데이터(sampleContent)를 그대로 반환한다.
 *
 * ── 나중에 (Supabase 연동) ─────────────────────────────
 * 이 함수 안에서만 데이터 소스를 바꾸면 된다. 예:
 *
 *   import { createSupabaseServerClient } from "@/lib/supabase/server";
 *   export async function getPageContent(): Promise<PageContent> {
 *     const supabase = await createSupabaseServerClient();
 *     const { data } = await supabase.from("pages").select("content").single();
 *     return data?.content ?? sampleContent; // 실패해도 안전하게 폴백
 *   }
 *
 * 컴포넌트/페이지는 이 함수의 반환 형태(PageContent)만 알면 되므로,
 * 데이터 소스를 바꿔도 UI 코드는 전혀 수정할 필요가 없다.
 */
export async function getPageContent(): Promise<PageContent> {
  return sampleContent;
}
