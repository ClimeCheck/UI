import { AirStreamsByContinent } from "../streamsData";
import AirStreamCards from "./AirStreamCards";

function AirStream() {
  return (
    <div className="hero min-h-screen font-Grotesk text-white py-24 bg-slate-900 bg-opacity-80">
      <div className="hero-content">
        <div className="max-w-4xl">
          <p className="text-xl my-4 text-left"> Continent Level Breakdown</p>
          <p className="text-xl my-4">Data streams</p>

          <div className="grid gap-4 grid-cols-1 text-black sm:grid-cols-2 md:grid-cols-3">
            {AirStreamsByContinent.map(({ name, data }, key) => {
              return (<div key={key}>
                <AirStreamCards continent={name} AirStreamData={data} />
              </div>);
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AirStream;
