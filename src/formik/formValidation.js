import * as Yup from 'yup';

export const _formLoginValidation = Yup.object({
  // email: Yup.string()
  //     .email('The email provided should be a valid email address')
  //     .max(255)
  //     .required('The email field is required'),
  username: Yup.string().max(255).required('The username field is required'),
  password: Yup.string()
    .min(5)
    .max(255)
    .required('The password field is required'),
  terms: Yup.boolean().oneOf(
    [true],
    'You must agree to our terms and conditions'
  )
});

export const _formRegisterValidation = Yup.object({
  custName: Yup.string().required('Please enter your customer name'),
  email: Yup.string()
    .email('Please enter valid email address')
    .required('Please enter your email address'),
  password: Yup.string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Please enter your password'),
  confirmPassword: Yup.string()
    .min(8, 'Confirm Password should be of minimum 8 characters length')
    .required('Please enter your password'),
  phone: Yup.number()
    .min(10, 'Phone number must be 10 digit')
    .required('Please enter your phone number'),
  address: Yup.string().required('Please enter your phone number'),
  dob: Yup.date().required('Please enter your birth date')
});
export const _categoryFormValidation = Yup.object({
  name: Yup.string().required('Please enter category name')
});
export const _updateformRegisterValidation = Yup.object({
  custName: Yup.string().required('Please enter your customer name'),
  email: Yup.string()
    .email('Please enter valid email address')
    .required('Please enter your email address'),
  // password: Yup.string().min(8, 'Password should be of minimum 8 characters length').required('Please enter your password'),
  // confirmPassword: Yup.string().min(8, 'Confirm Password should be of minimum 8 characters length').required('Please enter your password'),
  phone: Yup.number()
    .min(10, 'Phone number must be 10 digit')
    .required('Please enter your phone number'),
  address: Yup.string().required('Please enter your phone number')
});

//Product
export const _productFormValidation = Yup.object({
  name: Yup.string().required('Please enter your product name'),
  description: Yup.string().required('Please enter product decription'),
  price: Yup.number().required('Please enter product price'),
  stock: Yup.number().required('Please enter stock')
  // sizes: Yup.array().required("Please sizzes")
  // arr: array().of(object().shape({ num: number().max(4) })),
  // tags: Yup.string().required('Please enter your email address'),
  // isNewlyAdded: Yup.boolean().required('Please enter your email address'),
  // isTrending: Yup.boolean().required('Please enter your password'),
  // isFeatured: Yup.boolean().required('Please enter your password'),
  // isHotDeals: Yup.boolean().required('Please enter your password'),
  // availability: Yup.boolean().required('Please enter your password'),
  // size: Yup.number().required('Please enter product size'),
  // color: Yup.number().required('Please enter product color'),
  // images: Yup.number().required('Select the images'),
  // stock: Yup.string().required('How many product are available?')
});

const validation = {
  name: Yup.string()
    .trim()
    .required('Vendor name is required')
    .min(3, 'Name must be have at least 3 characters'),
  email: Yup.string()
    .trim()
    .required('Email is required')
    .email('Must be an email'),
  phone: Yup.string()
    .required('Phone number is required')
    .min(10, 'Phone number must be at 10 digits')
    .max(10, 'Phone number must be at 10 digits'),
  owner_name: Yup.string(),
  owner_number: Yup.string()
};

export const _addVendorValidation = Yup.object({
  ...validation,
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Passwords must have 6 characters')
    .max(30, 'Password can only have 30 characters'),
  password_confirmation: Yup.string()
    .required('Password confirmation is required')
    .oneOf([Yup.ref('password'), null], "Passwords don't match")
});

export const _loginValidation = Yup.object({
  // email: Yup.string()
  //     .email('The email provided should be a valid email address')
  //     .max(255)
  //     .required('The email field is required'),
  email: Yup.string()
    .max(255)
    .required('The email field is required')
    .email('Must be an email'),
  password: Yup.string()
    .min(5)
    .max(255)
    .required('The password field is required'),
  terms: Yup.boolean().oneOf(
    [true],
    'You must agree to our terms and conditions'
  )
});

export const _busStoreValidation = Yup.object({
  name: Yup.string().required('Bus name is required').max(255),
  bus_number: Yup.string().required('Bus number is required'),
  max_row: Yup.number().required('Max row is required'),
  max_col: Yup.number().required('Max columns is required'),
  vendor_id: Yup.string().required('Vendor needs to be selected')
});

export const _busStoreValidationVendor = Yup.object({
  name: Yup.string().required('Bus name is required').max(255),
  bus_number: Yup.string().required('Bus number is required'),
  max_row: Yup.number().required('Max row is required'),
  max_col: Yup.number().required('Max columns is required')
});

export const _updateVendorValidation = Yup.object(validation);
