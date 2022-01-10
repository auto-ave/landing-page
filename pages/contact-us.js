import LandingContactUs from "@components/LandingPage/ContactUs";
import LandingFooter from "@components/UI/LandingFooter";
import Navbar from "@components/UI/LandingNavbar";
import { NextSeo } from "next-seo";

export default function ContactUs(){
    return (
        <>
            <NextSeo
                title="Contact Us - Autoave"
                description="Simplifying the way you take care of your car. We providing a wide range of store and service options to choose. No more queues now, choose timings according to your convenience."
                canonical="https://www.autoave.in/contact-us"
                openGraph={{
                    url: 'https://www.autoave.in/contact-us',
                    title: 'Contact Us - Autoave',
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
            <div className="flex flex-col justify-between min-h-screen">
                <Navbar />
                <div className="py-32">
                    <LandingContactUs />
                </div>
                <LandingFooter />
            </div>
            
        </>
    )
}