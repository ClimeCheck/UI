import { FiBarChart2, FiCalendar, FiDownload } from "react-icons/fi";

export default function SensorReading({ sensordata }) {
  return (
    <div className="container my-4">
      <div className="flex flex-col border rounded-lg p-3">
        <div className="flex justify-between items-center h-full py-4">
          <h1 className="font-bold text-lg">Sensor Readings</h1>
          {/**Add chart icon */}
          <FiBarChart2 className="border border-green-300 bg-green-300/25 h-7 w-7 text-green-600" />
        </div>
        <div className="flex  justify-between w-full items-center h-full py-4">
          <FiCalendar className="border border-green-300 bg-green-300/25 h-7 w-7 text-green-600" />
          <div className="border p-2 rounded-lg flex items-center justify-between gap-x-1 bg-[#74BF44] text-white">
            <span>Print Readings</span>
            <FiDownload />
          </div>
        </div>
        <div className="h-[300px] overflow-y-auto flex flex-col">
          {sensordata.map(({ date, data }, key) => {
            return (
              <div key={key}>
                <p>{date}</p>
                {data.map(({ time, value, status }, key) => {
                  return (
                    <Readings
                      time={time}
                      value={value}
                      status={status}
                      key={key}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Readings({ time, value, status }) {
  /**
   * params
   * value, time, status
   */
  return (
    <div className="flex w-full justify-between py-4 pr-2">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-lg">{value}</h1>
        <div
          className={`text-sm items-center flex h-full ${
            status == "Good" && "text-green-600"
          } ${status == "Normal" && "text-yellow-500"} ${
            status == "Low" && "text-red-600"
          }`}
        >
          <span className="border rounded-full self-center p-2 w-2 h-2 mr-2"></span>
          {status}
        </div>
      </div>
      <div className="flex items-center">
        <p className="font-bold text-base">{time}</p>
      </div>
    </div>
  );
}
