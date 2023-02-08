import MapContentCard from "./MapContentCard";
import { mapSideContent } from "./MapData";

function MapSideBar({ open, setOpen, continent }) {
  return (
    <div
      className={`flex flex-col font-Grotesk gap-8 z-50 p-4 w-80 bg-white ease-in-out transition-all h-full`}
    >
      <div className="text-black ">
        <div>
          <div className=" grid grid-cols-4 gap-2 justify-between py-5">
            <div className="col-span-3">
              <p>Welcome to</p>
              <h1 className="text-3xl ">{continent} Continent</h1>
            </div>
            <div className="flex col-span-1 pl-8">
              <button
                onClick={() => setOpen(!open)}
                className="border border-primary text-primary px-1 rounded-sm self-center"
              >
                &larr;
              </button>
            </div>
          </div>

          <p className="pr-1 text-base">
            Stay informed about ambient air quality data in {continent}. See the
            average statistics for the continent below
          </p>
        </div>
      </div>
      <div className="gap-4 flex flex-col">
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
  );
}

export default MapSideBar;
