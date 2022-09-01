import React from 'react'
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

function ManagementBlogsDetail() {
    return (
        <div>
            <h1>Blogs Single Detail</h1>
        </div>
    )
}
ManagementBlogsDetail.getLayout = (page) => (
    <Authenticated>
        <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
    </Authenticated>
);
export const getServerSideProps  = async ({ req,query }) => {
    return {
        props: {
            title: "Blogs Detail",
        },
    }
  }
  
export default ManagementBlogsDetail
