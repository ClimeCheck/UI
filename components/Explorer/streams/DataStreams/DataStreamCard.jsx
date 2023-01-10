import { BiDevices } from "react-icons/bi";

function DataStreamCards({
  continent,
  totalDevices,
  percentActive,
  amountActive,
}) {
  return (
      <div className="bg-slate-300 rounded-md p-5 ">
        <p className="text-secondary text-sm font-bold p-3">{continent}</p>
        <div>
          <div>
            <h1 className="text-3xl font-bold text-secondary">{totalDevices}</h1>
            {/**Add Percent Increase and Icon */}
          </div>
          <p className="text-sm text-primary py-4">Connected Devices</p>
        </div>
        <div className="flex flex-row gap-6 justify-center mt-8">
          <div className="self-center">{percentActive}</div>
          <div className="font-bold text-2xl text-primary">{amountActive}</div>
          <BiDevices size={40} className="text-[#BE690B]" />
        </div>
      </div>
    
  );
}

export default DataStreamCards;
