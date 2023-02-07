//fghjkl

import Image from "next/image";
import NotAvailableImg from "../../assets/images/rafiki.png"

export default function NotAvailable(){

    return(
        <div className="container">
            <div className="flex flex-col items-center justify-center m-auto">
                <Image src={NotAvailableImg} alt="" />
                <h1 className="font-bold text-lg my-4">Page not available !!!</h1>
                <p>We are currently working on this page, to bring the best experience to you</p>
                <button className="btn-prim w-sm mt-5">Go to Dashboard</button>
            </div>
        </div>
    )
}