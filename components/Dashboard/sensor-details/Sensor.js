import SensorReading from "./sensorReadings";
import SensorTopBar from "./sensorTopBAr";
import {sensorData} from "./sensorData";

export default function SensorComponent(){

    return(
        <div className="container">
            <div className="flex flex-col">
                <SensorTopBar datastreams={'1234'} status={'Active'} earnings={'1.432'} />
                <div className="grid grid-cols-3">
                    <div className="col-span-2">

                    </div>
                    <div className="col-span-1">
                        <SensorReading sensordata={sensorData}  />
                    </div>

                </div>

            </div>
        </div>
    )
}