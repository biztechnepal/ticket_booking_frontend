import { Box, Button, Card, Grid, Checkbox, Typography } from '@mui/material';
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

function UpdateSection({ item, _id }) {
  const {} = useDropzone({
    accept: 'image/jpeg, image/png'
  });

  console.log('vendorrrrrr', item);

  const initialValues = {
    name: item?.name || '',
    email: item?.email || '',
    phone: item?.phone || '',
    owner_name: item?.owner_name || '',
    owner_number: item?.owner_number || '',
    pan_number: item?.pan_number || '',
    is_verified: item?.is_verified || false,
    is_active: item?.is_active || false
  };

  const handleSubmit = async (values, helpers) => {
    console.log('put', values);

    helpers.setSubmitting(true);

    await axiosClient
      .put(urls.API_UPDATE_VENDOR + `/${_id}`, values)
      .then((res) => {
        const { success, vendor } = res.data;

        helpers.setSubmitting(false);

        if (success) {
          Toast.success('Vendor data has been edited');
        }
      })
      .catch((err) => {
        helpers.setSubmitting(false);

        const { email } = err.response.data.errors;

        if (email) {
          Toast.error(email);
        }

        console.log('errrs', err.response.data);
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
            // validationSchema={_addVendorValidation}
          >
            {({ isSubmitting, errors, touched, values, setFieldValue }) => (
              <Form>
                <Grid container spacing={3}>
                  <Grid item xs={6} md={6}>
                    <FormikControl
                      control="input"
                      type="text"
                      label="Vendor Name"
                      name="name"
                      value={values.name}
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <FormikControl
                      control="input"
                      type="text"
                      label="Vendor email"
                      name="email"
                      value={values.email}
                      disabled={true}
                    />
                  </Grid>
                  <Grid item xs={5} md={4}>
                    <FormikControl
                      control="input"
                      type="number"
                      label="Vendor phone"
                      name="phone"
                      value={values.phone}
                    />
                  </Grid>
                  <Grid item xs={6} md={8}>
                    <FormikControl
                      control="input"
                      type="text"
                      placeholder="."
                      label="Pan number"
                      name="pan_number"
                      value={values.pan_number}
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <FormikControl
                      control="input"
                      type="text"
                      placeholder="."
                      label="Owner name"
                      name="owner_name"
                      value={values.owner_name}
                    />
                  </Grid>

                  <Grid item xs={6} md={6}>
                    <FormikControl
                      control="input"
                      type="text"
                      placeholder="."
                      label="Owner number"
                      name="owner_number"
                      value={values.owner_number}
                    />
                  </Grid>

                  <Grid item xs={3} md={3}>
                    <Typography>Is active</Typography>
                    <Checkbox
                      checked={values.is_active}
                      onChange={() =>
                        setFieldValue('is_active', !values.is_active)
                      }
                    />
                  </Grid>

                  <Grid item xs={7} md={7}>
                    <Typography>Is verified</Typography>
                    <Checkbox
                      checked={values.is_verified}
                      onChange={() =>
                        setFieldValue('is_verified', !values.is_verified)
                      }
                    />
                  </Grid>
                </Grid>
                <Stack direction="horizontal" gap={3} className="col-md-7 mt-2">
                  <Button variant="outlined" type="submit">
                    <ProgressSpinner isLoading={isSubmitting} type={'dark'} />
                    Update
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

export default UpdateSection;
