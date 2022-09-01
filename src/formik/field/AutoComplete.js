import { Autocomplete, Checkbox, TextField } from '@mui/material'
import React, { useState } from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function AutoComplete(props) {
  const { 
    name, 
    value, 
    label, 
    error, 
    touched, 
    options, 
    selectedOptions,
    setFieldValue, 
    setFieldTouched, 
  } = props

  const [fieldError, setError] = useState(error);

  const handleBlur = () => {
    setFieldTouched(name);
    if(value.length < 1) {
      setError("The divisions field is required")
    }
  };

  const handleChange = (value) => {
    setError("");
    var newValue = value.map((nv) => nv.Id);
    setFieldValue(name, newValue);
  };

  return (
    <>
      <Autocomplete
        fullWidth
        disableCloseOnSelect
        multiple
        name={name}
        options={options}
        defaultValue={selectedOptions}
        isOptionEqualToValue={(option, value) => option.Id === value.Id}
        getOptionLabel={(option) => option.Name}
        renderOption={(props, option, { selected }) => (
          <li {...props}  key={option.Id}>
            <Checkbox
              key={option.Id}
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.Name}
          </li>
        )}
        renderInput={(params) => (
          <TextField 
            name={name} 
            onBlur={handleBlur} 
            error={Boolean(touched && fieldError)} 
            {...params} 
            label={label} 
            helperText={touched && fieldError}
          />
        )}
        onChange={(e, value) => handleChange(value)}
      />
    </>
  )
}

export default AutoComplete
