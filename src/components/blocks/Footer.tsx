import type { FooterContent } from "@/types/content";

/**
 * 푸터 블록 (독립 컴포넌트).
 * footer 데이터가 없으면 아무것도 렌더링하지 않는다. (안전한 폴백)
 */
export function Footer({ data }: { data?: FooterContent }) {
  if (!data) return null;

  const links = data.links ?? [];

  return (
    <footer
      id="footer"
      className="mt-auto border-t border-black/[.08] bg-white py-12 dark:border-white/[.145] dark:bg-black"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-semibold">{data.siteName}</p>
          {data.description ? (
            <p className="mt-1 text-sm text-zinc-500">{data.description}</p>
          ) : null}
        </div>

        {links.length > 0 ? (
          <nav className="flex flex-wrap items-center justify-center gap-4">
            {links.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm text-zinc-600 transition-colors hover:text-black dark:text-zinc-300 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        ) : null}
      </div>

      {data.copyright ? (
        <p className="mt-8 text-center text-xs text-zinc-500">{data.copyright}</p>
      ) : null}
    </footer>
  );
}
