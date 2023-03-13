import Layout from "../../components/Dashboard/Layout";
import WalletComp from "../../components/Dashboard/wallet";

const wallet = () => {
  return (
    <Layout title="My Wallet" showSearch={false}>
      <WalletComp />
    </Layout>
  );
};

export default wallet;
