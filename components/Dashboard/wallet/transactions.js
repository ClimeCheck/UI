/* eslint-disable @next/next/no-img-element */
function Transactions({ type, txDesc, txDate, txAmount }) {
  return (
    <div className="container m-2">
      <div className="flex ">
        <div
          className={`text-xl rounded-full p-3 flex self-center items-center h-10 w-10 ${
            type == "receive"
              ? "text-green-500 bg-green-300/60"
              : "text-red-500 bg-red-300/60"
          }`}
        >
          {type == "receive" ? (
            <span className="">&#8600;</span>
          ) : (
            <span>&#8601;</span>
          )}
        </div>

        <div className="flex w-full justify-between p-2">
          <div className="flex flex-col w-full">
            <h1 className="text-lg">{txDesc}</h1>
            <p className="text-sm text-[#727272]">{txDate}</p>
          </div>
          <div className="flex h-full w-full justify-center items-center gap-1">
            <h1 className="text-lg">{txAmount}</h1>
            <img src="/click.svg" className="w-4" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
