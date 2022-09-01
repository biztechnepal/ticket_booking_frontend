import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

import PageHeader from 'src/content/Management/bus/PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid } from '@mui/material';

import CustomerTable from 'src/content/Management/customer/CustomerTable';

import BusTable from 'src/content/Management/bus/BusTable';

function BusView() {
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
          <BusTable />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

BusView.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default BusView;
export const getStaticProps = ({ req, query }) => {
  return {
    props: {
      title: 'Customers information'
    }
  };
};
