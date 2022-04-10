import Image from 'next/image'
import React from 'react'
import scene from '@public/images/bangalore-scene.webp'
import BgImage from '@components/Custom/BgImage'
import ContantUsForm from '@components/Forms/ContactUsform'
import { useRouter } from 'next/router'
import localisation, { COUNTRY_TO_LOCALE } from '@utils/localisation'
import useLocation from '@utils/useLocation'

export default function LandingContactUs(){
    const router = useRouter()
    const location_data = useLocation()

    const locale = COUNTRY_TO_LOCALE(location_data?.countryName)
    console.log("locale: ", locale)

    return (
        <>
            <div className="outer-container">
                <div className="container md:max-w-7xl p-5 py-16">
                    <div className="md:flex flex-wrap items-center w-100">
                        <div className='flex-1 mb-4 md:mb-0'>
                            <div className='md:max-w-lg mb-5'>
                                <BgImage imgsrc={scene} imgalt="Autoave Logo" borderRadius="8px">
                                    <div className='pt-52'>
                                        <h3 className='text-white text-3xl p-5 tracking-tight'>
                                            {localisation[locale].service_location_text}
                                        </h3>
                                    </div>
                                </BgImage>
                            </div>
                            <div className='p-3'>
                                <h3 className='mb-4 text-xl'>AUTOAVE PRIVATE LIMITED</h3>
                                <p className='mb-3'>
                                    {localisation[locale].address}
                                </p>
                                <p>
                                    Email: <a href={`mailto:${localisation[locale].email}`}>{localisation[locale].email}</a>
                                </p>

                            </div>
                        </div>
                        <div className="flex-1 p-5 w-100">
                            <div className=''>
                                <h4 className='text-4xl mb-5 md:mb-8'>
                                    Contact Us
                                </h4>
                                <ContantUsForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}