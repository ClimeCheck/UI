import { DataStreamsByContinent } from "../streamsData";
import DataStreamCards from "./DataStreamCard";

function DataStream() {
  return (
    <div className="hero min-h-screen font-Grotesk text-white bg-slate-900 bg-opacity-80 ">
      <div className="hero-content my-20">
        <div className="max-w-4xl flex flex-col">
          <p className="text-xl my-4">Continent Level Breakdown</p>
          <p className="text-xl my-4">Data streams</p>

          <div className="grid grid-cols-1 text-black sm:grid-cols-2 md:grid-cols-3 gap-4 my-8 self-center max-w-3xl">
            {DataStreamsByContinent.map(
              ({ name, activeDevices, totalDevices, percentActive }, key) => {
               return(
                <div key={key} className='p-2'>
                   <DataStreamCards
                  continent={name}
                  amountActive={activeDevices}
                  totalDevices={totalDevices}
                  percentActive={percentActive}
                />
                </div>
               
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataStream;
