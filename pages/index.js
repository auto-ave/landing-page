import AboutUs from "@components/LandingPage/AboutUs";
import TopCTA from "@components/LandingPage/TopCTA";
import WhyUs from "@components/LandingPage/WhyUs";
import LandingFooter from "@components/UI/LandingFooter/idnex";
import LandingNavbar from "@components/UI/LandingNavbar";

export default function Home() {
    return (
        <>
            <LandingNavbar />
            <div className="content">
                <TopCTA />
                <AboutUs />
                <WhyUs />
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
