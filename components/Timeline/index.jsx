import { Approach } from "./TimelineData";

function Timeline() {
  return (
    <div className="bg-white font-Grotesk container flex flex-col mx-auto justify-center">
      <div className="mx-6 justify-center grid">
        <h1 className="font-bold text-center text-xl sm:text-2xl md:text-3xl text-secondary">
          Our Approach
        </h1>
        <div className="flex flex-col items-center justify-center pt-20 mx-auto text-black">
          {Approach.map((data, key) =>{
            return (
            <div className="grid sm:flex" key={key}>
              <h1 className="sm:pr-8 text-xl relative sm:border-r-4 sm:border-r-[#0069B3] text-primary w-[300px]">{data.title}</h1>
              <span className="rounded-full bg-[#00963F] -ml-8 sm:mx-[286px] flex p-3 absolute"> </span>
              <p className="sm:pl-8 pb-8 w-[300px]">{data.desc}</p>
            </div>)
          })}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
