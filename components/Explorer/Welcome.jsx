import Image from "next/image";
import { BsMap } from "react-icons/bs";
import { BiDevices } from "react-icons/bi";
import Link from "next/link";
import getDate from "../../utils/getDate";
import MapButton from "./MapButton";
import { useContext } from "react";
import PositionContext from "../../context/PositionContext";

const AirSTreamData = [
  { name: "Temparature", value: `25` },
  { name: "CO2", value: "5.62" },
  { name: "Pm 2.5", value: "1.27" },
  { name: "Pm 5", value: "2.56" },
];

function WelcomeExplore() {
  const { totalDevices } = useContext(PositionContext);
  return (
    <div className="hero h-full font-Grotesk text-white ">
      <div className="hero-content my-20 text-center">
        <div className="max-w-4xl justify-center flex flex-col">
          <p className="text-2xl my-4">Welcome to</p>
          <h1 className="styledHeader my-2 py-2">Climecheck Explorer</h1>
          <p className="text-xl my-4">
            Climecheck Explorer is a pollution explorer and analytics platform
            for a climate monitoring commons.
          </p>

          <div className="grid grid-cols-1 text-black sm:grid-cols-2 gap-6 mt-10 mb-4 self-center max-w-4xl">
            <div className="group bg-slate-300 rounded-md hover:bg-secondary/40 ease-in-out p-3">
              <Link href="/explore/data/devices">
                <p className="text-secondary group-hover:text-white text-sm font-bold p-3">
                  Data Stream
                </p>
                <div>
                  <div>
                    <h1 className="text-3xl sm:text-4xl group-hover:text-primary font-bold text-secondary mt-4">
                      {totalDevices}{" "}
                      <sub className="text-sm font-normal text-green-500 group-hover:text-white">
                        &uarr; +0.1%
                      </sub>
                    </h1>
                    {/**Add Percent Increase and Icon */}
                  </div>
                  <p className="text-base text-primary py-4">
                    Connected Devices
                  </p>
                </div>
                <div className="flex flex-row gap-6 items-center justify-center mt-8">
                  <div className="self-center group-hover:text-white">
                    100% active
                  </div>
                  <div className="font-bold text-xl  text-primary">
                    {totalDevices}
                  </div>
                  <BiDevices size={40} className="text-[#BE690B]" />
                </div>
              </Link>
            </div>

            <div className="group bg-slate-200 rounded-md p-3 hover:bg-secondary/40 ease-in-out">
              <Link href="/explore/data/air-streams">
                <p className="text-start group-hover:text-white font-bold text-sm p-3">
                  {getDate(Date.now())}., Air stream summary
                </p>
                <div className="grid grid-cols-2">
                  {AirSTreamData.map(({ name, value }, key) => {
                    return (
                      <div
                        key={key}
                        className={`m-4 ${
                          name == "Temparature" &&
                          "border-b-[1px] border-slate-500 group-hover:border-slate-100"
                        } ${
                          name == "CO2" &&
                          "border-b-[1px] border-slate-500 group-hover:border-slate-100"
                        }`}
                      >
                        <p className="text-slate-500 group-hover:text-white py-2">
                          {name}
                        </p>
                        <h1
                          className={`text-2xl font-bold ${
                            name == "Temparature" && "text-[#B80D7F]"
                          } ${name == "Pm 2.5" && "text-[#BE690B]"} ${
                            name == "Pm 5" &&
                            "text-[#525252] group-hover:text-[#B80D7F]"
                          } ${name == "CO2" && "text-[#192F5D]"}`}
                        >
                          {value}
                          {name == "Temparature" && <span>&#176;</span>}
                        </h1>
                      </div>
                    );
                  })}
                </div>
              </Link>
            </div>
          </div>

          <div className="flex self-center">
            <MapButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeExplore;
