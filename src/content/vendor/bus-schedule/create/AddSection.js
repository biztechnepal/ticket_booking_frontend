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
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBus, storeBus } from 'src/slices/bus';
import { storeVendor } from 'src/slices/vendor';

import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';

import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import { addBusSchedule } from 'src/slices/bus_schedule';

function AddSection() {
  const {} = useDropzone({
    accept: 'image/jpeg, image/png'
  });

  const dispatch = useDispatch();

  const initialValues = {
    date: new Date(),
    time: '',
    destination_from: '',
    destination_to: '',
    bus_id: ''
  };

  const [destination, setDestination] = useState([]);
  const [bus, setBus] = useState([]);

  useEffect(async () => {
    await axiosClient
      .get(urls.API_BUS_VENDOR)
      .then((res) => {
        const { success, bus } = res.data;

        if (success) {
          setBus(bus);
        }
      })
      .catch((err) => {
        console.log('err', err.response.data);
      });

    await axiosClient
      .get(urls.API_DESTINATION)
      .then((res) => {
        const { success, destination } = res.data;

        if (success) {
          setDestination(destination);
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
      .post(urls.API_BUS_SCHEDULE + `/${values.bus_id}`, {
        date: dayjs(values.date).format('YYYY-MM-DD'),
        time: dayjs(values.time).format('HH:MM'),
        destination_from: values.destination_from,
        destination_to: values.destination_to
      })
      .then((res) => {
        const { success, bus_schedule } = res.data;

        if (success) {
          Toast.success('Schedule has been added');
          helpers.resetForm();

          dispatch(addBusSchedule(bus_schedule));
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
            //  validationSchema={_busStoreValidation}
          >
            {({ isSubmitting, values, setFieldValue, handleChange }) => (
              <Form>
                <Grid container spacing={3}>
                  <Grid item xs={6} md={6}>
                    {/* <FormikControl
                      control="input"
                      type="text"
                      label="Date"
                      name="date"
                      editable={false}
                      onClick={() => setDateOpen(true)}
                    /> */}
                    <DatePicker
                      label="Select date"
                      minDate={new Date()}
                      value={values.date}
                      onChange={(date) => {
                        setFieldValue('date', date);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <TimePicker
                      clearable
                      label="Select time"
                      value={values.time}
                      onChange={(time) => {
                        setFieldValue('time', time);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Grid>
                  <Grid item xs={5} md={5}>
                    <FormikControl
                      control="select_destination"
                      options={destination}
                      defaultSelect="Select destination from"
                      placeholder="."
                      label="Select destination"
                      name="destination_from"
                      value={values.destination_from}
                      onChange={(value) => {
                        setFieldValue('destination_from', value.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={5} md={5}>
                    <FormikControl
                      control="select_destination"
                      options={destination}
                      defaultSelect="Select destination to"
                      placeholder="."
                      label="Select destination"
                      name="destination_to"
                      value={values.destination_to}
                      onChange={(value) =>
                        setFieldValue('destination_to', value.target.value)
                      }
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <FormikControl
                      control="select"
                      options={bus}
                      defaultSelect="Select bus"
                      placeholder="."
                      label="Select bus"
                      name="bus_id"
                      value={values.bud_id}
                      onChange={(value) =>
                        setFieldValue('bus_id', value.target.value)
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
