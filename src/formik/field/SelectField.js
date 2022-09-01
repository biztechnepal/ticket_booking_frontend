import { ErrorMessage, Field } from 'formik';
import React from 'react';
import { Form } from 'react-bootstrap';

function SelectField(props) {
  const { label, name, options, defaultSelect, value, ...rest } = props;
  return (
    <div>
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Select id={name} name={name} value={value} {...rest}>
        <option value={''}>{defaultSelect}</option>
        {options?.map((option, index) => {
          return (
            <option key={index} value={option._id}>
              {option.name}
            </option>
          );
        })}
      </Form.Select>
      <ErrorMessage name={name}>
        {(errorMsg) => (
          <p
            style={{
              color: ' #f74a4a',
              fontWeight: 'bold'
            }}
          >
            {' '}
            {errorMsg}
          </p>
        )}
      </ErrorMessage>
    </div>
  );
}

export default SelectField;
