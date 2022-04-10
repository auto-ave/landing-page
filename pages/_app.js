import { DefaultSeo } from 'next-seo'

import '/styles/global.css'
import { useEffect } from 'react';

import { useRouter } from 'next/dist/client/router';
import MixpanelTracking from 'service/mixpanel';
import { PAGE_VIEW } from '@utils/contants/tracking_events';
import LOCALISATION_DATA, { COUNTRY_TO_LOCALE } from "@utils/localisation"
import useLocation from "@utils/useLocation"

// Performance Metrics logging
// export function reportWebVitals(metric) {
//     console.log(metric)
// }

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    
    const location_data = useLocation()
    const locale = COUNTRY_TO_LOCALE(location_data?.countryName)
    console.log("locale: ", locale)

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
                    url: LOCALISATION_DATA[locale].domain,
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