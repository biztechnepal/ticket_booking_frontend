import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
export const Authenticated = (props) => {
  const { children } = props;
  const router = useRouter();
  const [verified, setVerified] = useState(false);
  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    const token = localStorage.getItem('token');
    if (!token) {
      router.push({
        pathname: '/',
        query: { backTo: router.asPath }
      });
    } else {
      setVerified(true);
    }
  }, [router.isReady]);

  if (!verified) {
    return null;
  }

  return <>{children}</>;
};

Authenticated.propTypes = {
  children: PropTypes.node
};
