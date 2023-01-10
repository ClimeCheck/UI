import Link from "next/link";
import { ClimateData } from "./HeroData";

function ExplorerHero() {
  return (
    <div className="hero min-h-screen font-Grotesk text-white  bg-slate-900 bg-opacity-80">
      <div className="hero-content my-20 text-center">
        <div className="max-w-4xl">
          <h1 className="styledHeader">
            Data and Awareness
          </h1>
          <div className="m-4 grid content-center rounded-md bg-black bg-opacity-80 pt-32 text-white">
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center px-4 py-4 ">
              {ClimateData.map(({ name, value, icon, color }, key) => {
                return (
                <div key={key} className={`m-2 rounded-md p-2 bg-slate-300 ${name == "Data streams" && "text-[#192F5D]"} ${name == "Countries" && "text-[#008000]"} ${name == "Total Connected Device" && "text-[#F07D00]"} `}>
                  <div className={`flex `}>
                    {icon}
                    <h2 className="">{name}</h2>
                  </div>
                  <div className="py-10 text-3xl sm:text-4xl font-bold">
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

          <Link href='/explore/explorer' className="btn rounded-sm btn-primary px-12">Explore</Link>
        </div>
      </div>
    </div>
  );
}

export default ExplorerHero;
