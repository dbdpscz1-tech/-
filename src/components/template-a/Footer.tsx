import type { TemplateAFooterData } from "./types";

/**
 * Template A · 푸터 (독립 컴포넌트).
 * 데이터가 없어도 기본값으로 안전하게 렌더링된다.
 */
export function Footer({ data }: { data?: TemplateAFooterData }) {
  const categoryName = data?.categoryName?.trim() || "우리 캠핑장";
  const body = data?.body?.trim();
  const menu = data?.menu ?? [];
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-white py-12 dark:border-white/15 dark:bg-neutral-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-lg font-bold text-emerald-800 dark:text-emerald-300">
            {categoryName}
          </p>
          {body ? (
            <p className="mt-1 max-w-md whitespace-pre-line text-sm text-neutral-500 dark:text-neutral-400">
              {body}
            </p>
          ) : null}
        </div>

        {menu.length > 0 ? (
          <nav className="flex flex-wrap items-center justify-center gap-4">
            {menu.map((item, i) => (
              <a
                key={(item.href ?? "") + item.label + i}
                href={item.href || "#"}
                className="text-sm text-neutral-600 transition-colors hover:text-emerald-700 dark:text-neutral-300 dark:hover:text-emerald-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </div>

      <p className="mt-8 text-center text-xs text-neutral-400">
        © {year} {categoryName}. All rights reserved.
      </p>
    </footer>
  );
}
