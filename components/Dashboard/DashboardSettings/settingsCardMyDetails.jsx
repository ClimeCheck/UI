const SettingsCardDetails = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse sm:flex-row gap-4 py-4 relative">
        <form className="flex-1">
          <div className="pt-[8px]">
            <p className="font-[400] text-[16px]">Name</p>
            <input
              type="text"
              className=" w-full h-[64px] bg-[#F8F8F8] rounded-[8px] mt-[20px] py-[8px] px-[16px] gap-[8px]"
            />
          </div>
          <div className="pt-[8px]">
            <p className="font-[400] text-[16px]">UserName</p>
            <input
              type="text"
              className=" w-full h-[64px] bg-[#F8F8F8] rounded-[8px] mt-[20px] py-[8px] px-[16px] gap-[8px]"
            />
          </div>
          <div className="pt-[8px]">
            <p className="font-[400] text-[16px]">Email Address</p>
            <input
              type="email"
              className="w-full h-[64px]  bg-[#F8F8F8] rounded-[8px] mt-[20px] py-[8px] px-[16px] gap-[8px]"
            />
          </div>
          <div className="pt-[8px]">
            <p className="font-[400] text-[16px]">Country</p>
            <input className="w-full h-[64px] bg-[#F8F8F8] rounded-[8px] mt-[20px] py-[8px] px-[16px] gap-[8px]" />
          </div>

          <div className="flex flex-row items-start space-x-[20px] mt-[60px] sm:justify-start justify-center  ">
            <div className=" p-6 flex flex-row h-[56px] rounded-[8px] justify-center items-center  text-center  border-[1px] border-[#74BF44]">
              <button className=" text-[16px]  font-[500] text-[#74BF44] w-[53px] h-[22px]">
                Cancel
              </button>
            </div>

            <div className=" flex flex-row h-[56px] rounded-[8px] justify-center items-center  bg-[#74BF44] text-center p-6 border-[1px] border-[#74BF44]">
              <button className="  font-[500] text-[16px] text-white h-[22px]">
                <p> Save Changes</p>
              </button>
            </div>
          </div>
        </form>
        <div className="flex-1">
          <div className="  h-[452px] border-[1px] rounded-lg  p-[20px]">
            <p className="text-[16px] font-[400]">About Me</p>
            <p className="text-[16px] font-[400] mt-[20px]">
              I am Ayomide , a University student from Nigeria. I am enthusiatic
              and always curious to know about the atmospheric condition around
              the globe
            </p>
            <p className="text-[16px]  font-[400] mt-[40px]">Social Media</p>

            <div className="bg-[#D9D9D9] mt-[20px] w-[40px] h-[40px] rounded-full" />
            <div className="bg-[#D9D9D9] mt-[20px] w-[40px] h-[40px] rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsCardDetails;
