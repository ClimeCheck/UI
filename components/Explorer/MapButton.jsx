import { BsMap } from "react-icons/bs";
import Link from "next/link";

export default function MapButton() {
  return (
    <>
    <Link href="/explore/map">
      <div className="rounded-full w-fit py-4 px-2 bg-primary flex flex-col self-center text-white">
        <BsMap size={25} className="flex self-center w-5" />
        <p>View Map</p>
      </div>{" "}
    </Link>
    </>
    
  );
}
