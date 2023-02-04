import Layout from "../../components/Dashboard/Layout";
import NotAvailable from "../../components/Dashboard/NotAvailable";

const footprint = () => {
  return (
    <Layout title="My sensor" showSearch={false}>
      <NotAvailable />
    </Layout>
  );
};

export default footprint;
