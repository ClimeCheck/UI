/* eslint-disable @next/next/no-img-element */
const SettingsHeader = () => {
  return (
    <>
      <div className="relative flex  w-full pr-12 h-[253px] bg-cover rounded-[8px] items-center justify-start">
        <img
          src="/Frame261.png"
          alt="user Image"
          className=" absolute w-full h-full inset-0"
        />
        <div className=" flex flex-row ">
          <img
            src="/Frame262.png"
            alt="user Image"
            className=" absolute top-[77px] left-[32px]"
          />
          <div className="absolute top-[82px] font-[700]  text-[#ffffff] left-[160px]">
            <p className="text-[24px] leading-[31px] ">Ayomide Topboy</p>
            <div className="mt-[24px] flex flex-row space-x-[22px]">
              <p>Wallet ID:</p>
              <p>1039-3u4jru-4849</p>
              <img src="/copy.svg" alt="copy Id" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsHeader;
