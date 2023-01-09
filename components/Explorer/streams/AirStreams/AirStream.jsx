import { AirStreamsByContinent } from "../streamsData";
import AirStreamCards from "./AirStreamCards";

function AirStream() {
  return (
    <div>
      <div>
        <p>Continent Level Breakdown</p>
        <p>Data streams</p>
      </div>
      <div>
        {AirStreamsByContinent.map(({ name, data }, key) => {
          <div key={key}>
            <AirStreamCards continent={name} AirStreamData={data} />;
          </div>;
        })}
      </div>
    </div>
  );
}

export default AirStream;
