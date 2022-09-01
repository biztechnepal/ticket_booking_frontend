import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { Form } from 'react-bootstrap'
function RadiobuttonField(props) {
    const { label, name, options, ...rest } = props
    return (
        <div>
            <Form.Label htmlFor={name}>{label}</Form.Label>
            <Field name={name} {...rest}>
                {
                    ({ field }) => {
                        return options?.map(option => {
                            return (
                                <React.Fragment key={option.key}>
                                    <Form.Check type='checkbox' id={option.value} {...field} value={option.value} checked={field.value === option.value} />
                                    <Form.Label htmlFor={option.value}>{option.key}</Form.Label>
                                </React.Fragment>
                            )
                        })
                    }
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

export default RadiobuttonField
