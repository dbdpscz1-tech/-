import Script from "next/script";

/**
 * Google Tag Manager (GTM) 연동 블록 (헌법 규칙 3: 확장성).
 *
 * 환경변수 NEXT_PUBLIC_GTM_ID 가 있을 때만 스크립트를 로드한다.
 * ID가 없으면 아무것도 렌더링하지 않으므로, 광고 연동 전에도 앱이 정상 동작한다.
 *
 * 사용법:
 *   - <GoogleTagManager /> 를 <head> 안(layout의 최상단)에 둔다.
 *   - <GoogleTagManagerNoScript /> 를 <body> 바로 아래에 둔다.
 */

export function GoogleTagManager() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  if (!gtmId) return null;

  return (
    <Script id="gtm-base" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
    </Script>
  );
}

export function GoogleTagManagerNoScript() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  if (!gtmId) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="gtm"
      />
    </noscript>
  );
}
