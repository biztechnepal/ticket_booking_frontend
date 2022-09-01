import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

import DashboardProductsContent from 'src/content/DashboardPages/products';

function DashboardProducts() {
  return (
    <>
      <DashboardProductsContent />
    </>
  );
}

DashboardProducts.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export const getStaticProps = async ({ req, query }) => {
  return {
    props: {
      title: 'Prooducts'
    }
  };
};
export default DashboardProducts;
