import React, { useContext } from "react";
import { Layout, Typography } from "antd";
import CryptoContext from "../../context/crypto-context";
import AssetsTable from "./AssetsTable";
import PortfolioChart from "./PortfolioChart";

const contentStyle = {
  textAlign: "center",
  minHeight: "calc(100vh - 60px)",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#001529",
  padding: "1rem",
};

const AppContent = () => {
  const { assets, crypto } = useContext(CryptoContext);

  return (
    <Layout.Content style={contentStyle}>
      <Typography.Title level={3} style={{ color: "white", textAlign: "left" }}>
        Portfolio:
        {assets
          .map((asset) => {
            const coin = crypto.find((c) => c.id === asset.id);
            return asset.amount * coin.price;
          })
          .reduce((acc, v) => (acc += v), 0)
          .toFixed(2)}
        $
      </Typography.Title>
      <PortfolioChart />
      <AssetsTable />
    </Layout.Content>
  );
};

export default AppContent;
