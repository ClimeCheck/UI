import { useFormikContext, Formik, Form, useFormik } from "formik";
import * as Yup from "yup";

import axios from "axios";
import Select from "../CustomSelect";
import Loader from "../Modals/Loader";
import { useState } from "react";

function ContributeForm() {
  const [loader, setLoader] = useState(false);

  // Formik initial values ... this is the initial form state
  let initialValues = {
    name: "",
    email: "",
    bio: "",
    AOC: "",
    linkedInUrl: "",
    twitterUrl: "",
    details: "",
  };

  const AOC_OPTIONS = [
    { label: "Community", value: "Community" },
    { label: "Governance", value: "Governance" },
    { label: "Software", value: "Software" },
    { label: "Artificial Intelligence", value: "Artificial Intelligence" },
    { label: "Hardware", value: "Hardware" },
    { label: "Infrastructure", value: "Infrastructure" },
  ];

  //URL REGEX... for validating Links
  const URL =
    /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

  // Yup validation schema... this is for form validation
  const validationSchema = Yup.object({
    name: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Invalid Email")
      .required("This field is required"),
    bio: Yup.string().required("This field is required"),
    AOC: Yup.string().required("This field is required"),
    linkedInUrl: Yup.string()
      .matches(URL, "Enter a valid url")
      .required("This field is required"),
    twitterUrl: Yup.string()
      .matches(URL, "Enter a valid url")
      .required("This field is required"),
    details: Yup.string().required("This field is required"),
  });

  const formik = useFormik({
    initialValues,
    // onSubmit,
    validationSchema,
  });

  function handleSubmit(values) {
    const endpoint = "/contributors/addContributor";
    try {
      axios.post(endpoint, values, {
        headers: {
          Authorizations: ``,
          "content-type": "",
        },
      });
    } catch (e) {
      console.log("error", e);
    }
  }

  return (
    <div className="grid font-Grotesk w-screen justify-center drawer-content">
      <div className="text-2xl sm:text-[46px] text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00963f] via-white to-[#0069B3]">
        CONTRIBUTE TO CLIMECHECK
      </div>
      <div className="my-12 flex m-auto justify-center items-center sm:w-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit(e);
          }}
          className="font-Grotesk w-full flex flex-col"
        >
          <div className="flex w-full justify-between gap-5">
            {/* Name starts */}
            <div className="w-full mb-4 px-4 sm:px-0">
              <input
                className="block w-full px-4 py-2 h-[50px] font-normal bg-transparent text-black bg-clip-padding border-b-2 border-slate-500  transition-all m-0  focus:bg-transparent focus:border-[#74BF44] focus:outline-none"
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                required
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={(e) => {
                  formik.handleBlur(e);
                }}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-xs text-red-600 text-start mt-[1px]">
                  {formik.errors.name}
                </p>
              )}
            </div>
            {/* Full Name ends */}

            {/* email adddress start*/}
            <div className="w-full mb-4 px-4 sm:px-0">
              <input
                className="block w-full px-4 py-2 h-[50px] font-normal bg-transparent text-black bg-clip-padding border-b-2 border-slate-500  transition-all m-0  focus:bg-transparent focus:border-[#74BF44] focus:outline-none"
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
          </div>

          {/* BIO starts */}
          <div className="w-full mb-4 px-4 sm:px-0">
            <input
              className="block w-full px-4 py-2 h-[50px] font-normal bg-transparent text-black bg-clip-padding border-b-2 border-slate-500  transition-all m-0  focus:bg-transparent focus:border-[#74BF44] focus:outline-none"
              type="text"
              id="bio"
              name="bio"
              placeholder="Your Short Biography"
              required
              value={formik.values.bio}
              onChange={formik.handleChange}
              onBlur={(e) => {
                formik.handleBlur(e);
              }}
            />
            {formik.touched.bio && formik.errors.bio && (
              <p className="text-xs text-red-600 text-start mt-[1px]">
                {formik.errors.bio}
              </p>
            )}
          </div>
          {/* Bio ends */}

          {/* Select AOC starts */}
          <div className="w-full mb-4 px-4 sm:px-0">
            <Select
              className="block w-full px-4 py-2 h-[50px] font-normal bg-transparent text-black bg-clip-padding border-b-2 border-slate-500  transition-all m-0  focus:bg-transparent focus:border-[#74BF44] focus:outline-none"
              type="select"
              id="AOC"
              name="AOC"
              placeholder="Select Area of Contribution"
              required
              options={AOC_OPTIONS}
              value={formik.values.AOC}
              onChange={formik.handleChange}
              onBlur={(e) => {
                formik.handleBlur(e);
              }}
            />
            {formik.touched.AOC && formik.errors.AOC && (
              <p className="text-xs text-red-600 text-start mt-[1px]">
                {formik.errors.AOC}
              </p>
            )}
          </div>
          {/* Select AOC ends */}

          <div className="flex w-full justify-between gap-5">
            {/* Twitter Link starts */}
            <div className="w-full mb-4 px-4 sm:px-0">
              <input
                className="block w-full px-4 py-2 h-[50px] font-normal bg-transparent text-black bg-clip-padding border-b-2 border-slate-500  transition-all m-0  focus:bg-transparent focus:border-[#74BF44] focus:outline-none"
                type="text"
                id="twitterUrl"
                name="twitterUrl"
                placeholder="Your Twitter profile link"
                required
                value={formik.values.twitterUrl}
                onChange={formik.handleChange}
                onBlur={(e) => {
                  formik.handleBlur(e);
                }}
              />
              {formik.touched.twitterUrl && formik.errors.twitterUrl && (
                <p className="text-xs text-red-600 text-start mt-[1px]">
                  {formik.errors.twitterUrl}
                </p>
              )}
            </div>
            {/* Twitter LInk ends */}

            {/* LinkedIn Profile starts */}
            <div className="w-full mb-4 px-4 sm:px-0">
              <input
                className="block w-full px-4 py-2 h-[50px] font-normal bg-transparent text-black bg-clip-padding border-b-2 border-slate-500  transition-all m-0  focus:bg-transparent focus:border-[#74BF44] focus:outline-none"
                type="text"
                id="linkedInUrl"
                name="linkedInUrl"
                placeholder="Your LinkenIn profile link"
                required
                value={formik.values.linkedInUrl}
                onChange={formik.handleChange}
                onBlur={(e) => {
                  formik.handleBlur(e);
                }}
              />
              {formik.touched.linkedInUrl && formik.errors.linkedInUrl && (
                <p className="text-xs text-red-600 text-start mt-[1px]">
                  {formik.errors.linkedInUrl}
                </p>
              )}
            </div>
            {/* LinkedIn Profile ends */}
          </div>

          {/* Additional details starts */}
          <div className="w-full mb-4 px-4 sm:px-0">
            <input
              className="block w-full px-4 py-2 h-[50px] font-normal bg-transparent text-black bg-clip-padding border-b-2 border-slate-500  transition-all m-0  focus:bg-transparent focus:border-[#74BF44] focus:outline-none"
              type="text"
              id="details"
              name="details"
              placeholder="Additional details that might give more context"
              required
              value={formik.values.details}
              onChange={formik.handleChange}
              onBlur={(e) => {
                formik.handleBlur(e);
              }}
            />
            {formik.touched.details && formik.errors.details && (
              <p className="text-xs text-red-600 text-start mt-[1px]">
                {formik.errors.details}
              </p>
            )}
          </div>
          {/* Additional details ends */}

          {/* Submit button starts */}
          <div className="w-full flex justify-center px-4">
            <button
              disabled={null}
              type="submit"
              className="flslate-200center items-center w-full py-2 bg-[#74BF44]  text-white uppercase tracking-widest shadow-[0px_0px_80px_rgba(4,4,88,0.14)]"
            >
              {loader ? <Loader /> : "Join the community"}
            </button>
          </div>
          {/* Submit button ends */}
        </form>
      </div>
    </div>
  );
}

export default ContributeForm;
