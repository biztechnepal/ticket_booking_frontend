import Head from 'next/head';
import Router from 'next/router';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import ThemeProvider from 'src/theme/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from 'src/createEmotionCache';
import { appWithTranslation } from 'next-i18next';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import 'src/utils/chart';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from 'src/store';
import Loader from 'src/components/Loader';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import useScrollTop from 'src/hooks/useScrollTop';
import { AuthConsumer, AuthProvider } from 'src/contexts/ApiAuthContext';
import TitleLayout from 'src/layouts/TitleLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, Slide, Zoom, Flip, Bounce } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  useScrollTop();

  Router.events.on('routeChangeStart', nProgress.start);
  Router.events.on('routeChangeError', nProgress.done);
  Router.events.on('routeChangeComplete', nProgress.done);

  return (
    <CacheProvider value={emotionCache}>
      <ToastContainer limit={1} transition={Slide} role="alert" autoClose={1500} closeButton={false} />
      <ReduxProvider store={store}>
        <SidebarProvider>
          <ThemeProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <AuthProvider>
                <CssBaseline />
                <TitleLayout title={pageProps.title}>
                  <AuthConsumer>
                    {
                      (auth) =>
                        auth.isInitialized && getLayout(<Component {...pageProps} />
                        )
                    }
                  </AuthConsumer>
                </TitleLayout>
              </AuthProvider>
            </LocalizationProvider>
          </ThemeProvider>
        </SidebarProvider>
      </ReduxProvider>
    </CacheProvider>
  );
}

export default MyApp;
