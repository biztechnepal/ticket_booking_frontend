import { useState } from 'react';
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

import Head from 'next/head';
import PageHeader from 'src/_partials/PageHeader'
import CategoryAdd from 'src/content/Management/category/CategoryAdd';
import {
  Box,
  Drawer,
  Grid,
  Hidden,
  useTheme,
  IconButton,
  styled
} from '@mui/material';
import { Container } from 'react-bootstrap';
const pageHeaderItem={
  title:"Category / Sub Category",
  subTitle:"",
  href:"/management/commerce/category",
  linkName:"View Category"
}
function ManagementCategoryCreate() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Head>
        <title>Create Category</title>
      </Head>
      <Container>
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
                <PageHeader page={pageHeaderItem} />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <CategoryAdd />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

ManagementCategoryCreate.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default ManagementCategoryCreate;
