import { BiDevices } from "react-icons/bi";

function DataStreamCards({
  icon,
  continent,
  totalDevices,
  percentActive,
  amountActive,
}) {
  return (
      <div className="bg-slate-300 rounded-md p-5 min-w-fit ">
        <div className="flex justify-between">
          <p className="text-secondary text-sm font-bold p-3">{continent}</p>
          {icon}
        </div>
        
        <div>
          <div className="mt-2">
            <h1 className="text-3xl font-bold text-secondary">{totalDevices}</h1>
            {/**Add Percent Increase and Icon */}
          </div>
          <p className="text-sm text-primary py-4">Connected Devices</p>
        </div>
        <div className="flex flex-row gap-2 justify-center mt-5">
          <div className="self-center text-sm">{percentActive} active</div>
          <div className="font-bold text-2xl text-primary">{amountActive}</div>
          <BiDevices size={35} className="text-[#BE690B]" />
        </div>
      </div>
    
  );
}

export default DataStreamCards;
