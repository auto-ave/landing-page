import Image from "next/image";

import mancleaning from '@public/images/man-cleaning-2.png'
import ROUTES from "@utils/routes";

export default function RegisterStore() {
    return (
        <>
            <div className="container max-w-7xl p-5">
                <div className="flex items-center">
                    <div className="md:flex-1">
                        <div>
                            <Image src={mancleaning} />
                        </div>
                    </div>
                    <div className="md:flex-1">
                        <div>
                            <h4 className="text-5xl mb-5 md:mb-10">
                                Register your store on <span className="text-primary">Autoave</span> for free
                            </h4>
                            <div className="">
                                <a href={ROUTES.REGISTER_STORE}>
                                    <div className="inline bg-primary text-white font-bold rounded py-2 px-4 ">
                                        Register Store
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}