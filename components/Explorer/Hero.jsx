import Link from "next/link";
import { ClimateData } from "./HeroData";
import { MdLocationOn } from "react-icons/md";
import { useContext } from "react";
import PositionContext from "../../context/PositionContext";
function ExplorerHero() {
  const { totalDevices } = useContext(PositionContext);

  return (
    <div className="hero min-h-screen font-Grotesk text-black ">
      <div className="hero-content my-20 text-center">
        <div className="max-w-4xl">
          <h1 className="styledHeader">Data and Awareness</h1>
          <div className="m-4  h-full rounded-md bg-gradient-to-tr from-indigo-800 to-zinc-600 bg-opacity-80 py-16 text-white">
            <div className=" m-auto w-full h-full flex justify-center flex-wrap items-center  ">
              {ClimateData.map(({ name, icon }, key) => {
                return (
                  <div
                    key={key}
                    className={`m-2 w-[210px] h-[160px] rounded-md p-2 bg-slate-300 ${
                      name == "Data streams" && "text-[#192F5D]"
                    } ${name == "Countries" && "text-[#008000]"} ${
                      name == "Total Connected Device" && "text-[#F07D00]"
                    } `}
                  >
                    <div className={`flex `}>
                      {icon}
                      <h2 className="">{name}</h2>
                    </div>
                    <div className="py-10 text-3xl sm:text-4xl font-bold">
                      {name === "Countries" ? (
                        <span>100</span>
                      ) : (
                        <span>{totalDevices}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="py-8 text-lg sm:text-xl">
            Reliable data is crucial in understanding the conditions of the
            environment and tremendously provide a net positive input to
            research and awareness campaigns. Our platform allows data
            aggregation from devices that collect different environmental data.
          </p>

          <Link
            href="/explore/explorer"
            className="btn text-white rounded-lg bg-primary px-12"
          >
            {" "}
            <MdLocationOn size={25} className="mx-2" /> Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ExplorerHero;
