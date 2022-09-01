import React from 'react'
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

function ManagementBlogs() {
    return (
        <div>
            <h1>All Blogs</h1>
        </div>
    )
}

ManagementBlogs.getLayout = (page) => (
    <Authenticated>
        <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
    </Authenticated>
);

export default ManagementBlogs;
export const getServerSideProps = async ({ req, query }) => {
    return {
        props: {
            title: "Blogs",
        },
    }
}
