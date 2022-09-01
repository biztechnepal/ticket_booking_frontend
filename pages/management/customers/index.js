import { useState, useEffect, useCallback } from 'react';

import Head from 'next/head';

import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

import PageHeader from 'src/content/Management/customer/PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid } from '@mui/material';

import CustomerTable from 'src/content/Management/customer/CustomerTable';

function CustomerView() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Grid
        sx={{ px: 4 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12}>
          <CustomerTable />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

CustomerView.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default CustomerView;
export const getStaticProps = ({ req, query }) => {
  return {
    props: {
      title: 'Customers information'
    }
  };
};
