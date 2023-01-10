import Image from "next/image";
import { BsMap } from "react-icons/bs";
import { BiDevices } from "react-icons/bi";
import Link from "next/link";

const welcomeData = {
  totalDevices: "8,000,000",
  percentActive: "80%",
  amountActive: "1234",
  percentIncrease: "1%",
};

const AirSTreamData = [
  { name: "Temparature", value: `25` },
  { name: "CO2", value: "5.62" },
  { name: "Pm 2.5", value: "1.27" },
  { name: "Pm 5", value: "2.56" },
];

function WelcomeExplore() {
  return (
    <div className="hero min-h-screen font-Grotesk text-white  bg-slate-900 bg-opacity-80">
      <div className="hero-content my-20 text-center">
        <div className="max-w-4xl justify-center flex flex-col">
          <p className="text-xl my-4">Welcome to</p>
          <h1 className="styledHeader my-2 py-2">Climecheck Explorer</h1>
          <p className="text-xl my-4">
            Climecheck Explorer is a pollution explorer and analytics platform
            for a climate monitoring commons.
          </p>

          <div className="grid grid-cols-1 text-black sm:grid-cols-2 gap-6 mt-10 mb-4 self-center max-w-4xl">
            <div className="bg-slate-300 rounded-md p-3 ">
              <Link href="/explore/data/devices">
                <p className="text-secondary text-sm font-bold p-3">
                  Data Stream
                </p>
                <div>
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-secondary mt-4">
                      {welcomeData.totalDevices} <sub className="text-sm font-normal text-green-500">&uarr; +0.1%</sub>
                    </h1>
                    {/**Add Percent Increase and Icon */}
                  </div>
                  <p className="text-base text-primary py-4">Connected Devices</p>
                </div>
                <div className="flex flex-row gap-6 justify-center mt-8">
                  <div className="self-center">{welcomeData.percentActive} active</div>
                  <div className="font-bold text-xl  text-primary">
                    {welcomeData.amountActive}
                  </div>
                  <BiDevices size={40} className="text-[#BE690B]" />
                </div>
              </Link>
            </div>

            <div className="bg-slate-200 rounded-md p-3 ">
              <Link href="/explore/data/air-streams">
                <p className="text-start font-bold text-sm p-3">
                  {getDate(Date.now())}., Air stream summary
                </p>
                <div className="grid grid-cols-2">
                  {AirSTreamData.map(({ name, value }, key) => {
                    return (
                      <div
                        key={key}
                        className={`m-4 ${name == "Temparature" && "border-b-[1px] border-slate-500"} ${name == "CO2" && "border-b-[1px] border-slate-500"}`}
                      >
                        <p className="text-slate-500 py-2">{name}</p>
                        <h1 className={`text-2xl font-bold ${name == "Temparature" && "text-[#B80D7F]"} ${name == "Pm 2.5" && "text-[#BE690B]"} ${name == "Pm 5" && "text-[#525252]"} ${name == "CO2" && "text-[#192F5D]"}`}>
                          {value}{name == "Temparature" && <span>&#176;</span>}
                          </h1>
                      </div>
                    );
                  })}
                </div>
              </Link>
            </div>
          </div>

          <div className="flex self-center">
            <Link href="/explore/map">
              <div className="rounded-full w-fit py-4 px-2 bg-primary flex flex-col self-center text-white">
                <BsMap size={25} className="flex self-center" />
                <p>View Map</p>
              </div>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeExplore;

const getDate = (unixTimeStamp) => {
  // const timeInMilliSeconds = unlockTime.toNumber() * 1000;
  const date1 = new Date();
  date1.setTime(unixTimeStamp);
  return date1.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
