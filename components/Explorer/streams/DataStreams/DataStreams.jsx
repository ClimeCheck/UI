import { DataStreamsByContinent } from "../streamsData";
import DataStreamCards from "./DataStreamCard";
import { AiOutlineRollback } from "react-icons/ai";
import { useRouter } from "next/router";
import MapButton from "../../MapButton";

function DataStream() {
  const router = useRouter();
  return (
    <div className="hero h-full font-Grotesk text-white bg-slate-900 bg-opacity-80 ">
      <div className="hero-content my-20">
        <div className="max-w-4xl flex flex-col">
          <div className="flex justify-between items-center">
            <p className="text-xl my-4">Continent Level Breakdown</p>
            <AiOutlineRollback
              size="32"
              onClick={() => router.back()}
              className="cursor-pointer"
            />
          </div>

          <p className="text-xl my-4">Data streams</p>

          <div className="flex gap-4 text-black justify-center items-center flex-wrap h-full relative">
            {DataStreamsByContinent.map(
              ({ name, activeDevices, totalDevices, percentActive }, key) => {
                return (
                  <div key={key} className="p-2">
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
            <div className="flex z-50 sm:bottom-20 sm:right-20 sm:absolute">
              <MapButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataStream;
