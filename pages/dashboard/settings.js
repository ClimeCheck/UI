import Settings from "../../components/Dashboard/DashboardSettings";
import Layout from "../../components/Dashboard/Layout";

const settings = () => {
  return (
    <Layout title="My sensor" showSearch={false}>
      <Settings />
    </Layout>
  );
};

export default settings;
