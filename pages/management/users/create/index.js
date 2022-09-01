import React from 'react';
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

import styles from '../../../../styles/CreateVendor.module.css';

function ManagementUsersCreate() {
  return (
    <div className={styles.container}>
      <h1>Hi</h1>
    </div>
  );
}
ManagementUsersCreate.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);
export const getServerSideProps = async ({ req, query }) => {
  return {
    props: {
      title: 'Add Vendor'
    }
  };
};

export default ManagementUsersCreate;
