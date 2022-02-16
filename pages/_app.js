import { DefaultSeo } from 'next-seo'

import '/styles/global.css'
import { useEffect } from 'react';

import { useRouter } from 'next/dist/client/router';
import MixpanelTracking from 'service/mixpanel';
import { PAGE_VIEW } from '@utils/contants/tracking_events';

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url, data) => {
            if(!data.shallow){
                console.log('inside handleRouteChange', data);
                var mixpanel = MixpanelTracking.getInstance();
                mixpanel.track(PAGE_VIEW)
            }
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events])

    useEffect(() => {
        console.log('calling mixpanel tracking');
        var mixpanel = MixpanelTracking.getInstance();
        mixpanel.track(PAGE_VIEW)
    }, [])

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
            <Component {...pageProps} />
        </>
    )
}

export default MyApp