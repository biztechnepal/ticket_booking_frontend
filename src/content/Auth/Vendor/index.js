import * as Yup from 'yup';

import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';
import Link from 'src/components/Link';

import {
  Box,
  FormHelperText,
  TextField,
  Checkbox,
  Typography,
  FormControlLabel,
  CircularProgress
} from '@mui/material';
import { useAuth } from 'src/hooks/useAuth';
import { useRefMounted } from 'src/hooks/useRefMounted';
import { useTranslation } from 'react-i18next';
import { Container, Button } from 'react-bootstrap';
import { _loginValidation } from 'src/formik/formValidation';
import FormikControl from 'src/formik/control/FormikControl';
import axiosClient from 'src/utils/axios-client';
import urls from 'src/utils/urls';
export const LoginJWT = (props) => {
  const { t } = useTranslation();
  const { login } = useAuth();
  const isMountedRef = useRefMounted();
  const router = useRouter();
  //   const handleSubmit = async (values, helpers) => {
  //     try {
  //       helpers.setSubmitting(true);
  //       await login(values.email, values.password, helpers);
  //       if (isMountedRef()) {
  //         helpers.setSubmitting(false);
  //         const backTo = router.query.backTo || '/dashboards/reports';
  //         router.push(backTo);
  //         window.location.href = backTo;
  //       }
  //     } catch (err) {
  //       console.error(err);
  //       helpers.setStatus({ success: false });
  //       helpers.setErrors({ submit: err.message });
  //       helpers.setSubmitting(false);
  //     }
  //   };

  const initialValues = {
    email: '',
    password: '',
    terms: true
  };

  const handleSubmit = async (values, helpers) => {
    helpers.setSubmitting(true);

    await axiosClient
      .post(urls.API_LOGIN_VENDOR, values)
      .then((res) => {
        const { success, vendor, token, role } = res.data;
        if (success) {
          localStorage.setItem('token', token);
          localStorage.setItem('vendor', vendor);
          localStorage.setItem('role', role);
          alert(isMountedRef());
          if (isMountedRef()) {
            helpers.setSubmitting(false);

            const backTo = '/dashboards/reports';
            router.push(backTo);
            // window.location.href = '/dashboards/reports';
          }
        }
      })
      .catch((err) => {
        console.log('err', err);
      })
      .finally(() => {
        helpers.setSubmitting(false);
      });
  };

  // const formik = useFormik({
  //   initialValues: {
  //     email: 'demo@example.com',
  //     password: 'TokyoPass1@',
  //     terms: true,
  //     submit: null
  //   },
  //   validationSchema: _formLoginValidation,
  //   onSubmit: async (values, helpers) => {

  //   }
  // });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={_loginValidation}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Container>
            <Form>
              <FormikControl
                control="input"
                type="text"
                label="Email"
                name="email"
                value={formik.values.email}
              />
              <FormikControl
                control="input"
                type="password"
                label="Password"
                name="password"
                value={formik.values.password}
              />

              <Box
                alignItems="center"
                display="flex"
                justifyContent="space-between"
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formik.values.terms}
                      name="terms"
                      color="primary"
                      onChange={formik.handleChange}
                    />
                  }
                  label={
                    <>
                      <Typography variant="body2">
                        {t('I accept the')}{' '}
                        <Link href="#">{t('terms and conditions')}</Link>.
                      </Typography>
                    </>
                  }
                />
                <Link href="/auth/recover-password">
                  <b>{t('Lost password?')}</b>
                </Link>
              </Box>
              <Button
                // disabled={formik.isSubmitting}
                variant="primary"
                type="submit"
              >
                Sign in
              </Button>
            </Form>
          </Container>
        )}
      </Formik>
    </>
  );
};
