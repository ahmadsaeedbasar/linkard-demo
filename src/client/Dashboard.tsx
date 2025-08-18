import React from "react";
import "./Dashboard.css";
import { FaShoppingBag, FaThLarge, FaUser } from "react-icons/fa";
import { HiOutlineFolder } from "react-icons/hi";
import { GiNestedHexagons } from "react-icons/gi";
import { Pie, Line } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale);

const Dashboard: React.FC = () => {
  const pieData = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [30, 30, 40],
        backgroundColor: ["#777", "#000", "#333"],
        borderWidth: 0,
      },
    ],
  };

  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Red Line",
        data: [20, 40, 60, 80, 100, 70, 50],
        borderColor: "rgba(255,0,0,0.8)",
        backgroundColor: "rgba(255,0,0,0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Yellow Line",
        data: [50, 60, 40, 30, 70, 90, 120],
        borderColor: "rgba(255,255,0,0.8)",
        backgroundColor: "rgba(255,255,0,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="logo">
          <img className="hero-logo"
          src="/iconp.png"
          alt="Linkard Logo"
        />
        </div>
      </header>

      {/* Main */}
      <main className="dashboard-main">

        

        {/* Stats Cards */}
        <div className="stats-row">
          <div className="stats-card">
            <h3>Total Projects</h3>
            <Pie data={pieData} />
          </div>
          <div className="stats-card">
            <h3>In Progress</h3>
            <Pie data={pieData} />
          </div>
        </div>

        {/* Graph */}
        <div className="graph-card">
          <h3>Stats</h3>
          <Line data={lineData} />
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <FaShoppingBag />
        <HiOutlineFolder />
        <FaThLarge />
        <GiNestedHexagons />
        <FaUser />
      </nav>
    </div>
  );
};

export default Dashboard;
