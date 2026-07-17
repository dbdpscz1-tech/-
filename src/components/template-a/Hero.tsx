import type { TemplateAHeroData } from "./types";
import { SafeImage } from "./SafeImage";

/**
 * Template A · 히어로(메인 배너) (독립 컴포넌트).
 *
 * [사진 URL, 카테고리 이름, 본문 텍스트]를 받아 배경 사진 위에 문구를 얹는다.
 * 사진이 없거나 깨져도 그라데이션 배경으로 대체되어 화면이 깨지지 않는다.
 */
export function Hero({ data }: { data?: TemplateAHeroData }) {
  const categoryName = data?.categoryName?.trim();
  const body = data?.body?.trim() || "자연 속에서 즐기는 특별한 하루";

  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* 배경 사진 (없거나 깨지면 SafeImage가 그라데이션으로 대체) */}
      <SafeImage
        src={data?.photoUrl}
        alt={categoryName ? `${categoryName} 대표 사진` : "메인 배너 사진"}
        label="대표 사진"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      {/* 가독성을 위한 어두운 오버레이 */}
      <div className="absolute inset-0 -z-10 bg-black/45" />

      <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-start justify-center gap-6 px-5 py-24 text-white">
        {categoryName ? (
          <span className="rounded-full bg-emerald-500/90 px-4 py-1.5 text-sm font-semibold shadow-sm">
            {categoryName}
          </span>
        ) : null}

        <h1 className="max-w-3xl whitespace-pre-line text-4xl font-extrabold leading-tight tracking-tight drop-shadow-md sm:text-5xl md:text-6xl">
          {body}
        </h1>

        {data?.ctaLabel ? (
          <a
            href={data.ctaHref || "#features"}
            className="mt-2 inline-flex items-center rounded-full bg-white px-7 py-3 text-base font-semibold text-emerald-800 shadow-lg transition-transform hover:scale-[1.03]"
          >
            {data.ctaLabel}
          </a>
        ) : null}
      </div>
    </section>
  );
}
