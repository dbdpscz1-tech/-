import type { PostListContent } from "@/types/content";

/**
 * 글(포스트) 목록 블록 (독립 컴포넌트).
 * 글이 없으면 아무것도 렌더링하지 않는다. (안전한 폴백)
 */
export function PostList({ data }: { data?: PostListContent }) {
  const posts = data?.posts ?? [];
  if (!data || posts.length === 0) return null;

  return (
    <section id="posts" className="mx-auto max-w-5xl px-6 py-20">
      {data.heading ? (
        <h2 className="text-center text-3xl font-bold tracking-tight">
          {data.heading}
        </h2>
      ) : null}

      <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-6">
        {posts.map((post, i) => (
          <article
            key={post.title + i}
            className="rounded-2xl border border-black/[.08] p-6 dark:border-white/[.145]"
          >
            {post.cover?.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.cover.src}
                alt={post.cover.alt}
                className="mb-4 h-40 w-full rounded-lg object-cover"
              />
            ) : null}
            <h3 className="text-xl font-semibold">{post.title}</h3>
            {post.publishedAt ? (
              <time className="mt-1 block text-xs text-zinc-500">
                {post.publishedAt}
              </time>
            ) : null}
            <p className="mt-3 whitespace-pre-line text-zinc-700 dark:text-zinc-300">
              {post.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
