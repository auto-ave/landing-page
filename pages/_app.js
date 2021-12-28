import Script from 'next/script'
import { DefaultSeo } from 'next-seo'

import '/styles/global.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <DefaultSeo
                openGraph={{
                    type: 'website',
                    locale: 'en_IN',
                    url: 'https://www.autoave.in/',
                    site_name: 'Autoave',
                }}
                twitter={{
                    cardType: 'summary_large_image',
                }}
            />
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                `}
            </Script>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp