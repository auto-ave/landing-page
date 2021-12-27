import { LANDING_WHY_US } from "@utils/contants/landing_page";
import Image from "next/image";

export default function WhyUs(){
    return (
        <>
            <div className="container max-w-6xl p-5">
                <h2 className="text-3xl md:text-4xl lg:text-6xl">
                    You'll love <span className="text-primary">autoave</span>
                </h2>
                <div className="flex flex-wrap justify-between items-center">
                    {LANDING_WHY_US.map((item, index) => 
                        <div className="md:flex-1 p-3" key={item.key}>
                            <div>
                                <Image src={item.image} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}