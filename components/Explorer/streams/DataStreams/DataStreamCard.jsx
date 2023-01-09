import Image from "next/image";

function DataStreamCards({
  continent,
  totalDevices,
  percentActive,
  amountActive,
}) {
  return (
    <div>
      <div className="card-1">
        <p>{continent}</p>
        <div>
          <div>
            <h1>{totalDevices}</h1>
            {/**Add Percent Increase and Icon */}
          </div>
          <p>Connected Devices</p>
        </div>
        <div className="active-devices">
          <div className="percent-active">{percentActive}</div>
          <div className="amount-active">{amountActive}</div>
          <Image src={""} alt="" />
        </div>
      </div>
    </div>
  );
}

export default DataStreamCards;
