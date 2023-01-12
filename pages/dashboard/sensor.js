import Layout from "../../components/Dashboard/Layout";


const Sensor = () => {
  return (
    <Layout title="My sensor" showSearch={false}>
      <div className="flex flex-col justify-center items-center h-full  gap-10 border ">
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
    </Layout>
  );
};

export default Sensor;
