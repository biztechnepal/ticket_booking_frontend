import { Box, Button, Card, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import { Stack } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';

import FormikControl from 'src/formik/control/FormikControl';
import {
  _busStoreValidation,
  _productFormValidation
} from 'src/formik/formValidation';
import axiosClient from 'src/utils/axios-client';
import urls from 'src/utils/urls';
import ProgressSpinner from 'src/_partials/Spinner';
import Toast from 'src/_partials/toast';

import { _addVendorValidation } from 'src/formik/formValidation';

import { InputLabel, MenuItem, Select } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBus, storeBus } from 'src/slices/bus';
import { storeVendor } from 'src/slices/vendor';

function AddSection() {
  const {} = useDropzone({
    accept: 'image/jpeg, image/png'
  });

  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    bus_number: '',
    max_row: '',
    max_col: '',
    vendor_id: ''
  };

  const { vendors } = useSelector((state) => state.vendor);

  useEffect(async () => {
    await axiosClient
      .get(urls.API_GET_VENDOR)
      .then((res) => {
        const { success, vendors } = res.data;

        if (success) {
          dispatch(storeVendor(vendors));
        }
      })
      .catch((err) => {
        console.log('err', err.response.data);
      });
  }, []);

  const handleSubmit = async (values, helpers) => {
    console.log('post', values);

    helpers.setSubmitting(true);

    await axiosClient
      .post(urls.API_BUS, values)
      .then((res) => {
        console.log('response', res);

        const { success, bus } = res.data;

        if (success) {
          dispatch(addBus(bus));

          Toast.success('Bus has been added successfully');

          helpers.resetForm();
        }
      })
      .catch((err) => {
        console.log('bus err', err.response.data);
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
            validationSchema={_busStoreValidation}
          >
            {({ isSubmitting, values, setFieldValue, handleChange }) => (
              <Form>
                <Grid container spacing={3}>
                  <Grid item xs={6} md={6}>
                    <FormikControl
                      control="input"
                      type="text"
                      label="Bus Name"
                      name="name"
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <FormikControl
                      control="input"
                      type="text"
                      label="Bus Number"
                      name="bus_number"
                    />
                  </Grid>
                  <Grid item xs={6} md={2}>
                    <FormikControl
                      control="input"
                      type="number"
                      label="Max rows"
                      name="max_row"
                    />
                  </Grid>
                  <Grid item xs={6} md={2}>
                    <FormikControl
                      control="input"
                      type="number"
                      placeholder="."
                      label="Max columns"
                      name="max_col"
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <FormikControl
                      control="select"
                      options={vendors}
                      defaultSelect="Select vendor"
                      placeholder="."
                      label="Select vendor"
                      name="vendor_id"
                      value={values.vendor_id}
                      onChange={(value) =>
                        setFieldValue('vendor_id', value.target.value)
                      }
                    />
                  </Grid>

                  <Grid item xs={6} md={6}></Grid>
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
