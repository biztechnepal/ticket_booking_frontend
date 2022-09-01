import { ErrorMessage, Field } from 'formik'
import React from 'react'
// import TextError from './TextError'
import {Form } from 'react-bootstrap'

function CheckboxField(props) {
    const {label, name, options, ...rest} = props
    return (
        <div>
          <Form.Label htmlFor={name}>{label}</Form.Label>
           <Field name={name} {...rest}>
               {
                   ({field}) => (
                       <div  className="d-flex justify-content-center">
                            {options?.map(option =>{
                                return(
                                    <React.Fragment key={option.value}>
                                        <fieldset>
                                            <legend className="px-2">
                                                <Form.Control 
                                                    type='checkbox' 
                                                    id={option.value} 
                                                    {...field} 
                                                    value={option.value} 
                                                    checked={field.value.includes(option.value)} 
                                                />
                                                <Form.Label  htmlFor={option.value}>{option.value}</Form.Label>
                                            </legend>
                                            <span className="">
                                                {option.description}
                                            </span>
                                        </fieldset>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    )
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

export default CheckboxField
