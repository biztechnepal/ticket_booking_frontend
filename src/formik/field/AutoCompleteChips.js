import React, { useState } from 'react'
import { Autocomplete, TextField } from '@mui/material'
function AutoCompleteChips({
    name,
    value,
    label,
    touched,
    error,
    errorText,
    options,
    selectedOptions,
    placeholder,
    setFieldValue,
    setFieldTouched, 
    onChange
}) {
    // const [fieldError, setError] = useState(error);
    // const handleBlur = () => {
    //     setFieldTouched(name);
    //     if (value.length < 1) {
    //         setError(errorText)
    //     }
    // };
    // const handleChange = (value) => {
    //     setError("");
    //     setFieldValue(name, value);
    //   };
    return <>
        <Autocomplete
            multiple
            freeSolo
            name={name}
            id="tags-outlined"
            options={options}
            defaultValue={selectedOptions}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            renderInput={(params) => (
                <TextField
                    {...params}
                    fullWidth
                    // onBlur={handleBlur}
                    // error={Boolean(touched && fieldError)}
                    // helperText={touched && fieldError}
                    label={label}
                    placeholder={placeholder}
                    // onKeyUp={e => {
                    //     if (e.key === "Space" && e.target.value) {
                    //         let text = e.target.value;
                    //         if (text.includes(" ")) {
                    //             let vinnos = text.split("/");
                    //             setAutoCompleteValue(autoCompleteValue.concat(vinnos));

                    //         } else {
                    //             setAutoCompleteValue(autoCompleteValue.concat(e.target.value));
                    //         }
                    //     }
                    // }}
                />
            )}
        onChange={onChange}
        // onChange={(e, value) => handleChange(value)}
        /></>;
}

export default AutoCompleteChips;
