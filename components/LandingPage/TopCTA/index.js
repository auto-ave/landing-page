import Image from 'next/image'
import BgImage from '@components/Custom/BgImage'

import background from '@public/images/cta-background.webp'
import PlayStoreBadge from '@public/images/play-store-badge.png'
import AppStoreBadge from '@public/images/app-store-badge.png'
import AppScreen1 from '@public/images/autoave-app-1.png'
import AppScreen2 from '@public/images/autoave-app-2.png'
import AppScreen3 from '@public/images/autoave-app-3.png'

export default function TopCTA(){
    return (
        <>
            <BgImage imgsrc={background} imgalt={"Car Wash Background"} className="cta-background" tintOpacity="0.8" priority={true}>
                <div className="container px-5 py-32 md:py-48 text-center">
                    <h1 className="text-white text-3xl md:text-5xl lg:text-7xl max-w-4xl mx-auto mb-3">
                        Giving your vehicle the <span className='text-secondary'>love</span> it deserves
                    </h1>
                    <p className='text-white max-w-2xl mx-auto mb-7'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, morbi posuere 
                        habitasse consequat neque a mauris vel leo. Vel dictum viverra tortor
                    </p>
                    <div className='flex justify-center'>
                        <a href="" className='m-2'>
                            <Image src={PlayStoreBadge} alt="Play Store Badge" />
                        </a>
                        <a href="" className='m-2'>
                            <Image src={AppStoreBadge} alt="App Store Badge" />
                        </a>
                        
                    </div>
                </div>
            </BgImage>
            <div className="app-showcase flex items-center justify-center">
                <div className="image1">
                    <Image src={AppScreen1} alt="Autoave App Screen" />
                </div>
                <div className="image2">
                    <Image src={AppScreen2} alt="Autoave App Screen" />
                </div>
                <div className="image3">
                    <Image src={AppScreen3} alt="Autoave App Screen" />
                </div>
            </div>
            <style jsx>{`
                .cta-background {
                    position: relative;
                    background-image: url('${background}');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    z-index: 3;
                }
                .app-showcase {
                    position: relative;
                    top: -100px;
                    z-index: 100;
                }
                .image1 {
                    position: relative;
                    top: 20px;
                    left: 130px;
                    transform: rotate(-15deg);
                    animation-name: leftImage;
                    animation-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
                    animation-duration: 1.4s;
                }
                .image3 {
                    position: relative;
                    top: 20px;
                    right: 130px;
                    transform: rotate(15deg);
                    animation-name: rightImage;
                    animation-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
                    animation-duration: 1.4s;
                }
            `}</style>
        </>
    )
}