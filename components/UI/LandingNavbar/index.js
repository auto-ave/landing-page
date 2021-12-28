import Image from "next/image"
import logo from '@public/logo.png'
import Link from "next/link"
import React from "react"

export default function Navbar() {
    const [scrollPosition, setScrollPosition] = React.useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    return (
        <>
            <div className="navbar p-5 backdrop-blur-xl">
                <div className="flex flex-row justify-between items-center max-w-7xl mx-auto">
                    <div>
                        <Image src={logo} alt="Autoave Logo" />
                    </div>
                    <div className="flex">
                        <Link href="/">
                            <a className="navbar-item text-primary">
                                Home
                            </a>
                        </Link>
                        <div className="navbar-item">
                            About
                        </div>
                        <div className="navbar-item">
                            Contact Us
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .navbar {
                    background: ${scrollPosition > 500 ? 'rgba(255,255,255, 0.8)' : 'white'};
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    width: 100%;
                    z-index: 100;
                    transition: 0.5s;
                }
                .navbar-item {
                    padding: 0.5rem 1rem;
                    font-weight: 700;
                }
            `}</style>
        </>
    )
}