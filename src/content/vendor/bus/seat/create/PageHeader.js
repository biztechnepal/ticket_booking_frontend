import { useTranslation } from 'react-i18next';
import Link from 'src/components/Link';

import { Grid, Typography, Button } from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useSelector } from 'react-redux';
import axiosClient from 'src/utils/axios-client';
import urls from 'src/utils/urls';

function PageHeader() {
  const { t } = useTranslation();

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {t('Seat planning')}
        </Typography>
        <Typography variant="subtitle2">
          {t('At least on seat needs to be selected to create seat of the bus')}
        </Typography>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}

export default PageHeader;
