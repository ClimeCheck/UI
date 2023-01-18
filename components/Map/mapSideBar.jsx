import MapContentCard from "./MapContentCard";
import { mapSideContent } from "./MapData";

function MapSideBar({open, setOpen}) {
    return ( 
        <div
            className={`z-20 absolute bg-white max-w-80 min-h-screen w-96 sm:max-w-96 md:max-w-md ease-in-out transition-all  ${
              open ? "left-0" : "left-[-100vh]"
            }`}
          >
            <div className="text-black p-5 mb-8">
              <div>
                <div className=" grid grid-cols-4 gap-2 justify-between py-5">
                  <div className="col-span-3">
                    <p>Welcome to</p>
                    <h1 className="text-3xl ">Asia Continent</h1>
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
                  Stay informed about ambient air quality data in Asia. See the
                  average statistics for the continent below
                </p>
              </div>
              {/* <button onClick={() => setOpen(!open)}>close</button> */}
            </div>
            <div className="content">
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
                    <div key={key} className="mx-5">
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
     );
}

export default MapSideBar;