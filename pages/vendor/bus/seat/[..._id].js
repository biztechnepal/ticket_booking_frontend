import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

import Head from 'next/head';
import PageHeader from 'src/content/vendor/bus/seat/create/PageHeader';
import { Box, Grid, styled } from '@mui/material';

import { seatMap } from '../../../../src/misc/seats';

import Deck from '../../../../src/content/vendor/bus/seat/Deck';
import { useRouter } from 'next/router';

const MainContentWrapper = styled(Box)(
  () => `
   flex-grow: 1
`
);

function SeatPlanning() {
  const router = useRouter();

  const { _id } = router.query;

  return (
    <>
      <Head>
        <title>Seating planning</title>
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
            <Grid
              item
              xs={6}
              style={{
                position: 'relative',
                display: 'flex',
                marginTop: 50
              }}
            >
              <Deck _id={_id} mode="Editable" />
            </Grid>
          </Grid>
        </MainContentWrapper>
      </Box>
    </>
  );
}

SeatPlanning.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default SeatPlanning;
