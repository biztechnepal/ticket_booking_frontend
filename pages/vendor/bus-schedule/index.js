import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

import PageHeader from 'src/content/Vendor/bus-schedule/PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid } from '@mui/material';

import BusScheduleTable from 'src/content/Vendor/bus-schedule/BusScheduleTable';

function BusVendorView() {
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
          <BusScheduleTable />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

BusVendorView.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default BusVendorView;
export const getStaticProps = ({ req, query }) => {
  return {
    props: {
      title: 'Bus list'
    }
  };
};
