import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { AuthContext } from "../../context/AuthContext";
import {AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai'

import axios from "axios";

import AlertModal from "../../components/Modals/AlertModal";
import { useRouter } from "next/router";
import Loader from "../../components/Modals/Loader";
import { EyeIcon, EyeSlashIcon, GoogleIcon } from "../../components/Icons";

const Login = () => {
  const [loader, setLoader] = useState(false);
  const [displayAlert, setDisplayAlert] = useState(false);
  const [alertHeading, setAlertHeading] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertStatus, setAlertStatus] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  //   Initialize the next router hook
  const router = useRouter();

  // Auth context
  //   const { authSuccess, signIn, error, signInWithGoogle } =
  //     useContext(AuthContext);

  // Listen for error
  //   useEffect(() => {
  //     if (error.isError) {
  //       setDisplayAlert(true);
  //       setAlertHeading("Error");
  //       setAlertMessage(error.errorMsg);
  //       setAlertStatus("error");
  //     }
  //   }, [error.isError]);

  // Console log context
  //   console.log(error);
  //   console.log(authSuccess);

  // handle Sign up
  const handleSignIn = (email, password) => {
    // signIn(email, password);
    return;
  };

  // Formik initial values ... this is the initial form state
  let initialValues = {
    email: "",
    password: "",
  };

  // Yup validation schema... this is for form validation
  const validationSchema = Yup.object({
    email: Yup.string()
    //   .email("Invalid Email")
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

  return (
    <div className="w-full h-[100vh] relative">
      <div className="flex items-center justify-center">
        {/* left panel */}
        {/* <div className="hidden bg-palegreen text-white font-Raleway w-[50%] h-[100vh] sm:flex justify-between items-center flex-col py-[3rem] text-center">
          <div className="text-[1.2rem] font-[400] px-6">
            Climecheck ecosystem is a real-time big data platform of climate
            monitoring devices around the globe.
          </div>
          <div>
            Did you know? <br />
            You can also connect your wallet to your account
          </div>
          <div>
            <div className="font-[20px] mb-3">Dont have an account?</div>
            <Link href="/auth/signup">
              <button className="py-4 px-6 min-w-[192px] bg-white rounded-md text-palegreen uppercase font-semibold tracking-widest">
                create account
              </button>
            </Link>
          </div>
        </div> */}

        {/* right panel */}
        <div className="flex items-center justify-center h-screen w-full">
          <div className="bg-white w-full sm:w-[50%] text-black p-8 border border-slate-300 rounded-lg py-[3rem] flex flex-col justify-center">
            <h1 className="text-[1.4rem] mb-6 font-Raleway text-center font-[600]">
              Welcome Back 👋
            </h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                formik.handleSubmit(e);
                formik.isValid &&
                  handleSignIn(formik.values.email, formik.values.password);
              }}
              className="font-Poppins"
            >
              {/* email adddress */}
              <div className="w-full mb-4 px-4 sm:px-0">
                <label htmlFor="email">Username</label>
                <input
                  className="block w-full px-4 py-2 h-[50px] font-normal bg-transparent bg-clip-padding border-[1px] border-gray-200 rounded-md transition-all m-0  focus:bg-transparent focus:border-palegreen focus:outline-none"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Username or Email Address"
                  required
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

              {/* password div starts*/}
              <div className="w-full mb-4 px-4 sm:px-0 relative">
                <label htmlFor="password">Password</label>
                <input
                  className="block w-full px-4 py-2 h-[50px] font-normal bg-transparent bg-clip-padding border-[1px] border-gray-200 rounded-md transition-all m-0  focus:bg-transparent focus:border-palegreen focus:outline-none"
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
                  className="absolute right-8 top-10 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
                </p>
              </div>
              {/* password div ends*/}

              {/* Forgot PAssword start*/}
              <div className="w-full px-4 sm:px-0 text-right sm:text-left mb-4 flex justify-between">
                <div>
                  <input
                    type="checkbox"
                    name="Remember me"
                    id="remember"
                    className="text-green-500"
                  />
                  <label htmlFor="remember" className="px-2">
                    Remember me
                  </label>
                </div>

                <p className="text-sm text-palegreen hover:underline-offset-4 cursor-pointer">
                  Forgot password?
                </p>
              </div>
              {/* Forgot PAssword end*/}

              {/* log in button starts */}
              <div className="w-full flex justify-center px-4">
                <button
                  type="submit"
                  className="flex justify-center items-center w-full py-2 bg-palegreen rounded-md text-white uppercase tracking-widest shadow-[0px_0px_80px_rgba(4,4,88,0.14)]"
                >
                  {loader ? <Loader /> : "log in"}
                </button>
              </div>
              {/* log in button ends */}

              <div className="mt-[1.5rem] text-center text-sm mb-[1.5rem] px-6 sm:px-0">
                Don&apos;t have an account?{" "}
                <span className="text-palegreen font-[500] px-3">
                  Create Account
                </span>
              </div>

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
                  <AiOutlineTwitter className="h-6 w-6 text-blue-400"/>
                </button>
                <button
                 type="button"
                 className="border py-2 px-2 flex items-center justify-center space-x-2 rounded-md hover:brightness-95 transition-all bg-[#F4F4FF] h-12 w-20"
              >
                    <AiFillLinkedin className="h-6 w-6 text-blue-700" />
                </button>
              </div>
              {/* Auth providers div ends */}

              <div className="sm:hidden flex justify-center mt-4 text-sm">
                Dont have an account?
                <Link href="/auth/signup" passHref>
                  <p className="text-palegreen font-[600] ml-2 uppercase">
                    create account
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* modal */}
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

export default Login;
