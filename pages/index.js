import AboutUs from "@components/LandingPage/AboutUs";
import ContactUs from "@components/LandingPage/ContactUs";
import GetTheApp from "@components/LandingPage/GetTheApp";
import RegisterStore from "@components/LandingPage/RegisterStore";
import TopCTA from "@components/LandingPage/TopCTA";
import WhyUs from "@components/LandingPage/WhyUs";
import LandingFooter from "@components/UI/LandingFooter";
import LandingNavbar from "@components/UI/LandingNavbar";
import { FACEBOOK_APP_ID, FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL, SITE_URL } from "@utils/contants/general";

import { NextSeo } from "next-seo";
import { SocialProfileJsonLd } from 'next-seo';

export default function Home() {
    return (
        <>
            <NextSeo
                title="Autoave - Online Car Care Service Booking"
                description="Simplifying the way you take care of your car. We providing a wide range of store and service options to choose. No more queues now, choose timings according to your convenience."
                tags="Autoave, Car Care"
                canonical={SITE_URL}
                openGraph={{
                    url: SITE_URL,
                    title: 'Autoave - Online Car Care Service Booking',
                    description: 'Simplifying the way you take care of your car. We providing a wide range of store and service options to choose. No more queues now, choose timings according to your convenience.',
                    images: [
                        {
                            url: 'https://www.autoave.in/autoave-banner.jpg',
                            width: 1200,
                            height: 628,
                            alt: 'Autoave Banner',
                            type: 'image/jpeg',
                        },
                    ],
                    site_name: 'Autoave',
                }}
                facebook={{
                    appId: FACEBOOK_APP_ID,
                }}
                additionalMetaTags={[{
                    name: 'keywords',
                    content: 'Autoave, Car Wash, Book Car Wash, Car Care, Car Wash in Banglore'
                }]}
            />
            <SocialProfileJsonLd
                type="Organization"
                name="Autoave"
                url={SITE_URL}
                sameAs={[
                    FACEBOOK_URL,
                    INSTAGRAM_URL,
                    LINKEDIN_URL
                ]}
            />
            <LandingNavbar />
            <div className="content">
                <TopCTA />
                <AboutUs />
                <WhyUs />
                <RegisterStore />
                <GetTheApp />
                <ContactUs />
                <LandingFooter />
            </div>
            <style jsx>{`
                .content {
                    margin-top: 80px;
                }
            `}</style>
        </>
    )
}
