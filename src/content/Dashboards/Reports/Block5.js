import {
  Stack,
  Card,
  Typography,
  Box,
  Divider,
  alpha,
  LinearProgress,
  styled,
  useTheme,
  linearProgressClasses
} from '@mui/material';

import { useTranslation } from 'react-i18next';

const LinearProgressPrimary = styled(LinearProgress)(
  ({ theme }) => `
        height: 8px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.primary.main, 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.primary.main};
        }
    `
);

const LinearProgressError = styled(LinearProgress)(
  ({ theme }) => `
        height: 8px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.error.main, 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.error.main};
        }
    `
);

function Block5() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <>
      <Card style={{}}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          divider={<Divider orientation="vertical" flexItem />}
          justifyContent="space-between"
          alignItems="stretch"
          spacing={0}
        >
          <Box p={2.5} flexGrow={1} flexWrap={'wrap'}>
            <Box
              mb={2}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Typography color="text.primary" variant="h4" gutterBottom>
                  {t('Total buses')}
                </Typography>
                <Typography variant="subtitle2" noWrap></Typography>
              </Box>
              <Typography
                variant="h2"
                sx={{
                  color: `${theme.colors.error.main}`
                }}
              >
                23,594
              </Typography>
            </Box>
          </Box>
          <Box p={2.5} flexGrow={1}>
            <Box
              mb={2}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Typography color="text.primary" variant="h4" gutterBottom>
                  {t('Active bus schedules')}
                </Typography>
                <Typography variant="subtitle2" noWrap></Typography>
              </Box>
              <Typography
                variant="h2"
                sx={{
                  color: `${theme.colors.error.main}`
                }}
              >
                $12,346
              </Typography>
            </Box>
          </Box>
          <Box p={2.5} flexGrow={1} flexWrap={'wrap'}>
            <Box
              mb={2}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Typography color="text.primary" variant="h4" gutterBottom>
                  {t('Active tickets bought')}
                </Typography>
                <Typography variant="subtitle2" noWrap></Typography>
              </Box>
              <Typography
                variant="h2"
                sx={{
                  color: `${theme.colors.error.main}`
                }}
              >
                23,594
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Card>
      {/* <Card style={{ marginTop: 15, paddingTop: 20 }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          divider={<Divider orientation="vertical" flexItem />}
          justifyContent="space-between"
          alignItems="stretch"
          spacing={0}
        >

        </Stack>
      </Card> */}
    </>
  );
}

export default Block5;
