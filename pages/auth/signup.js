/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState, useMemo, useContext } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import Select from "../../components/CustomSelect";
import countryList from "react-select-country-list";

import AlertModal from "../../components/Modals/AlertModal";
import { useRouter } from "next/router";
import Loader from "../../components/Modals/Loader";
import { EyeIcon, EyeSlashIcon, GoogleIcon } from "../../components/Icons";

const Signup = () => {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [displayAlert, setDisplayAlert] = useState(false);
  const [alertHeading, setAlertHeading] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertStatus, setAlertStatus] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Formik initial values ... this is the initial form state
  let initialValues = {
    fullName: "",
    email: "",
    Country: "",
    userName: "",
    password: "",
  };

  // Yup validation schema... this is for form validation
  const validationSchema = Yup.object({
    fullName: Yup.string().required("This field is required"),
    userName: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Invalid Email")
      .required("This field is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Password must contain at least one uppercase, one lowercase, one number and one special character e.g (!@#$%^&*)"
      )
      .required("This field is required"),
  });

  //The useFormik hook... takes all variables for handling the form
  const formik = useFormik({
    initialValues,
    // onSubmit,
    validationSchema,
  });

  //country options
  const countries = useMemo(() => countryList().getData(), []);

  return (
    <div className="w-full relative">
      <div className="flex font-Grotesk overflow-hidden">
        {/* left panel */}
        <div className="hidden sm:flex bg-signup-hero bg-no-repeat bg-center text-black w-[50%] min-h-[100vh] ">
          <div className="w-full h-full flex flex-col justify-between bg-slate-300/20 backdrop-brightness-75 py-4">
            <div>
              <Link href="/">
                <img src="/ClimeCheck.svg" alt="" />
              </Link>
            </div>
            <div className="text-[1.2rem] font-[400] px-6">
              <span className="text-green-600">Climecheck ecosystem</span> is a
              real-time big data platform of climate monitoring devices around
              the globe.
            </div>
            <div className="px-6 ">
              <span className="font-semibold text-lg">Did you know?</span>{" "}
              <br />
              You can also connect your wallet to your account
            </div>
            <div className="flex items-center justify-center w-full">
              <Link href="">
                <button className="py-4 px-6 min-w-[192px] bg-white rounded-md text-[#74BF44] uppercase font-semibold tracking-widest">
                  Connect Wallet
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* right panel */}
        <div className="flex items-center justify-center w-full">
          <div className="bg-white text-black w-full sm:w-[55%] min-h-[100vh] text-center py-[3rem] sm:py-6 flex flex-col justify-center">
            <h1 className="text-[1.4rem] mb-6 font-Raleway font-[600] uppercase">
              create account
            </h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                formik.handleSubmit(e);
              }}
              className="font-Poppins"
            >
              {/* Full Name starts */}
              <div className="w-full mb-4 px-4 sm:px-0">
                <input
                  className="block w-full px-4 py-2 h-[50px] font-normal bg-transparent bg-clip-padding border-[1px] border-gray-200 rounded-md transition-all m-0  focus:bg-transparent focus:border-[#74BF44] focus:outline-none"
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  required
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={(e) => {
                    formik.handleBlur(e);
                  }}
                />
                {formik.touched.fullName && formik.errors.fullName && (
                  <p className="text-xs text-red-600 text-start mt-[1px]">
                    {formik.errors.fullName}
                  </p>
                )}
              </div>
              {/* Full Name ends */}
              {/* email adddress start*/}
              <div className="w-full mb-4 px-4 sm:px-0">
                <input
                  className="block w-full px-4 py-2 h-[50px] font-normal bg-transparent bg-clip-padding border-[1px] border-gray-200 rounded-md transition-all m-0  focus:bg-transparent focus:border-[#74BF44] focus:outline-none"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={(e) => {
                    formik.handleBlur(e);
                  }}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-xs text-red-600 text-start mt-[1px]">
                    {formik.errors.email}
                  </p>
                )}
              </div>
              {/* email adddress ends*/}
              {/* Select Country starts */}
              <div className="w-full mb-4 px-4 sm:px-0">
                <Select
                  className="block w-full px-4 py-2 h-[50px] font-normal bg-transparent bg-clip-padding border-[1px] border-gray-200 rounded-md transition-all m-0  focus:bg-transparent focus:border-[#74BF44] focus:outline-none"
                  type="select"
                  id="country"
                  name="country"
                  placeholder="Select Country"
                  required
                  options={countries}
                  value={formik.values.Country}
                  onChange={formik.handleChange}
                  onBlur={(e) => {
                    formik.handleBlur(e);
                  }}
                />
                {formik.touched.Country && formik.errors.Country && (
                  <p className="text-xs text-red-600 text-start mt-[1px]">
                    {formik.errors.Country}
                  </p>
                )}
              </div>
              {/* Select Country ends */}
              {/* password starts*/}
              <div className="w-full mb-4 px-4 sm:px-0 relative">
                <input
                  className="block w-full px-4 py-2 h-[50px] font-normal bg-transparent bg-clip-padding border-[1px] border-gray-200 rounded-md transition-all m-0  focus:bg-transparent focus:border-[#74BF44] focus:outline-none"
                  type={`${showPassword ? "text" : "password"}`}
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={(e) => {
                    formik.handleBlur(e);
                  }}
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-xs text-red-600 text-start mt-[1px]">
                    {formik.errors.password}
                  </p>
                )}
                <p
                  className="absolute right-8 top-4 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
                </p>
              </div>
              {/* password ends */}
              {/* Username starts */}
              <div className="w-full mb-4 px-4 sm:px-0">
                <input
                  className="block w-full px-4 py-2 h-[50px] font-normal bg-transparent bg-clip-padding border-[1px] border-gray-200 rounded-md transition-all m-0  focus:bg-transparent focus:border-[#74BF44] focus:outline-none"
                  type="text"
                  id="userName"
                  name="userName"
                  placeholder="Username"
                  required
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  onBlur={(e) => {
                    formik.handleBlur(e);
                  }}
                />
                {formik.touched.userName && formik.errors.userName && (
                  <p className="text-xs text-red-600 text-start mt-[1px]">
                    {formik.errors.userName}
                  </p>
                )}
              </div>
              {/* Username ends */}
              {/* T&C div starts */}
              <div className="mt-[1.5rem] text-sm mb-[1rem] px-6 sm:px-0">
                By creating an account you agree to our{" "}
                <span className="text-[#74BF44] font-[500]">
                  TERMS & CONDITION
                </span>{" "}
                and{" "}
                <span className="text-[#74BF44] font-[500]">
                  PRIVACY POLICY
                </span>
              </div>
              {/* T&C div ends */}
              {/* Create account button starts */}
              <div className="w-full flex justify-center px-4">
                <button
                  disabled={null}
                  type="submit"
                  className="flex justify-center items-center w-full py-2 bg-[#74BF44] rounded-md text-white uppercase tracking-widest shadow-[0px_0px_80px_rgba(4,4,88,0.14)]"
                >
                  {loader ? <Loader /> : "create account"}
                </button>
              </div>
              {/* Create account button ends */}
              {/* Already have an account div starts */}
              <div className="text-sm flex justify-center mt-3">
                Already have an account?
                <Link href="/auth/login" passHref>
                  <p className="text-[#74BF44] font-[600] ml-2 uppercase">
                    Login
                  </p>
                </Link>
              </div>
              {/* Already have an account div ends */}
              {/* Auth providers div start */}
              <div className="w-full flex items-center justify-center mt-4 space-x-2 sm:space-x-3 px-4 sm:px-0">
                <button
                  type="button"
                  className="border py-2 px-2 flex items-center justify-center space-x-2  rounded-md hover:brightness-95 transition-all bg-[#F4F4FF] h-12 w-20"
                >
                  <GoogleIcon />
                </button>
                <button
                  type="button"
                  className="border py-2 px-2 flex items-center justify-center space-x-2 rounded-md hover:brightness-95 transition-all bg-[#F4F4FF] h-12 w-20"
                >
                  <AiOutlineTwitter className="h-6 w-6 text-blue-400" />
                </button>
                <button
                  type="button"
                  className="border py-2 px-2 flex items-center justify-center space-x-2 rounded-md hover:brightness-95 transition-all bg-[#F4F4FF] h-12 w-20"
                >
                  <AiFillLinkedin className="h-6 w-6 text-blue-700" />
                </button>
              </div>
              {/* Auth providers div ends */}
            </form>
            {/* Create account form ends */}
          </div>
        </div>
      </div>
      {/* Spinner */}
      {displayAlert && (
        <AlertModal
          display={displayAlert}
          heading={alertHeading}
          message={alertMessage}
          status={alertStatus}
          onClickButton={() => {
            setDisplayAlert(false);
          }}
          onCallAlertModal={() => setDisplayAlert(false)}
          ButtonText="OK, I got it"
        />
      )}
    </div>
  );
};

export default Signup;
