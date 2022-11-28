import React from 'react';
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { useField, useFormikContext } from 'formik';
import Select from "@mui/material/Select"

const SelectWrapper = ({
  name,
  options,
  ...otherProps
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = evt => {
    const { value } = evt.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    meta,
    variant: 'filled',
    // onChange: handleChange()
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField onChange={(e) => handleChange(e)} fullWidth {...configSelect}>
      {Object.keys(options).map((item, pos) => {
        return (
          <MenuItem  key={pos} value={item}>
            {options[item]}
          </MenuItem>
        )
      })}
    </TextField>
  );
};

export default SelectWrapper;