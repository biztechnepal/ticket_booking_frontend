import React, { useEffect, useState } from 'react';
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';

import { Authenticated } from 'src/components/Authenticated';
import Head from 'next/head';
import PageHeader from 'src/content/Vendor/bus/update/PageHeader';
import { Box, Grid } from '@mui/material';

import UpdateSection from 'src/content/Vendor/bus/update/UpdateSection';
import { useRouter } from 'next/router';
import axiosClient from 'src/utils/axios-client';
import urls from 'src/utils/urls';

const UpdateBus = () => {
  const router = useRouter();

  const { _id } = router.query;

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    setLoading(true);

    axiosClient
      .get(urls.API_BUS + `/${_id}`)
      .then((res) => {
        const { success, bus } = res.data;

        if (success) {
          setItem(bus);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log('err', err.response.data);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Update bus data</title>
      </Head>
      <Box mb={3} display="flex">
        <Grid
          sx={{ px: 4 }}
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Box
              mt={3}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <PageHeader />
            </Box>
          </Grid>
          <Grid item xs={12}>
            {loading ? null : <UpdateSection item={item} _id={_id} />}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

UpdateBus.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default UpdateBus;
