import React, { useState, useEffect } from "react";
import SettingsCardDetails from "./settingsCardMyDetails";
import SettingsCardFormPassword from "./settingsCardFormPassword";

const SettingsCard1 = () => {
  const [cardDisplay, setCardDisplay] = useState(<SettingsCardDetails />);
  const [toggleStyle, setToggleStyle] = useState(true);

  const settingsCard = () => {
    if (toggleStyle) {
      return;
    } else {
      setCardDisplay([<SettingsCardDetails key={0} />]);
      setToggleStyle(!toggleStyle);
    }
  };
  const settingcardpassword = () => {
    console.log(cardDisplay == <SettingsCardFormPassword />);
    if (!toggleStyle) {
      return;
    } else {
      setCardDisplay([<SettingsCardFormPassword key={1} />]);
      setToggleStyle(!toggleStyle);
    }
  };

  return (
    <>
      <div>
        <div className="flex flex-row items-start justify-start space-x-8 px-2 my-6">
          <div
            className={
              toggleStyle
                ? "border-b-[2px] text-[#74BF44] border-[#74BF44] font-[700px] text-[16px]"
                : " border-none text-[black] font-[700px] text-[16px]"
            }
          >
            <button onClick={settingsCard}>My Details</button>
          </div>
          <div
            className={
              !toggleStyle
                ? "border-b-[2px] text-[#74BF44] border-[#74BF44] font-[700px] text-[16px]"
                : " border-none text-[black] font-[700px] text-[16px]"
            }
          >
            <button onClick={settingcardpassword}>Password</button>
          </div>
        </div>
        <div>{cardDisplay}</div>
      </div>
    </>
  );
};

export default SettingsCard1;
