import type { HeaderContent } from "@/types/content";

/**
 * 헤더 블록 (독립 컴포넌트).
 * header 데이터가 없으면 아무것도 렌더링하지 않는다. (안전한 폴백)
 */
export function Header({ data }: { data?: HeaderContent }) {
  if (!data) return null;

  const nav = data.nav ?? [];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[.08] bg-white/80 backdrop-blur dark:border-white/[.145] dark:bg-black/80">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 font-semibold text-lg">
          {data.logo?.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={data.logo.src} alt={data.logo.alt} className="h-7 w-auto" />
          ) : null}
          <span>{data.siteName}</span>
        </a>

        {nav.length > 0 ? (
          <nav className="hidden items-center gap-6 sm:flex">
            {nav.map((link) => (
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

        {data.cta ? (
          <a
            href={data.cta.href}
            target={data.cta.external ? "_blank" : undefined}
            rel={data.cta.external ? "noopener noreferrer" : undefined}
            className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:opacity-90"
          >
            {data.cta.label}
          </a>
        ) : null}
      </div>
    </header>
  );
}
