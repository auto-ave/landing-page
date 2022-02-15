import Image from "next/image"
import AppScreen2 from '@public/images/autoave-app-home-half.webp'
import AppScreen1 from '@public/images/autoave-app-store-page-half.webp'
import { APPSTORE_URL, PLAYSTORE_URL } from "@utils/contants/general"
import PlayStoreBadge from '@public/images/play-store-badge.png'
import AppStoreBadge from '@public/images/app-store-badge.png'
import MixpanelTracking from "service/mixpanel"
import { DOWNLOAD_CLICK } from '@utils/contants/tracking_events'

export default function GetTheApp(){
    const handleDownload = (type) => {
        MixpanelTracking.getInstance().track(DOWNLOAD_CLICK, {
            "Download Type": type
        })
    }
    return (
        <>
            <div className="outer-container">
                <div className="container max-w-7xl ">
                    <div className="flex items-center">
                        <div className="px-5 py-16 lg:py-5">
                            <div className="mb-5">
                                <h3 className="text-white text-5xl mb-5">
                                    Car Care made simple
                                </h3>
                                <p className="text-white">
                                    India&apos;s only platform where you can choose between various stores and services 
                                    to find what&apos;s best for your car. See pricing, images, reviews, and ratings before 
                                    selecting the best service store for your vehicle.
                                </p>
                            </div>
                            <div>
                                <h5 className="text-white text-xl bold mb-2">Get the App</h5>
                                <div className="flex">
                                    <a href={PLAYSTORE_URL} className="mr-2" target="_blank" rel="noreferrer" onClick={() => handleDownload("Play Store - Page Bottom CTA")}>
                                        <Image src={PlayStoreBadge} alt="Play Store Badge" priority />
                                    </a>
                                    <a href={APPSTORE_URL} className="ml-2" target="_blank" rel="noreferrer" onClick={() => handleDownload("App Store - Page Bottom CTA")}>
                                        <Image src={AppStoreBadge} alt="App Store Badge" priority />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <Image src={AppScreen1} alt="Autoave App Screen 1" height={369*2 + 100} width={279*2} />
                        </div>
                        <div className="hidden lg:block">
                            <Image src={AppScreen2} alt="Autoave App Screen 2" height={369*2 + 100} width={279*2} />
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .outer-container {
                    background-image: url('/images/autoave-circle-background.svg'), radial-gradient(50% 430.06% at 50% 45.32%, #3570B5 0%, #042A56 100%) ;
                    background-size: cover;
                }
            `}</style>
        </>
    )
}