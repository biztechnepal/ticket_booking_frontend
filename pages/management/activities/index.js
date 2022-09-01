import React from 'react'
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

function ManagementActivities() {
    return (
        <div>
            <h1>All Activities</h1>
        </div>
    )
}

ManagementActivities.getLayout = (page) => (
    <Authenticated>
        <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
    </Authenticated>
);

export default ManagementActivities;
export const getServerSideProps = async ({ req, query }) => {
    return {
        props: {
            title: "Activities",
        },
    }
}
