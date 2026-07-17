import type { TemplateAHeaderData } from "./types";
import { SafeImage } from "./SafeImage";

/**
 * Template A · 헤더 (독립 컴포넌트).
 * 데이터가 없어도 기본 브랜드명으로 안전하게 렌더링된다.
 */
export function Header({ data }: { data?: TemplateAHeaderData }) {
  const categoryName = data?.categoryName?.trim() || "우리 캠핑장";
  const menu = data?.menu ?? [];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/85 backdrop-blur dark:border-white/15 dark:bg-neutral-950/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2">
          {data?.photoUrl ? (
            <SafeImage
              src={data.photoUrl}
              alt={`${categoryName} 로고`}
              label="로고"
              className="h-9 w-9 rounded-full object-cover"
            />
          ) : null}
          <span className="text-lg font-bold tracking-tight text-emerald-800 dark:text-emerald-300">
            {categoryName}
          </span>
        </a>

        {menu.length > 0 ? (
          <nav className="hidden items-center gap-6 sm:flex">
            {menu.map((item, i) => (
              <a
                key={(item.href ?? "") + item.label + i}
                href={item.href || "#"}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-emerald-700 dark:text-neutral-300 dark:hover:text-emerald-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
