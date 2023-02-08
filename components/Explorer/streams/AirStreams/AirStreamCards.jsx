/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function AirStreamCards({ continent, AirStreamData }) {
  return (
    <Link href={`/explore/map/${continent}`}>
      <div className="bg-slate-200 group hover:bg-secondary/40 rounded-md p-3">
        <div className="flex w-full justify-between h-full items-center">
          <p className="text-start font-bold group-hover:text-white text-sm p-3">
            {continent}
          </p>
          <img src={`/${continent}.svg`} className="w-12" alt={continent} />
        </div>

        <div className="grid grid-cols-2 ">
          {AirStreamData.map(({ name, value }, key) => {
            return (
              <div
                className={`m-4  ${
                  name == "Temparature" && "border-b-[1px] border-slate-500"
                } ${name == "CO2" && "border-b-[1px] border-slate-500"}`}
                key={key}
              >
                <p className="text-slate-500 group-hover:text-slate-300 py-2">
                  {name}
                </p>
                <h1
                  className={`text-2xl font-bold ${
                    name == "Temparature" && "text-[#B80D7F]"
                  } ${name == "Pm 2.5" && "text-[#BE690B]"} ${
                    name == "Pm 5" && "text-[#525252]"
                  } ${name == "CO2" && "text-[#192F5D]"}`}
                >
                  {value}
                  {name == "Temparature" && <span>&#176;</span>}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
}

export default AirStreamCards;
