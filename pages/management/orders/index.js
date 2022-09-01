import React from 'react'
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

function ManagementOrders() {
    return (
        <h1>
            Orders
        </h1>
    )
}

ManagementOrders.getLayout = (page) => (
    <Authenticated>
        <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
    </Authenticated>
);

export default ManagementOrders;
export const getServerSideProps = async ({ req, query }) => {
    return {
        props: {
            title: "Orders",
        },
    }
}
