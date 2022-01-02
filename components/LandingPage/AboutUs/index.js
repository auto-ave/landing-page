import VehicleWashImage from '@public/images/vehicle-wash-1.png';
import Image from 'next/image';

export default function AboutUs(){
    return (
        <>
            <div className="container max-w-7xl p-5 mb-5 md:mb-32">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="md:flex-1 p-3">
                        <h2 className="text-3xl md:text-4xl lg:text-6xl mb-5">
                            Your Vehicle <br />
                            Your Wash <br />
                            On <span className="text-primary">Demand!</span>
                        </h2>
                        <p>
                            We are a platform that will ease the tedious process of waiting 
                            in queues at car care services. Consumers can pre-book their 
                            services according to the time and budget that suits their needs. 
                            We provide diverse options to choose vehicular services from 
                            various stores; just like selecting meals in zomato.
                        </p>
                    </div>
                    <div className="md:flex-1 p-3">
                        <div>
                            <Image src={VehicleWashImage} alt="Car Wash" />
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`

            `}</style>
        </>
    )
}