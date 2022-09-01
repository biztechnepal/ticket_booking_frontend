import PageHeader from 'src/content/Dashboards/Statistics/PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import { Grid } from '@mui/material';

import Block1 from 'src/content/Dashboards/Statistics/Block1';
import Block2 from 'src/content/Dashboards/Statistics/Block2';
import Block3 from 'src/content/Dashboards/Statistics/Block3';
import Block5 from 'src/content/Dashboards/Statistics/Block5';


function DashboardStatisticsContent() {
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
        <Grid item xs={12} md={7}>
          <Block1 />
        </Grid>
        <Grid item xs={12} md={5}>
          <Block2 />
        </Grid>
        <Grid item xs={12} md={6}>
          <Block3 />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
          >
           
            <Grid item xs={12}>
              <Block5 />
            </Grid>
          </Grid>
        </Grid>
      
      </Grid>
      <Footer />
    </>
  );
}

export default DashboardStatisticsContent;
