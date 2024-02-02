import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useContext } from "react";
import { Pie } from "react-chartjs-2";
import CryptoContext from "../../context/crypto-context";

ChartJS.register(ArcElement, Tooltip, Legend);

const PortfolioChart = () => {
  const { assets } = useContext(CryptoContext);
  const data = {
    labels: assets.map((asset) => asset.name),
    datasets: [
      {
        label: "# of Votes",
        data: assets.map((asset) => asset.totalAmount),
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "1rem",
        justifyContent: "center",
        height: "60%",
      }}
    >
      <Pie data={data} />
    </div>
  );
};

export default PortfolioChart;
