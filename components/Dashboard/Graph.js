import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  linearGradient,
  LineChart,
  Line,
} from "recharts";

import { useState } from "react";
const GradientColors = () => {
  return (
    <linearGradient id="colorView" x1="0" y1="0" x2="0" y2="1">
      <stop offset="30%" stopColor="#A90B0B" />
      <stop offset="75%" stopColor="#FFC01E" />

      <stop offset="95%" stopColor="#179502" />
    </linearGradient>
  );
};

const Indicator = ({ colour }) => {
  return (
    <svg
      width="76"
      height="18"
      viewBox="0 0 76 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 7.5C1.17157 7.5 0.5 8.17157 0.5 9C0.5 9.82843 1.17157 10.5 2 10.5V7.5ZM75.6603 9L67 0.339746L58.3397 9L67 17.6603L75.6603 9ZM2 10.5H67V7.5H2V10.5Z"
        fill={colour}
      />
    </svg>
  );
};

const Graph = ({ data }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      style={{
        color: "#fff",
        backgroundColor: "rgb(255, 255, 255)",
        position: "relative",
        transition: "0.3s ease-in-out",
        width: "100%",
        height: "500px",
      }}
    >
      <div className="flex text-black z-10 justify-between items-center absolute top-4  font-semi-bold w-full px-24">
        <div className=" flex justify-between items-center gap-x-4">
          <div
            className={`border rounded-md  p-1 cursor-pointer ${
              show && "border-[#74BF44] text-[#74BF44]"
            }`}
            onClick={() => {
              setShow(true);
            }}
          >
            Solid Graph
          </div>
          <div
            className={`border rounded-md  p-1 cursor-pointer ${
              !show && "border-[#74BF44] text-[#74BF44]"
            }`}
            onClick={() => {
              setShow(false);
            }}
          >
            Line Graph
          </div>
        </div>
        <div className=" flex  justify-between items-center gap-x-4">
          <div className="flex justify-between items-center">
            <Indicator colour="#179502" />
            <span>Low</span>
          </div>
          <div className="flex justify-between items-center gap-x-4">
            <Indicator colour="#FFC01E" />
            <span>Middle</span>
          </div>
          <div className="flex justify-between items-center gap-x-4">
            <Indicator colour="#A90B0B" />
            <span>High</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        {show ? (
          <AreaChart data={data}>
            <defs>
              <GradientColors />
            </defs>
            <Tooltip
              itemStyle={{ color: "#fff", backgroundColor: "#0A1322" }}
              contentStyle={{ backgroundColor: "#0A1322" }}
            />
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#8884d8"
              opacity={0.4}
            />
            <XAxis dataKey="name" tick={{ fill: "#B6BAC3" }} stroke="#EEEEEE" />
            <YAxis
              tick={{ fill: "#B6BAC3" }}
              stroke="#EEEEEE"
              domain={[0, "dataMax + 1000"]}
            />
            <Area dataKey="view" type="monotone" fill="url(#colorView)" />
          </AreaChart>
        ) : (
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#8884d8"
              opacity={0.4}
            />
            <XAxis dataKey="name" tick={{ fill: "#B6BAC3" }} stroke="#EEEEEE" />
            <YAxis
              domain={[0, "dataMax + 1000"]}
              tick={{ fill: "#B6BAC3" }}
              stroke="#EEEEEE"
            />
            <Tooltip
              itemStyle={{ color: "#fff", backgroundColor: "#0A1322" }}
              contentStyle={{ backgroundColor: "#0A1322" }}
            />
            <Legend />
            <Line type="monotone" dataKey="view" stroke="#A90B0B" />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
