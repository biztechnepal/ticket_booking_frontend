import { useState, useEffect, useCallback } from 'react';

import Head from 'next/head';

import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

import PageHeader from 'src/content/Management/Commerce/PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid } from '@mui/material';
import ProductDetails from 'src/content/Management/Commerce/ProductDetails';

function ManagementProducts() {
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
          <ProductDetails />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

ManagementProducts.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default ManagementProducts;
export const getStaticProps = ({ req, query }) => {
  return {
    props: {
      title: 'Product Details'
    }
  };
};
