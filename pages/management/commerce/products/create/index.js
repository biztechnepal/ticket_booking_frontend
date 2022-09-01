import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

import Head from 'next/head';
import PageHeader from 'src/content/Management/Commerce/create/PageHeader';
import { Box, Grid, styled } from '@mui/material';
import AddSection from 'src/content/Management/Commerce/create/AddSection';

const MainContentWrapper = styled(Box)(
  () => `
  flex-grow: 1;
`
);

function ManagementProductCreate() {
  return (
    <>
      <Head>
        <title>Create a vendor</title>
      </Head>
      <Box mb={3} display="flex">
        <MainContentWrapper>
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
              <AddSection />
            </Grid>
          </Grid>
        </MainContentWrapper>
      </Box>
    </>
  );
}

ManagementProductCreate.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default ManagementProductCreate;
