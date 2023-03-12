import MapContentCard from "./MapContentCard";
import getDate from "../../utils/getDate";
import { getTime } from "../../utils/getDate";
import { mapSideContent } from "./MapData";
import Link from "next/link";

function MapDownBar({ open, setOpen }) {
  return (
    <div
      className={` bg-black w-full font-Grotesk ease-in-out transition-all p-2`}
    >
      <div className="mx-5 ">
        <div className="text-white py-5 mb-8 ">
          <div className="flex justify-center sm:justify-between items-center flex-wrap">
            <div className="col-span-3 grid grid-cols-1 gap-2 justify-between py-5">
              <div className="flex gap-4">
                <p className="font-bold text-xl">Kano , Nigeria</p>
                <p className="text-sm self-center">
                  ({getTime(Date.now())}, today {getDate(Date.now())})
                </p>
              </div>
              <p className="pr-1 text-base">
                120-200: Some members of the general public may experience
                health effects within 24 hours of exposture; members of
                sensitive group may experience more serious health effects.
              </p>
            </div>
            <div className="">
              <Link
                href="/dashboard"
                className="bg-white text-primary px-4 py-2 rounded-sm self-center"
              >
                View Statistics
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-stretch justify-center flex-wrap gap-4 mb-4 ">
          {mapSideContent.map(
            (
              {
                parameter,
                value,
                direction,
                alert,
                subscript,
                superscript,
                changes,
              },
              key
            ) => {
              return (
                <MapContentCard
                  key={key}
                  value={value}
                  alert={alert}
                  changes={changes}
                  direction={direction}
                  subscript={subscript}
                  parameter={parameter}
                  superscript={superscript}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default MapDownBar;
