const SettingsCardDetails = () => {
  return (
    <>
      <div className="flex flex-row space-x-[12px] py-4">
        <form>
          <div className="pt-[8px]">
            <p className="font-[400] text-[16px]">Name</p>
            <input
              type="text"
              className="w-[475px] h-[64px] bg-[#F8F8F8] rounded-[8px] mt-[20px] py-[8px] px-[16px] gap-[8px]"
            />
          </div>
          <div className="pt-[8px]">
            <p className="font-[400] text-[16px]">UserName</p>
            <input
              type="text"
              className="w-[475px] h-[64px] bg-[#F8F8F8] rounded-[8px] mt-[20px] py-[8px] px-[16px] gap-[8px]"
            />
          </div>
          <div className="pt-[8px]">
            <p className="font-[400] text-[16px]">Email Address</p>
            <input
              type="email"
              className="w-[475px] h-[64px]  bg-[#F8F8F8] rounded-[8px] mt-[20px] py-[8px] px-[16px] gap-[8px]"
            />
          </div>
          <div className="pt-[8px]">
            <p className="font-[400] text-[16px]">Country</p>
            <input className="w-[475px] h-[64px] bg-[#F8F8F8] rounded-[8px] mt-[20px] py-[8px] px-[16px] gap-[8px]" />
          </div>

          <div className="flex flex-row items-start space-x-[20px] mt-[60px] justify-start">
            <div className="w-[225px] flex flex-row h-[56px] rounded-[8px] justify-center items-center  text-center p-[8px] border-[1px] border-[#74BF44]">
              <button className=" text-[16px]  font-[500] text-[#74BF44] w-[53px] h-[22px]">
                Cancel
              </button>
            </div>

            <div className="w-[225px] flex flex-row h-[56px] rounded-[8px] justify-center items-center  bg-[#74BF44] text-center p-[8px] border-[1px] border-[#74BF44]">
              <button className="  font-[500] text-[16px] text-white h-[22px]">
                <p> Save Changes</p>
              </button>
            </div>
          </div>
        </form>
        <div>
          <div className="w-[483px] h-[452px] border-[1px] rounded-[2px] ml-[25px] p-[20px]">
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
