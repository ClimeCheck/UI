/* eslint-disable @next/next/no-img-element */
import { BiDevices } from "react-icons/bi";
import Link from "next/link";

function DataStreamCards({
  icon,
  continent,
  totalDevices,
  percentActive,
  amountActive,
}) {
  return (
    <Link href="/explore/map">
    <div className="bg-slate-300 rounded-md p-5 min-w-[250px] group hover:bg-secondary/40">
      <div className="flex justify-between w-full h-full items-center">
        <p className="text-secondary text-sm font-bold p-3 group-hover:text-white">{continent}</p>
        <img src={`/${continent}.svg`} className="w-12" alt={continent} />
      </div>

      <div>
        <div className="mt-2">
          <h1 className="text-3xl font-bold text-secondary group-hover:text-primary">{totalDevices}</h1>
          {/**Add Percent Increase and Icon */}
        </div>
        <p className="text-sm text-primary py-4">Connected Devices</p>
      </div>
      <div className="flex flex-row w-full justify-between items-center h-full mt-5">
        <div className="self-center text-sm group-hover:text-white">{percentActive} active</div>
        <div className="font-bold text-2xl text-primary">{amountActive}</div>
        <BiDevices size={35} className="text-[#BE690B]" />
      </div>
    </div>
    </Link>
  );
}

export default DataStreamCards;
