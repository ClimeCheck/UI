import { DataStreamsByContinent } from "../streamsData";
import DataStreamCards from "./DataStreamCard";

function AirStream() {
  return (
    <div>
      <div>
        <p>Continent Level Breakdown</p>
        <p>Data streams</p>
      </div>
      <div>
        {DataStreamsByContinent.map(
          ({ name, activeDevices, totalDevices, percentActive }, key) => {
            <DataStreamCards
              continent={name}
              amountActive={activeDevices}
              totalDevices={totalDevices}
              percentActive={percentActive}
            />;
          }
        )}
      </div>
    </div>
  );
}

export default AirStream;
