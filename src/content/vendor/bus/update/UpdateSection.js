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

import { useDispatch } from 'react-redux';

import { _addVendorValidation } from 'src/formik/formValidation';
import { updateBus } from 'src/slices/bus';
import { useRouter } from 'next/router';

function UpdateSection({ item, _id }) {
  const {} = useDropzone({
    accept: 'image/jpeg, image/png'
  });

  const dispatch = useDispatch();
  const route = useRouter();

  const initialValues = {
    name: item?.name || '',
    bus_number: item?.bus_number || '',
    max_row: item?.max_row || '',
    max_col: item?.max_col || ''
  };

  const handleSubmit = async (values, helpers) => {
    console.log('put', values);

    helpers.setSubmitting(true);

    await axiosClient
      .put(urls.API_BUS + `/${_id}`, values)
      .then((res) => {
        const { success, bus } = res.data;

        helpers.setSubmitting(false);

        if (success) {
          Toast.success('Bus data has been edited');

          dispatch(updateBus(bus));
          route.push('/vendor/bus');
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
                      label="Bus Name"
                      name="name"
                      value={values.name}
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <FormikControl
                      control="input"
                      type="text"
                      label="Bus number"
                      name="bus_number"
                      value={values.bus_number}
                    />
                  </Grid>
                  <Grid item xs={5} md={4}>
                    <FormikControl
                      control="input"
                      type="number"
                      label="Max number"
                      name="phone"
                      value={values.max_row}
                    />
                  </Grid>
                  <Grid item xs={6} md={8}>
                    <FormikControl
                      control="input"
                      type="number"
                      placeholder="."
                      label="Max columns"
                      name="max_col"
                      value={values.max_col}
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
