const SettingsCardFormPassword = () => {
  return (
    <>
      <div className="flex flex-col space-x-[12px] py-4">
        <div className="my-2">
          <p className="font-500 font-semibold text-[16px] px-[16px]">
            Change Password
          </p>
        </div>
        <form>
          <div className="pt-[8px]">
            <p className="font-[400] text-[16px] ">Old Pasword</p>
            <input
              type="password"
              className="w-full h-[64px] bg-[#F8F8F8] rounded-[8px] mt-[20px] py-[8px] px-[16px] gap-[8px]"
            />
          </div>
          <div className="pt-[8px]">
            <p className="font-[400] text-[16px]">New Password</p>
            <input
              type="password"
              className="w-full h-[64px] bg-[#F8F8F8] rounded-[8px] mt-[20px] py-[8px] px-[16px] gap-[8px]"
            />
          </div>
          <div className="pt-[8px]">
            <p className="font-[400] text-[16px]">Confirm Password</p>
            <input
              type="password"
              className="w-full h-[64px]  bg-[#F8F8F8] rounded-[8px] mt-[20px] py-[8px] px-[16px] gap-[8px]"
            />
          </div>

          <div className="flex flex-row items-start space-x-[20px] mt-[60px] sm:justify-start justify-center">
            <div className="p-6 flex flex-row h-[56px] rounded-[8px] justify-center items-center  text-center  border-[1px] border-[#74BF44]">
              <button className=" text-[16px]  font-[500] text-[#74BF44] w-[53px] h-[22px]">
                Cancel
              </button>
            </div>

            <div className="p-6 flex flex-row h-[56px] rounded-[8px] justify-center items-center  bg-[#74BF44] text-center  border-[1px] border-[#74BF44]">
              <button className="  font-[500] text-[16px] text-white h-[22px]">
                <p> Save Changes</p>
              </button>
            </div>
          </div>
        </form>
        <div></div>
      </div>
    </>
  );
};

export default SettingsCardFormPassword;
