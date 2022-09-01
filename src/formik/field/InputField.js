import { ErrorMessage, Field } from 'formik';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
function InputField(props) {
  const {
    label,
    name,
    type,
    value,
    disabled,
    hidden,
    onClick,
    editable,
    ...rest
  } = props;
  return (
    <div>
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Field id={name} name={name} {...rest}>
        {({ field, meta: { touched, error } }) => (
          <>
            <Form.Control
              {...field}
              id={name}
              name={name}
              type={type}
              {...rest}
              value={value}
              disabled={disabled}
              hidden={hidden}
              onClick={onClick}
              contentEditable={editable}
            />
          </>
        )}
      </Field>
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

export default InputField;
