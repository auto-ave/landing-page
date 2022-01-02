import Image from "next/image";

import mancleaning from '@public/images/man-cleaning-2.png'
import ROUTES from "@utils/routes";

export default function RegisterStore() {
    return (
        <>
            <div className="container max-w-7xl p-5 py-32">
                <div className="flex items-center">
                    <div className="">
                        <div>
                            <Image src={mancleaning} alt="Man Cleaning" />
                        </div>
                    </div>
                    <div className="p-8 md:p-16">
                        <div>
                            <h4 className="text-5xl mb-5 md:mb-10">
                                Register your store on <span className="text-primary">Autoave</span> for free
                            </h4>
                            <div className="">
                                <a href={ROUTES.REGISTER_STORE}>
                                    <button className="flex-shrink-0 transition-all bg-primary hover:text-white text-sm text-white py-3 px-5 rounded " style={{ background: "radial-gradient(178.69% 362.78% at 107.07% -9.42%, #003676 0%, #A0CCFF 100%)" }}>
                                        Register Store
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}