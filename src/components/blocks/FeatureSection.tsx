import type { FeatureSectionContent } from "@/types/content";

/**
 * 특징/카드 섹션 블록 (독립 컴포넌트).
 * 데이터나 카드가 없으면 아무것도 렌더링하지 않는다. (안전한 폴백)
 */
export function FeatureSection({ data }: { data?: FeatureSectionContent }) {
  const cards = data?.cards ?? [];
  if (!data || cards.length === 0) return null;

  return (
    <section id="features" className="mx-auto max-w-5xl px-6 py-20">
      {data.heading ? (
        <h2 className="text-center text-3xl font-bold tracking-tight">
          {data.heading}
        </h2>
      ) : null}
      {data.description ? (
        <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-600 dark:text-zinc-300">
          {data.description}
        </p>
      ) : null}

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
          <div
            key={card.title + i}
            className="rounded-2xl border border-black/[.08] p-6 transition-shadow hover:shadow-lg dark:border-white/[.145]"
          >
            {card.icon ? (
              <div className="mb-4 text-3xl" aria-hidden>
                {card.icon}
              </div>
            ) : null}
            {card.image?.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={card.image.src}
                alt={card.image.alt}
                className="mb-4 h-12 w-auto"
              />
            ) : null}
            <h3 className="text-lg font-semibold">{card.title}</h3>
            {card.description ? (
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                {card.description}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
