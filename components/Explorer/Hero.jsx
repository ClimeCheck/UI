import Image from "next/image";
import { ClimateData } from "./HeroData";

function ExplorerHero() {
  return (
    <div className="hero min-h-screen font-Grotesk text-black">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="styledHeader">
            Data and Awareness
          </h1>
          <div className="m-4 grid content-center rounded-md bg-black pt-32 text-white">
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center px-4 py-4 ">
              {ClimateData.map(({ name, value, icon, color }, key) => {
                console.log(`text-[${color}]`)
                return (
                <div key={key} className={`text-[${color}] m-2 rounded-md p-2 bg-slate-300`}>
                  <div className={`flex `}>
                    {icon}
                    <h2 >{name}</h2>
                  </div>
                  <div className="py-10 text-2xl sm:text-3xl ">
                    <span>{value}</span>
                  </div>
                </div>);
              })}
            </div>
          </div>

          
            <p className="py-8 text-lg sm:text-xl">
              Reliable data is crucial in understanding the conditions of the
              environment and tremendously provide a net positive input to
              research and awareness campaigns. Our platform allows data
              aggregation from devices that collect different environmental
              data.
            </p>

          <button className="btn rounded-sm btn-primary px-12">Explore</button>
        </div>
      </div>
    </div>
  );
}

export default ExplorerHero;
