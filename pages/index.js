import AboutUs from "@components/LandingPage/AboutUs";
import TopCTA from "@components/LandingPage/TopCTA";
import WhyUs from "@components/LandingPage/WhyUs";
import LandingFooter from "@components/UI/LandingFooter/idnex";
import LandingNavbar from "@components/UI/LandingNavbar";

export default function Home() {
    return (
        <>
            <LandingNavbar />
            <TopCTA />
            <AboutUs />
            <WhyUs />
            <LandingFooter />
            <style jsx>{`

            `}</style>
        </>
    )
}
