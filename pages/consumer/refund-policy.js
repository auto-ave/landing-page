import LandingContactUs from "@components/LandingPage/ContactUs";
import LandingFooter from "@components/UI/LandingFooter";
import Navbar from "@components/UI/LandingNavbar";
import { NextSeo } from "next-seo";

export default function RefundPolicy() {
    return (
        <>
            <NextSeo
                title="Refund Policy"
                description="Simplifying the way you take care of your car. We providing a wide range of store and service options to choose. No more queues now, choose timings according to your convenience."
                canonical="https://www.autoave.in/consumer/refund-policy"
                openGraph={{
                    url: 'https://www.autoave.in/consumer/refund-policy',
                    title: 'Refund Policy',
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
            <Navbar light />
            <div className="container p-3 py-40">
                <h1 className="text-2xl md:text-4xl">Refund Policy</h1>
                <p className="mb-5">Updated at 2021-12-23</p>

                <li>
                    There may be cases where Autoave is either unable to process your booking or cancels the booking, due to reasons including without 
                    limitation, technical errors, unavailability of the services booked, or any other reason attributable to Autoave or Service 
                    Partner. In such cases, Autoave shall not charge a cancellation charge from you. If the booking is 
                    cancelled after payment has been charged and you are eligible for a refund of the Booking Value or any part thereof, the said 
                    amount will be reversed to you.
                </li>
                <li>
                    No replacement / refund / or any other resolution will be provided without Service Partner&apos;s/Store(s)&apos; permission.
                </li>
                <li>
                    Any complaint, with respect to the services which shall include instances but not be limited to minor scratches, poor wash quality, unadequate 
                    service quality, You will be required to share the proof of the same before any resolution can be provided and that proof would then be shared 
                    with the Service Partner before a refund can be initiated.
                </li>
                <li>
                    You shall not be entitled to a refund in case instructions placed along with the booking are not followed in the form and 
                    manner you had intended. Instructions are followed by the Service Partner on a best-efforts basis.
                </li>
                <li>
                    All refunds shall be processed in the same manner as they are received, unless refunds have been provided to You in the 
                    form of credits/coupons, refund amount will reflect in your account based on respective banks policies.
                </li>
            </div>
            <LandingContactUs />
            <LandingFooter />
        </>
    )
}