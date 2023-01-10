function AirStreamCards({ continent, AirStreamData }) {
  return (
    <div className="bg-slate-200 rounded-md p-3">
      <p className="text-start font-bold text-sm p-3">{continent}</p>
      <div className="grid grid-cols-2">
        {AirStreamData.map(({ name, value }, key) => {
          return (
            <div className={`m-4 ${name == "Temparature" && "border-b-[1px] border-slate-500"} ${name == "CO2" && "border-b-[1px] border-slate-500"}`} key={key}>
              <p className="text-slate-500 py-2">{name}</p>
              <h1 className={`text-2xl font-bold ${name == "Temparature" && "text-[#B80D7F]"} ${name == "Pm 2.5" && "text-[#BE690B]"} ${name == "Pm 5" && "text-[#525252]"} ${name == "CO2" && "text-[#192F5D]"}`}>{value}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AirStreamCards;
