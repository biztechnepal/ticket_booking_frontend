import { Box, Button, Card, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import { Stack } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';

import FormikControl from 'src/formik/control/FormikControl';
import { _productFormValidation } from 'src/formik/formValidation';
import axiosClient from 'src/utils/axios-client';
import urls from 'src/utils/urls';
import ProgressSpinner from 'src/_partials/Spinner';
import Toast from 'src/_partials/toast';

import { _addVendorValidation } from 'src/formik/formValidation';

function AddSection() {
  const {} = useDropzone({
    accept: 'image/jpeg, image/png'
  });

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    owner_name: '',
    owner_number: '',
    pan_number: '',
    password: '',
    password_confirmation: ''
  };

  const handleSubmit = async (values, helpers) => {
    helpers.setSubmitting(true);

    await axiosClient
      .post(urls.API_ADD_VENDOR, values)
      .then((res) => {
        const { success, vendor } = res.data;

        helpers.setSubmitting(false);

        if (success) {
          Toast.success('Vendor has been added successfully');
        }
      })
      .catch((err) => {
        helpers.setSubmitting(false);

        const { email } = err.response.data.errors;

        if (email) {
          Toast.error(email);
        }
      });
  };

  return (
    <>
      <Box mb={3} display="flex">
        <Card
          sx={{
            pb: 30,
            pl: 3,
            pr: 3,
            pt: 3
          }}
        >
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={_addVendorValidation}
          >
            {({ isSubmitting, errors, touched, values }) => (
              <Form>
                <Grid container spacing={3}>
                  <Grid item xs={6} md={6}>
                    <FormikControl
                      control="input"
                      type="text"
                      label="Vendor Name"
                      name="name"
                      password
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <FormikControl
                      control="input"
                      type="text"
                      label="Vendor email"
                      name="email"
                    />
                  </Grid>
                  <Grid item xs={5} md={4}>
                    <FormikControl
                      control="input"
                      type="number"
                      label="Vendor phone"
                      name="phone"
                    />
                  </Grid>
                  <Grid item xs={6} md={8}>
                    <FormikControl
                      control="input"
                      type="text"
                      placeholder="."
                      label="Pan number"
                      name="pan_number"
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <FormikControl
                      control="input"
                      type="text"
                      placeholder="."
                      label="Owner name"
                      name="owner_name"
                    />
                  </Grid>

                  <Grid item xs={6} md={6}>
                    <FormikControl
                      control="input"
                      type="text"
                      placeholder="."
                      label="Owner number"
                      name="owner_number"
                    />
                  </Grid>

                  <Grid item xs={6} md={6}>
                    <FormikControl
                      control="input"
                      type="text"
                      placeholder="."
                      label="Password"
                      name="password"
                    />
                  </Grid>

                  <Grid item xs={6} md={6}></Grid>

                  <Grid item xs={6} md={6}>
                    <FormikControl
                      control="input"
                      type="text"
                      placeholder="."
                      label="Confirm password"
                      name="password_confirmation"
                    />
                  </Grid>
                </Grid>
                <Stack direction="horizontal" gap={3} className="col-md-7 mt-2">
                  <Button variant="outlined" type="submit">
                    <ProgressSpinner isLoading={isSubmitting} type={'dark'} />
                    Add
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    // onClick={(e) => alert("")}
                  >
                    Cancel
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Box>
    </>
  );
}

export default AddSection;
