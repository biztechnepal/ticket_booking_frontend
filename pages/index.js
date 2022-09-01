import {
  Alert,
  Box,
  Card,
  Container,
  styled,
  Tooltip,
  Typography
} from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { Guest } from 'src/components/Guest';
import Link from 'src/components/Link';
import Logo from 'src/components/LogoSign';
import { LoginJWT } from 'src/content/Auth/Login/LoginJWT';
import { useAuth } from 'src/hooks/useAuth';
import BaseLayout from 'src/layouts/BaseLayout';

const MainContent = styled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
`
);

const TopWrapper = styled(Box)(
  () => `
  display: flex;
  width: 100%;
  flex: 1;
  padding: 20px;
`
);

function LoginBasic() {
  const { method } = useAuth();
  const { t } = useTranslation();
  const router = useRouter();
  const { demo } = router.query;

  return (
    <>
      <Head>
        <title>Login </title>
      </Head>
      <MainContent>
        <TopWrapper>
          <Container maxWidth="sm">
            <Logo />
            <Card
              sx={{
                mt: 3,
                px: 4,
                pt: 5,
                pb: 3
              }}
            >
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    mb: 1
                  }}
                >
                  {t('Sign in')}
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                  sx={{
                    mb: 3
                  }}
                >
                  {t('Fill in the fields below to sign into your account.')}
                </Typography>
              </Box>
              <LoginJWT />
              <Box my={4}>
                <Typography
                  component="span"
                  variant="subtitle2"
                  color="text.primary"
                  fontWeight="bold"
                >
                  {t('Don’t have an account, yet?')}
                </Typography>{' '}
                <Link
                  href={demo ? `/auth/register?demo=${demo}` : '/auth/register'}
                >
                  <b>Sign up here</b>
                </Link>
              </Box>
              <Box my={4}>
                <Link href={'admin'}>
                  <b>Click here to login as vendor</b>
                </Link>
              </Box>

              <Alert severity="error">
                {t(
                  'Learn how to switch between auth methods by reading the section we’ve prepared in the documentation.'
                )}
              </Alert>
            </Card>
          </Container>
        </TopWrapper>
      </MainContent>
    </>
  );
}

LoginBasic.getLayout = (page) => (
  <Guest>
    <BaseLayout>{page}</BaseLayout>
  </Guest>
);

export default LoginBasic;
