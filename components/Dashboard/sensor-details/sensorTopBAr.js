export default function SensorTopBar({ datastreams, status, earnings }) {
  //   const { datastreams, status, earnings } = props;

  return (
    <div className="container text-black">
      <div className="flex gap-5 w-full items-stretch flex-wrap justify-between">
        <div className="grid gap-6 grid-cols-1 p-4 border rounded-lg min-w-[220px]">
          <p className="text-lg">No of Data Stream</p>
          <h1 className="font-bold text-lg">{datastreams}</h1>
        </div>
        <div className="grid gap-6 grid-cols-1 p-4 border rounded-lg min-w-[220px]">
          <p className="text-lg">Status</p>
          <h1 className="font-bold text-lg flex flex-row items-center">
            <span
              className={`rounded-full self-center h-2 flex p-2 w-2 mr-2 ${
                status == "Active" ? "bg-green-600" : " bg-yellow-500"
              }`}
            ></span>
            {status}
          </h1>
        </div>
        <div className="grid gap-6 grid-cols-1 p-4 border rounded-lg min-w-[220px]">
          <div className="flex w-full justify-between">
            <p className="text-lg">Earnings</p>
            {/**add refresh */}
          </div>

          <div className="flex gap-2 items-center">
            <h1 className="font-bold text-lg">{earnings} CLICK</h1>
            <button className="btn-prim">
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
