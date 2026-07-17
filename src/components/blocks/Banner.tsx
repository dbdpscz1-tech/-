import type { BannerContent } from "@/types/content";

/**
 * 배너(히어로) 블록 (독립 컴포넌트).
 * banner 데이터가 없으면 아무것도 렌더링하지 않는다. (안전한 폴백)
 */
export function Banner({ data }: { data?: BannerContent }) {
  if (!data) return null;

  const hasBg = Boolean(data.background?.src);

  return (
    <section className="relative overflow-hidden border-b border-black/[.08] dark:border-white/[.145]">
      {hasBg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={data.background!.src}
          alt={data.background!.alt}
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
      ) : null}

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-24 text-center sm:py-32">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          {data.title}
        </h1>

        {data.subtitle ? (
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
            {data.subtitle}
          </p>
        ) : null}

        {(data.primaryAction || data.secondaryAction) && (
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            {data.primaryAction ? (
              <a
                href={data.primaryAction.href}
                target={data.primaryAction.external ? "_blank" : undefined}
                rel={data.primaryAction.external ? "noopener noreferrer" : undefined}
                className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                {data.primaryAction.label}
              </a>
            ) : null}
            {data.secondaryAction ? (
              <a
                href={data.secondaryAction.href}
                target={data.secondaryAction.external ? "_blank" : undefined}
                rel={data.secondaryAction.external ? "noopener noreferrer" : undefined}
                className="rounded-full border border-black/[.12] px-6 py-3 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.2] dark:hover:bg-white/[.06]"
              >
                {data.secondaryAction.label}
              </a>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
