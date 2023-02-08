import SensorReading from "./sensorReadings";
import SensorTopBar from "./sensorTopBAr";
import { sensorData } from "./sensorData";
import Guage from "./sensorReader";

export default function SensorComponent() {
  return (
    <div className="container font-Grotesk">
      <div className="flex flex-col">
        <SensorTopBar
          datastreams={"1234"}
          status={"Active"}
          earnings={"1.432"}
        />
        <div className="grid grid-cols-3">
          <div className="col-span-2 mt-10 h-full items-center">
            <div className="flex flex-col">
              <Guage value={231} />
              <div>
                <p className="font-bold text-[#74BF44] my-4 text-xl text-center">
                  Air Quality Index
                </p>
                <p className="text-black text-center">Sensor type: Indoor</p>
              </div>
              <div>
                <p className="text-[#777777] my-2 flex h-full items-center">
                  <span className="border-2 rounded-full flex self-center p-1 w-2 h-2 mr-2"></span>{" "} Color
                  indication
                </p>
                <div className="flex flex-row gap-2 h-full items-center">
                  <div className="flex h-full items-center flex-row">
                    <p className="text-[#800000] flex items-center mx-2">
                      <span className="bg-[#800000] flex self-center h-2 w-2 p-2"></span>&rarr;
                    </p>{" "}
                    Danger
                  </div>
                  <div className="flex h-full items-center flex-row">
                    <p className="text-[#F46B08] flex items-center mx-2 ">
                      <span className="bg-[#F46B08] flex self-center h-2 w-2 p-2"></span>&rarr;
                    </p>{" "}
                    Warning
                  </div>
                  <div className="flex h-full items-center flex-row">
                    <p className="text-[#008000] flex items-center mx-2 ">
                      <span className="bg-[#008000] flex self-center h-2 w-2 p-2"></span>&rarr;
                    </p>{" "}
                    Good
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <SensorReading sensordata={sensorData} />
          </div>
        </div>
      </div>
    </div>
  );
}
