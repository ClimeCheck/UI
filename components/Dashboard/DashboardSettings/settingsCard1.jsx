import React, { useState, useEffect } from "react";
import SettingsCardDetails from "./settingsCardMyDetails";
import SettingsCardFormPassword from "./settingsCardFormPassword";

const SettingsCard1 = () => {
  const [cardDisplay, setCardDisplay] = useState(<SettingsCardDetails />);
  const settingsCard = () => {
    setCardDisplay(<SettingsCardDetails />);
  };
  const settingcardpassword = () => {
    setCardDisplay(<SettingsCardFormPassword />);
  };
  return (
    <>
      <div>
        <div className="flex flex-row items-start justify-start space-x-8 px-2 my-6">
          <div className="active:border-b-[2px] active:border-[#74BF44]">
            <button
              className="text-[#74BF44] font-[700px] text-[16px]"
              onClick={settingsCard}
            >
              My Details
            </button>
          </div>
          <div className="active:border-[#74BF44] focus:border-[#74BF44] focus:border-b-[2px] active:border-b-[2px]">
            <button
              className=" font-[700px] text-[16px]"
              onClick={settingcardpassword}
            >
              {" "}
              Password
            </button>
          </div>
        </div>
        <div>{cardDisplay}</div>
      </div>
    </>
  );
};

export default SettingsCard1;
