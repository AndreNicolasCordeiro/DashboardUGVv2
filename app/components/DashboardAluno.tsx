"use client";

import { FaHome, FaUser, FaCog, FaArrowLeft } from "react-icons/fa";

import { useSession } from "next-auth/react";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Scatter } from "react-chartjs-2";

import { Chart, ArcElement, registerables } from "chart.js";

Chart.register(...registerables, ArcElement);

const DashboardAluno: React.FC = () => {
  const { data: session } = useSession();

  if (!session) {
    return <p className="text-white">Loading...</p>;
  }

  const data = {
    labels: [
      "Complementares",
      "Sociais",
      "Sociais Faltante",
      "Complementares Faltante",
    ],
    datasets: [
      {
        label: "Horas Totais",
        data: [50, 20, 68, 182],
        backgroundColor: ["#FFc300", "#FF0000", "#00FF00", "#0000FF"],
        hoverOffset: 2,
        maintainAspectRatio: false,
      },
    ],
  };

  const data2 = {
    labels: ["Point 1", "Point 2", "Point 3", "Point 4"],
    datasets: [
      {
        label: "Programação",
        data: [
          { x: 0, y: 10 },
          { x: 1, y: 8 },
          { x: 2, y: 7 },
          { x: 3, y: 9 },
        ],
        backgroundColor: "#7A0FD1",
        borderColor: "#7A0FD1",
        borderWidth: 2,
        pointStyle: "triangle",
        showLine: true,
      },
      {
        label: "Redes",
        data: [
          { x: 0, y: 5 },
          { x: 1, y: 8 },
          { x: 2, y: 2 },
          { x: 3, y: 10 },
        ],
        backgroundColor: "#0FD17A",
        borderColor: "#0FD17A",
        borderWidth: 2,
        pointStyle: "rectRot",
        showLine: true,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
      },
      y: {
        type: "linear",
        position: "left",
      },
    },
  } as const;

  return (
    <>
      <div className="w-[98vw]">
        <div className="p-7">
          <h4 className="text-white text-lg font-semibold">
            <span className="text-white">Dashboard /</span> Início
          </h4>
          <h1 className="text-2xl font-semibold text-white">
            <span className="text-2xl font-light text-white">
              Bem-vindo,&nbsp;
            </span>
            {session.user.name}
          </h1>
        </div>

        <div className="grid grid-cols-4 gap-[1rem] px-7">
          <div className="border-rem border-custom-gray rounded-lg w-[100%] h-[9rem] flex flex-col justify-center items-center items-left px-5">
            <div className="inline-block text-left">
              <div className="flex gap-[5rem]">
                <div>
                  <p className="text-white text-sm font-medium">Notas</p>
                  <h4 className="text-2xl font-bold tracking-tight text-white pt-3">
                    +50%
                  </h4>
                  <p className="text-white text-xs">
                    +20% comparado ao bimestre anterior
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-white"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
            </div>
          </div>
          <div className="border-rem border-custom-gray rounded-lg w-[100%] h-[9rem] flex flex-col justify-center items-center items-left px-5">
            <div className="inline-block text-left">
              <div className="flex gap-[5rem]">
                <div>
                  <p className="text-white text-sm font-medium">Faltas</p>
                  <h4 className="text-2xl font-bold tracking-tight text-white pt-3">
                    35
                  </h4>
                  <p className="text-white text-xs">
                    -20% comparado ao bimestre anterior
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-white"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
            </div>
          </div>
          <div className="border-rem border-custom-gray rounded-lg w-[100%] h-[9rem] flex flex-col justify-center items-center items-left px-5">
            <div className="inline-block text-left">
              <div className="flex gap-[5rem]">
                <div>
                  <p className="text-white text-sm font-medium">presenças</p>
                  <h4 className="text-2xl font-bold tracking-tight text-white pt-3">
                    +80%
                  </h4>
                  <p className="text-white text-xs">
                    +95% comparado ao bimestre anterior
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-white"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
            </div>
          </div>
          <div className="border-rem border-custom-gray rounded-lg w-[100%] h-[9rem] flex flex-col justify-center items-center items-left px-5">
            <div className="inline-block text-left">
              <div className="flex gap-[5rem]">
                <div>
                  <p className="text-white text-sm font-medium">Eventos</p>
                  <h4 className="text-2xl font-bold tracking-tight text-white pt-3">
                    2
                  </h4>
                  <p className="text-white text-xs">
                    eventos próximos: "Final de ano"
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-white"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[1rem] py-7 px-7">
          <div className="border-rem border-custom-gray rounded-lg w-[100%] h-[24rem] flex items-center justify-center">
            <div className="w-[68%] h-[98%]">
              <Pie data={data} className="w-2/4" />
            </div>
          </div>
          <div className="border-rem border-custom-gray rounded-lg w-[100%] h-[24rem] flex items-center justify-center">
            <div className="w-[98%]">
              <Scatter data={data2} options={options} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardAluno;
