import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useQuery } from "@tanstack/react-query";
import { getCountVulByStatusByProject } from "../../services/soc-manager-api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function CountVulStatusDetailsChart({projectId}: {projectId: string}) {
  const { data } = useQuery({
    queryKey: ["fetchStatusByVul"],
    queryFn: async () => {
      const response = await getCountVulByStatusByProject({ projectId: Number(projectId) });
      return response;
    }
  })
  const chartData = {
    labels: data?.data.map((item) => item.statusName),
    datasets: [
      {
        label: "Task Status",
        data: data?.data.map((item) => item.count),
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(54, 162, 235, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 14,
            family: "Arial, sans-serif",
          },
          color: "#333",
        },
      },
      title: {
        display: true,
        text: 'Project Task Status Distribution',
        font: {
          size: 16,
        },
        color: '#333',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 12,
          },
          color: "#555",
        },
        grid: {
          color: "#e0e0e0",
        },
      },
      y: {
        ticks: {
          font: {
            size: 12,
          },
          color: "#555",
        },
        grid: {
          color: "#e0e0e0",
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", maxWidth: "", height: "500px" }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};