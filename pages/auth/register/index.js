import {
  Alert, Box,
  Card, Container, styled, Tooltip,
  Typography
} from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { Guest } from 'src/components/Guest';
import Link from 'src/components/Link';
import Logo from 'src/components/LogoSign';
import { RegisterJWT } from 'src/content/Auth/Register/RegisterJWT';
import { useAuth } from 'src/hooks/useAuth';
import BaseLayout from 'src/layouts/BaseLayout';

const icons = {
  Auth0: '/static/images/logo/auth0.svg',
  FirebaseAuth: '/static/images/logo/firebase.svg',
  JWT: '/static/images/logo/jwt.svg',
  Amplify: '/static/images/logo/amplify.svg'
};

const CardImg = styled(Card)(
  ({ theme }) => `
    width: 90px;
    height: 80px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: ${theme.colors.alpha.white[100]};
    margin: 0 ${theme.spacing(1)};
    border: 1px solid ${theme.colors.alpha.black[10]};
    transition: ${theme.transitions.create(['all'])};

    &:hover {
      border-color: ${theme.colors.primary.main};
    }
`
);
const BottomWrapper = styled(Box)(
  ({ theme }) => `
    padding: ${theme.spacing(3)};
    display: flex;
    align-items: center;
    justify-content: center;
`
);

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

function RegisterBasic() {
  const { method } = useAuth();
  const { t } = useTranslation();

  const router = useRouter();
  const { demo } = router.query;

  return (
    <>
      <Head>
        <title>Register - Basic</title>
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
                  {t('Create account')}
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                  sx={{
                    mb: 3
                  }}
                >
                  {t('Fill in the fields below to sign up for an account.')}
                </Typography>
              </Box>
              <RegisterJWT />
              <Box mt={4}>
                <Typography
                  component="span"
                  variant="subtitle2"
                  color="text.primary"
                  fontWeight="bold"
                >
                  {t('Already have an account?')}
                </Typography>{' '}
                <Link
                  href={
                    demo
                      ? `/auth/login?demo=${demo}`
                      : '/auth/login'
                  }
                >
                  <b>Sign in here</b>
                </Link>
              </Box>
            </Card>
            <BottomWrapper>
              <Box mb={3}>
                <Tooltip arrow placement="top" title="Auth0">
                  <CardImg>
                    <img height={50} alt="Auth0" src={icons['Auth0']} />
                  </CardImg>
                </Tooltip>
                <Tooltip arrow placement="top" title="Firebase">
                  <CardImg>
                    <img
                      height={50}
                      alt="Firebase"
                      src={icons['FirebaseAuth']}
                    />
                  </CardImg>
                </Tooltip>
                <Tooltip arrow placement="top" title="JSON Web Token">
                  <CardImg>
                    <img height={50} alt="JSON Web Token" src={icons['JWT']} />
                  </CardImg>
                </Tooltip>
                <Tooltip arrow placement="top" title="Amplify">
                  <CardImg>
                    <img height={50} alt="Amplify" src={icons['Amplify']} />
                  </CardImg>
                </Tooltip>
              </Box>
            </BottomWrapper>
            <Alert severity="warning">
              {t(
                'Learn how to switch between auth methods by reading the section we???ve prepared in the documentation.'
              )}
            </Alert>
          </Container>
        </TopWrapper>
      </MainContent>
    </>
  );
}

RegisterBasic.getLayout = (page) => (
  <Guest>
    <BaseLayout>{page}</BaseLayout>
  </Guest>
);

export default RegisterBasic;
