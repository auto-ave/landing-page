import Image from "next/image"
import logo from '@public/logo.png'
import Link from "next/link"

export default function Navbar() {
    return (
        <>
            <div className="container max-w-6xl p-5 backdrop-blur-lg">
                <div className="flex flex-row justify-between items-center">
                    <div>
                        <Image src={logo} alt="logo" />
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
                .navbar-item {
                    padding: 0.5rem 1rem;
                    font-weight: 700;
                }
            `}</style>
        </>
    )
}