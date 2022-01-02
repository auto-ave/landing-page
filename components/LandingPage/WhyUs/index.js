import { LANDING_WHY_US } from "@utils/contants/landing_page";
import Image from "next/image";

export default function WhyUs(){
    return (
        <>
            <div className="container max-w-7xl p-5">
                <h2 className="text-3xl md:text-4xl lg:text-6xl">
                    You&apos;ll love <span className="text-primary">autoave</span>
                </h2>
                <div className="flex flex-wrap justify-between items-center">
                    {LANDING_WHY_US.map((item, index) => {
                        return (
                            <div className={`md:flex-1 p-3 max-w-xs`} key={item.key} style={{ marginTop: `${item.marginTop}rem` }}>
                                <div className="mb-4 relative pt-56">
                                    <Image src={item.image} layout="fill" objectFit="contain" alt={`why us ${index}`} />
                                    <div className="icon-container absolute flex align-middle justify-center">
                                        <Image src={item.icon} alt={`Why us icon ${index}`} priority />
                                    </div>
                                </div>
                                <div>
                                    <h5 className="text-2xl mb-2">
                                        {item.title} 
                                    </h5>
                                    <p className="">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <style jsx>{`
                .icon-container {
                    position: absolute;
                    top: -25px;
                    right: -25px;
                    background: white;
                    border-radius: 50%;
                    height: 50px;
                    width: 50px;
                    box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.25);
                }
            `}</style>
        </>
    )
}