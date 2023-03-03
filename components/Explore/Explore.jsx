import Navbar from "../Navbar";
import Footer from "../Footer/index";

const Explore = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto p-4">
        <Navbar textColor={"black"} />
        <div className="pb-20 w-full text-lg text-black flex flex-col items-start justify-center">
          {/* Introduction */}
          <div className="font-Grotesk flex flex-col w-full items-center py-10">
            <div className="text-3xl md:text-5xl font-Grotesk max-w-2xl text-center pb-8">
              <span className="text-2xl md:text-3xl text-gray-700 font-bold">
                Welcome to{" "}
              </span>
              <br />
              <span className="green-gradient-text">Climecheck Explorer</span>
            </div>
            <p className="text-xl md:text-2xl font-Grotesk text-center">
              Climecheck Explorer is a pollution explorer and analytics platform
              for a climate monitoring commons.
            </p>
          </div>
          {/* Cards */}
          <div className="w-full md:w-[90%] mx-auto flex gap-8 flex-col md:flex-row items-center pb-20">
            {/* Card 1 */}
            <div className="md:h-[300px] font-Grotesk w-[85%] md:w-1/2 bg-slate-200 rounded-3xl flex flex-col justify-start items-center space-y-6 md:space-y-8">
              <h4 className="pt-4 text-[#192F5D] font-bold">Data stream</h4>
              <div className="flex space-x-6 items-end">
                <span className="text-[#192F5D] text-2xl md:text-4xl font-bold">
                  8,000,000
                </span>
                <span className="text-xs text-green-600">0.01%</span>
              </div>
              <h4 className="text-green-600 font-bold">Connected Devices</h4>
              <div className="flex flex-row items-center justify-evenly space-x-8 w-full px-8 text-xl md:text-2xl">
                <span className="text-[#777777] text-base">80% active</span>
                <span className="text-green-600 font-semibold">1243</span>
                <span>icon</span>
              </div>
              <div></div>
            </div>
            {/* Card 2 */}
            <div className="md:h-[300px] w-[85%] md:w-1/2 bg-slate-200 rounded-3xl overflow-hidden flex flex-col justify-start items-start space-y-6 md:space-y-8">
              <span className="pt-4 px-6 text-start">
                Dec 8, 2022. Air stream summary
              </span>
              <div className="flex flex-col md:flex-row w-[80%] mx-auto gap-6 pb-4 text-[#777777]">
                <div className="w-full md:w-1/2 flex flex-row md:flex-col md:items-start items-center justify-between space-y-0 md:space-y-8">
                  <div>
                    <p>Temperature</p>
                    <p className="text-[#B80D7F] text-2xl md:text-4xl font-medium">
                      25
                    </p>
                  </div>
                  <div>
                    <p>Pm 2.5</p>
                    <p className="text-[#BE690B] text-2xl md:text-4xl font-medium">
                      1.21
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-row md:flex-col md:items-start items-center justify-between space-y-0 md:space-y-8">
                  <div>
                    <p>CO2</p>
                    <p className="text-2xl md:text-4xl font-medium text-[#192F5D]">
                      5.62
                    </p>
                  </div>
                  <div>
                    <p>Pm 5</p>
                    <p className="text-2xl md:text-4xl font-medium text-[#192F5D]">
                      2.56
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* View map button */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Explore;
