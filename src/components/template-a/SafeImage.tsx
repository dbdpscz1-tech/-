"use client";

import { useState } from "react";

/**
 * 절대 깨지지 않는 이미지 컴포넌트.
 *
 * - 사진 URL이 없거나(빈 값)
 * - URL이 잘못되어 로딩에 실패해도
 * 화면이 깨지지 않고, 부드러운 그라데이션 플레이스홀더를 대신 보여준다.
 *
 * className 은 실제 이미지와 플레이스홀더 모두에 동일하게 적용되어 레이아웃이 유지된다.
 */
export function SafeImage({
  src,
  alt = "",
  className = "",
  label,
}: {
  src?: string;
  alt?: string;
  className?: string;
  /** 플레이스홀더 위에 표시할 짧은 텍스트(선택) */
  label?: string;
}) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  if (showPlaceholder) {
    return (
      <div
        role="img"
        aria-label={alt || label || "이미지"}
        className={`flex items-center justify-center bg-gradient-to-br from-emerald-200 via-teal-200 to-sky-200 text-emerald-900/70 dark:from-emerald-900 dark:via-teal-900 dark:to-sky-900 dark:text-emerald-100/70 ${className}`}
      >
        <span className="px-3 text-center text-sm font-medium">
          {label ?? "이미지 준비 중"}
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
