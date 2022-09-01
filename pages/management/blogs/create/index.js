import React from 'react'
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

function ManagementBlogCreate() {
    return (
        <h1>
            Create Blogs
        </h1>
    )
}

ManagementBlogCreate.getLayout = (page) => (
    <Authenticated>
        <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
    </Authenticated>
);

export default ManagementBlogCreate;
export const getServerSideProps = async ({ req, query }) => {
    return {
        props: {
            title: "Blogs",
        },
    }
}
