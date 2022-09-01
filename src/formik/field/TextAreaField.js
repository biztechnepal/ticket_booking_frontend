import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { Form,FloatingLabel } from 'react-bootstrap';
function TextAreaField(props) {
    const { label, name, type, ac,placeholder, ...rest } = props

    return (
        <div >
            {/* <Form.Label className="font-semibold" htmlFor={name}>{label}</Form.Label> */}
            <Field as='textarea' id={name} name={name} {...rest} >
                {
                    ({ field, meta: { touched, error } }) =>  <FloatingLabel  label={label} className="mb-3">
                        <Form.Control as="textarea" placeholder={placeholder}  {...field} id={name} name={name} type={type} {...rest} />
                    </FloatingLabel>
                }
            </Field>
            <ErrorMessage name={name}>
                {errorMsg => <p style={{
                    color: " #f74a4a",
                    fontWeight: 'bold'
                }}> {errorMsg}</p>}
            </ErrorMessage>
        </div>
    )
}

export default TextAreaField