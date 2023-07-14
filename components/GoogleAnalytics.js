'use client';

import { memo, useEffect } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';

import Script from 'next/script';

const GoogleAnalytics = () => {
  const pathname = usePathname();

  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();

    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, {
      page_path: url,
    });
  }, [pathname, searchParams, process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
      <Script strategy="afterInteractive" id="ga">
        {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });
          `}
      </Script>
    </>
  );
};

export default memo(GoogleAnalytics);
