import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Formik, Form } from "formik";
import { useState } from "react";
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
    "Community": "Community",
    "Governance": "Governance",
    "Software": "Software",
    "Artificial Intelligence": "Artificial Intelligence",
    "Hardware": "Hardware",
    "Infrastructure": "Infrastructure",
  }

  const ContributeSchema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email("Invalid Email").required("Required"),
    bio: yup.string().required("Required"),
    AOC: yup.string().required("Required"),
    linkedInUrl: yup.link().required("Required"),
    twitterUrl: yup.link().required("Required"),
    details: yup.string().required("Required"),
  });

  return (
    <div className="grid font-Grotesk">
      <div className="text-2xl capitalize">Contribute to ClimeCheck</div>
      <div className="my-12">
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
            <div className="grid gap-4 sm:grid-cols-6">
              <TextFieldWrapper name="name" label="Name" />
            </div>
            <div className="grid gap-4 sm:grid-cols-6">
              <TextFieldWrapper name="email" label="Email" />
            </div>
            <div className="grid gap-4 sm:grid-cols-12">
              <TextFieldWrapper name="bio" label="Your Short Biography" />
            </div>
            <div className="grid gap-4 sm:grid-cols-12">
              <SelectWrapper name="AOC" label="Area Of Contribution" options={AOC_OPTIONS}/>
            </div>
            <div className="grid gap-4 sm:grid-cols-6">
              <TextFieldWrapper name="linkedInUrl" label="LinkedIn url" />
            </div>
            <div className="grid gap-4 sm:grid-cols-6">
              <TextFieldWrapper name="twitterUrl" label="Twitter url" />
            </div>
            <div className="grid gap-4 sm:grid-cols-12">
              <TextFieldWrapper name="details" label="Additional details that might give more context" />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default ContForm;
