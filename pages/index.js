import AboutUs from "@components/LandingPage/AboutUs";
import ContactUs from "@components/LandingPage/ContactUs";
import GetTheApp from "@components/LandingPage/GetTheApp";
import RegisterStore from "@components/LandingPage/RegisterStore";
import TopCTA from "@components/LandingPage/TopCTA";
import WhyUs from "@components/LandingPage/WhyUs";
import LandingFooter from "@components/UI/LandingFooter";
import LandingNavbar from "@components/UI/LandingNavbar";

import { NextSeo } from "next-seo";

export default function Home() {
    return (
        <>
            <NextSeo
                title="Autoave - Online Car Care Service Booking"
                description="Simplifying the way you take care of your car. We providing a wide range of store and service options to choose. No more queues now, choose timings according to your convenience."
                canonical="https://www.autoave.in/"
                openGraph={{
                    url: 'https://www.autoave.in/',
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
