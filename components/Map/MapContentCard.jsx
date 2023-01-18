import { RiAlertFill } from "react-icons/ri";
import {
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import { data } from "./MapData";

function MapContentCard({
  parameter,
  value,
  changes,
  subscript,
  superscript,
  direction,
  alert,
}) {
  return (
    <div className="my-3">
      <div className={`grid grid-cols-2 bg-slate-300 text-black rounded-md p-4 ${
              parameter == "Temparature" && "bg-[#EDE0E8]"
            } ${parameter == "PM 2.5" && "bg-[#F2ECE6]"} ${
              parameter == "PM 5" && "text-[#525252]"
            } ${parameter == "Carbon Dioxide" && "bg-[#DCE0EB]"}`}>
        <div className="col-span-1 grid grid-cols-1 gap-5">
          <span className="text-[#192F5D] text-xl font-bold">{parameter}</span>
          <h1
            className={`text-3xl  ${
              parameter == "Temparature" && "text-[#B80D7F]"
            } ${parameter == "PM 2.5" && "text-[#BE690B]"} ${
              parameter == "PM 5" && "text-[#525252]"
            } ${parameter == "Carbon Dioxide" && "text-[#192F5D]"}`}
          >
            {value}
            {subscript && <sub className="text-base">{subscript}</sub>}
            {superscript && <sup className="text-base ml-1">{superscript}</sup>}
          </h1>
          <span
            className={`text-sm ${direction == "up" && "text-green-600"} ${
              direction == "down" && "text-red-600"
            }`}
          >
            {direction == "up" && <>&uarr;</>}
            {direction == "down" && <>&darr;</>}
            {changes}
          </span>
        </div>

        <div className="col-span-1 items-center grid grid-cols-1 my-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={data}>
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
          <h1 className="flex gap-2">
            Alert:<span className={`${alert == "Normal" && "text-green-500"} ${alert == "Risky" && "text-red-500"}`}> {alert}</span>
            <RiAlertFill  className="text-red-500 self-center"/>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default MapContentCard;
