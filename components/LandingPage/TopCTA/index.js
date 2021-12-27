import background from '@public/images/cta-background.webp'
import PlayStoreBadge from '@public/play-store-badge.png'
import AppStoreBadge from '@public/app-store-badge.png'
import Image from 'next/image'
import BgImage from '@components/Custom/BgImage'

export default function TopCTA(){
    return (
        <>
            <BgImage imgsrc={background} className="cta-background" tintOpacity="0.8">
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
                            <Image src={PlayStoreBadge} />
                        </a>
                        <a href="" className='m-2'>
                            <Image src={AppStoreBadge} />
                        </a>
                        
                    </div>
                </div>
            </BgImage>
            <style jsx>{`
                .cta-background {
                    position: relative;
                    background-image: url('${background}');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    z-index: 3;
                }
                
            `}</style>
        </>
    )
}