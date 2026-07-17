import type { TemplateAFeaturesData } from "./types";
import { SafeImage } from "./SafeImage";

/**
 * Template A · 특징/카테고리 소개 영역 (독립 컴포넌트).
 *
 * 각 카드는 [사진 URL, 카테고리 이름, 본문 텍스트] 하나로 구성된다.
 * 카드가 하나도 없으면 섹션 전체가 안전하게 생략된다.
 * 카드 안에서도 비어 있는 필드(사진/제목/본문)는 알아서 생략되어 레이아웃이 깨지지 않는다.
 */
export function Features({ data }: { data?: TemplateAFeaturesData }) {
  const items = (data?.items ?? []).filter(Boolean);
  if (items.length === 0) return null;

  const heading = data?.heading?.trim() || "이용 안내";

  return (
    <section id="features" className="bg-neutral-50 py-20 dark:bg-neutral-900">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-center text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          {heading}
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const title = item.categoryName?.trim();
            const body = item.body?.trim();
            return (
              <article
                key={(title ?? "card") + i}
                className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-white/15 dark:bg-neutral-950"
              >
                <SafeImage
                  src={item.photoUrl}
                  alt={title ? `${title} 사진` : "카테고리 사진"}
                  label={title ?? "사진"}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-6">
                  {title ? (
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                      {title}
                    </h3>
                  ) : null}
                  {body ? (
                    <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                      {body}
                    </p>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
