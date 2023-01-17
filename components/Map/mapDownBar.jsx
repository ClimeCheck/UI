import MapContentCard from "./MapContentCard";
import getDate from "../../utils/getDate";
import { getTime } from "../../utils/getDate";
import { mapSideContent } from "./MapData";

function MapDownBar({ open, setOpen }) {
  return (
    <div
      className={`z-20 absolute bg-black max-w-80 min-w-screen ease-in-out transition-all fixed p-2  ${
        open ? "buttom-0" : "hidden"
      }`}
    >
      <div className="mx-5">
        <div className="text-white py-5 mb-8 ">
          <div className="grid grid-cols-4">
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
            <div className="flex col-span-1 justify-end">
              <button
                onClick={() => setOpen(!open)}
                className="bg-white text-primary px-4 py-2 rounded-sm self-center"
              >
                View Statistics
              </button>
            </div>
          </div>
          {/* <button onClick={() => setOpen(!open)}>close</button> */}
        </div>
        <div className="grid grid-cols-4 gap-4">
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
                <div key={key} className="col-span-1">
                  <MapContentCard
                    value={value}
                    alert={alert}
                    changes={changes}
                    direction={direction}
                    subscript={subscript}
                    parameter={parameter}
                    superscript={superscript}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default MapDownBar;
