import Image from 'next/image'

import scene from '@public/images/bangalore-scene.webp'
import BgImage from '@components/Custom/BgImage'
import ContantUsForm from '@components/Forms/ContactUsform'

export default function LandingContactUs(){
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
                                            Proudly serving in Bangalore
                                        </h3>
                                    </div>
                                </BgImage>
                            </div>
                            <div className='p-3'>
                                <h3 className='mb-4 text-xl'> AUTOAVE PRIVATE LIMITED</h3>
                                <p className='mb-3'>
                                    No-42 ,4th Main, NGEF Layout, Postal Colony, Sanjaynagar,  Bangalore, Karnataka-560094
                                </p>
                                <p>
                                    Email: <a href="mailto:care@autoave.in">care@autoave.in</a>
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