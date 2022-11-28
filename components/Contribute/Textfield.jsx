import React from 'react';
import TextField from "@mui/material/TextField";
import { useField } from 'formik';

const TextFieldWrapper = ({
  name,
  ...otherProps
}) => {
  const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    variant: 'filled'
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return (
    <TextField sx={{ width: '30ch' }} {...configTextfield} />
  );
};

export default TextFieldWrapper;