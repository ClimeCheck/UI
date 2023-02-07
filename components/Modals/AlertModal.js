import React, { useState } from "react";
import { ErrorIcon, SuccessIcon } from "../Icons";
import Loader from "./Loader";

const AlertModal = (props) => {
  const [loader, setLoader] = useState(false);

  return (
    <section
      className={`w-full h-screen bg-[#4b4949b2] shadow-sm fixed inset-0 z-[30000] flex items-center  justify-center ${
        props.display ? "flex" : "hidden"
      } `}
      onClick={props.onCallAlertModal}
    >
      <div
        className="flex flex-col justify-between w-[320px] min-h-[200px] sm:w-[450px] sm:min-h-[300px] border rounded-lg bg-backgroundLight border-[#686868] p-5 sm:p-7 shadow-[0px_0px_20px_15px_#0e1e7a1f]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Heading start */}
        <article className="w-full flex justify-center  mb-4">
          <p className="font-bold font-raleway  text-xl">{props.heading}</p>
        </article>
        {/* Heading end */}
        {/* Alert status icon start */}
        <div className="w-full flex justify-center items-center mb-4">
          {/* conditional rendering of icons based on props.status */}
          {props.status === "success" ? <SuccessIcon /> : <ErrorIcon />}
        </div>
        {/* Alert message start */}
        <div className="flex justify-center max-h-28 overflow-y-auto">
          <p className="text-center w-[350px]">{props.message}</p>
        </div>
        {/* Alert message end */}
        {/* Alert buttons start */}
        <article className="flex items-center justify-between w-full mt-7">
          <button
            type="button"
            className={`flex uppercase justify-center items-center px-4 h-12 w-24 grow font-bold text-white rounded-md bg-primary hover:brightness-90 tracking-widest`}
            onClick={props.onClickButton}
          >
            {loader ? <Loader /> : `${props.ButtonText}`}
          </button>
        </article>
        {/* Alert buttons end */}
      </div>
    </section>
  );
};

export default AlertModal;