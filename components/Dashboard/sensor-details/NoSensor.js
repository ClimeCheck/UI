import Image from "next/image";
import DisappointedFace from "../../assets/images/DisappointedFace.png";

export default function NotAvailable() {
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center m-auto">
        <Image src={DisappointedFace} height={450} alt="" />
        <h1 className="font-bold text-lg my-4">
          You don’t have any connected device
        </h1>
        <div className="flex items-center justify-center gap-3">
          <button className="p-4 border bg-[#74BF44] rounded-lg text-white">
            Connect to an existing device
          </button>
          <button className="p-4 border border-[#74BF44] rounded-lg text-[#74BF44]">
            Claim a device
          </button>
        </div>
      </div>
    </div>
  );
}
