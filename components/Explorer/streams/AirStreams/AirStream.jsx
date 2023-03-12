import { AiOutlineRollback } from "react-icons/ai";
import MapButton from "../../MapButton";
import { AirStreamsByContinent } from "../streamsData";
import AirStreamCards from "./AirStreamCards";
import { useRouter } from "next/router";
import { useContext } from "react";

import PositionContext from "../../../../context/PositionContext";

function AirStream() {
  const { positions } = useContext(PositionContext);
  const router = useRouter();

  return (
    <div className="hero h-full font-Grotesk text-white py-24 bg-slate-900 bg-opacity-80">
      <div className="hero-content">
        <div className="max-w-4xl">
          <div className="flex justify-between items-center">
            <p className="text-xl my-4 text-left"> Continent Level Breakdown</p>
            <AiOutlineRollback
              size="32"
              onClick={() => router.back()}
              className="cursor-pointer"
            />
          </div>
          <p className="text-xl my-4">Data streams</p>

          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="flex l gap-4 text-black justify-center items-center flex-wrap h-full relative">
              {positions.map(({ continentName, positionLength }, key) => {
                return (
                  <div key={key} className="p-2">
                    <AirStreamCards
                      continent={continentName}
                      amountActive={positionLength}
                      totalDevices={positionLength}
                      percentActive={"100%"}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex z-50">
              <MapButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AirStream;
