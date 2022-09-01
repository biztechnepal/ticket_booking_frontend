import React from 'react';
import InputField from '../field/InputField';
import TextAreaField from '../field/TextAreaField';
import SelectField from '../field/SelectField';
import RadiobuttonField from '../field/RadiobuttonField';
import CheckboxField from '../field/CheckboxField';
import AutoComplete from '../field/AutoComplete';
import AutoCompleteChips from '../field/AutoCompleteChips';
import SelectDestinationField from '../field/SelectDestinationField';

function FormikControl({ control, ...rest }) {
  switch (control) {
    case 'input':
      return <InputField {...rest} />;
    case 'textarea':
      return <TextAreaField {...rest} />;
    case 'select':
      return <SelectField {...rest} />;

    case 'select_destination':
      return <SelectDestinationField {...rest} />;
    case 'radio':
      return <RadiobuttonField {...rest} />;
    case 'checkbox':
      return <CheckboxField {...rest} />;
    case 'autocomplete':
      return <AutoComplete {...rest} />;
    case 'chips':
      return <AutoCompleteChips {...rest} />;
    default:
      return null;
  }
}
export default FormikControl;
