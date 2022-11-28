import { Formik, Form } from "formik";
import * as yup from "yup";
import TextFieldWrapper from "./Textfield";
import SelectWrapper from "./sellectfield";

function ContForm() {
  const INITIAL_FORM_STATE = {
    name: "",
    email: "",
    bio: "",
    AOC: "",
    linkedInUrl: "",
    twitterUrl: "",
    details: "",
  };

  const AOC_OPTIONS = {
    Community: "Community",
    Governance: "Governance",
    Software: "Software",
    "Artificial Intelligence": "Artificial Intelligence",
    Hardware: "Hardware",
    Infrastructure: "Infrastructure",
  };

  const URL =
    /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

  const ContributeSchema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email("Invalid Email").required("Required"),
    bio: yup.string().required("Required"),
    AOC: yup.string().required("Required"),
    linkedInUrl: yup
      .string()
      .matches(URL, "Enter a valid url")
      .required("Required"),
    twitterUrl: yup
      .string()
      .matches(URL, "Enter a valid url")
      .required("Required"),
    details: yup.string(),
  });

  return (
    <div className="grid font-Grotesk w-screen">
      <div className="text-2xl sm:text-[46px] text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00963f] via-white to-[#0069B3]">
        CONTRIBUTE TO CLIMECHECK
      </div>
      <div className="my-12 text-slate-300 flex justify-center items-center w-full">
        <Formik
          initialValues={{
            ...INITIAL_FORM_STATE,
          }}
          validationSchema={ContributeSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <div className="flex flex-row mt-3">
              <div className="grid gap-4 grid-cols-6 w-full">
                <TextFieldWrapper name="name" label="Name" />
              </div>
              <div className="grid gap-4 grid-cols-6 w-full">
                <TextFieldWrapper name="email" label="Email" />
              </div>
            </div>
            <div className="grid gap-4 grid-cols-12 mt-3">
              <TextFieldWrapper name="bio" label="Your Short Biography" />
            </div>
            <div className="grid gap-4 grid-cols-12 mt-3">
              <SelectWrapper
                name="AOC"
                label="Area Of Contribution"
                options={AOC_OPTIONS}
              />
            </div>
            <div className="flex flex-row mt-3">
              <div className="grid gap-4 grid-cols-6">
                <TextFieldWrapper name="linkedInUrl" label="LinkedIn url" />
              </div>
              <div className="grid gap-4 grid-cols-6">
                <TextFieldWrapper name="twitterUrl" label="Twitter url" />
              </div>
            </div>
            <div className="grid gap-4 grid-cols-12 mt-3">
              <TextFieldWrapper
                name="details"
                label="Additional details that might give more context"
              />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default ContForm;
