import { useState } from "react";
import Layout from "../../components/Dashboard/Layout";
import SensorComponent from "../../components/Dashboard/sensor-details/Sensor";

const Sensor = () => {
  const [connectedDevice, setConnectDevices] = useState(true);

  return (
    <Layout title="My Sensor" showSearch={false}>
      {!connectedDevice ? <NoConnectedDevice /> : <SensorComponent />}
    </Layout>
  );
};

export default Sensor;

function NoConnectedDevice() {
  return (
    <div className="flex flex-col justify-center items-center m-auto   gap-16 ">
      <span className="text-[5vmax]">😞</span>
      <span className="">You don’t have any connected device</span>
      <div className="flex items-center justify-center gap-3">
        <button className="p-4 border bg-[#74BF44] rounded-lg text-white">
          Connect to an existing device
        </button>
        <button className="p-4 border border-[#74BF44] rounded-lg text-[#74BF44]">
          Claim a device
        </button>
      </div>
    </div>
  );
}
