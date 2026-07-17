import type { GalleryContent } from "@/types/content";

/**
 * 사진 갤러리 블록 (독립 컴포넌트).
 * 이미지가 없으면 아무것도 렌더링하지 않는다. (안전한 폴백)
 *
 * 참고: 사용자가 넣는 사진 URL은 어떤 도메인이든 될 수 있으므로,
 * next/image 대신 일반 <img>를 써서 도메인 설정 없이도 절대 깨지지 않게 한다.
 */
export function Gallery({ data }: { data?: GalleryContent }) {
  const images = data?.images ?? [];
  if (!data || images.length === 0) return null;

  return (
    <section
      id="gallery"
      className="border-t border-black/[.08] bg-zinc-50 py-20 dark:border-white/[.145] dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-5xl px-6">
        {data.heading ? (
          <h2 className="text-center text-3xl font-bold tracking-tight">
            {data.heading}
          </h2>
        ) : null}

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {images.map((image, i) => (
            <figure
              key={image.src + i}
              className="overflow-hidden rounded-xl border border-black/[.08] bg-white p-6 dark:border-white/[.145] dark:bg-black"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                className="mx-auto h-24 w-auto object-contain"
              />
              {image.caption ? (
                <figcaption className="mt-3 text-center text-sm text-zinc-600 dark:text-zinc-300">
                  {image.caption}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
