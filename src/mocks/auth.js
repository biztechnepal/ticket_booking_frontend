import { wait } from 'src/utils/wait';
import axiosClient from 'src/utils/axios-client';
import urls from 'src/utils/urls';
import storage from 'src/utils/storage';
import Toast from 'src/_partials/toast';

class AuthApi {
  async login({ username, password, helpers }) {
    // await wait(500);
    return new Promise((resolve, reject) => {
      try {
        axiosClient
          .post(urls.API_LOGIN, { email: username, password })
          .then((result) => {
            if (result.status === 200) {
              helpers.setSubmitting(false);
              const token = result.data.token;
              Toast.success('Login Done. Redirecting to dashboard. . .');
              storage.setCookies('_user', result.data.user);
              storage.setCookies('_autht', token);
              resolve(token);
            } else {
              helpers.setSubmitting(false);
              Toast.error('Login Failed. Re-check the credential.');
            }
          })
          .catch((err) => {
            console.log('err', err);
            reject(new Error(err));
          })
          .finally(() => {});
      } catch (err) {
        console.error(err);
        reject(new Error('Internal server error'));
      }
    });
  }

  async register({ email, name, password }) {
    await wait(1000);

    return new Promise((resolve, reject) => {
      try {
      } catch (err) {
        console.error(err);
        reject(new Error('Internal server error'));
      }
    });
  }

  me(accessToken) {
    return new Promise((resolve, reject) => {
      try {
        const user = storage.getUserFromCookies('_user');
        resolve({
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.roles,
          token: accessToken
        });
      } catch (err) {
        console.error(err);
        reject(new Error('Internal server error'));
      }
    });
  }
}

export const authApi = new AuthApi();
