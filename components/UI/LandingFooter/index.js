import Image from 'next/image'

import logo from '@public/logo.png'
import ROUTES from '@utils/routes'

export default function LandingFooter() {
    return (
        <>
            <div className="bg-tertiary">
                <div className="container max-w-7xl px-5">
                    <div className="border-b-2 py-5">
                        <div className="flex flex-wrap justify-center md:justify-between items-center">
                            <div className='mb-4 md:mb-0'>
                                <a href={ROUTES.HOME}> 
                                    <Image src={logo} alt="Autoave Logo" />
                                </a>
                            </div>
                            <div className="flex flex-wrap justify-center">
                                <a href={ROUTES.HOME} className="footer-item">
                                    Home
                                </a>
                                <a href={ROUTES.CONTACT_US} className="footer-item">
                                    Contact Us
                                </a>
                                <a href={ROUTES.COOKIES_POLICY} className="footer-item">
                                    Cookie Policy
                                </a>
                                <a href={ROUTES.TERMS_AND_CONDITIONS} className="footer-item">
                                    Terms and Conditions
                                </a>
                                <a href={ROUTES.PRIVACY_POLICY} className="footer-item">
                                    Privacy Policy
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='py-5'>
                        <div className="flex flex-row justify-between items-center">
                            <div>
                                &copy; 2021 Autoave Private Limited All rights reserved
                            </div>
                            <div className="flex">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .footer-item {
                    padding: 0.5rem 1rem;
                    
                }
            `}</style>
        </>
    )
}