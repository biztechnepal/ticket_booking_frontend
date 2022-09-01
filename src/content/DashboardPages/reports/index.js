import PageHeader from 'src/content/Dashboards/Reports/PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import { Grid } from '@mui/material';

import Block3 from 'src/content/Dashboards/Reports/Block3';
import Block4 from 'src/content/Dashboards/Reports/Block4';
import Block5 from 'src/content/Dashboards/Reports/Block5';
import Block6 from 'src/content/Dashboards/Reports/Block6';
import Block7 from 'src/content/Dashboards/Reports/Block7';
import Block8 from 'src/content/Dashboards/Reports/Block8';
import Block9 from 'src/content/Dashboards/Reports/Block9';
import Block12 from 'src/content/Dashboards/Reports/Block12';
import Block13 from 'src/content/Dashboards/Reports/Block13';

function DashboardReportsContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Grid
        sx={{
          px: 4
        }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
      >
      
        <Grid item xs={12}>
          <Block5 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block6 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block7 />
        </Grid>
        <Grid item md={5} xs={12}>
          <Block8 />
        </Grid>
        <Grid item md={7} xs={12}>
          <Block9 />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default DashboardReportsContent;
