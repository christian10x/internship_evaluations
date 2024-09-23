import { useState } from "react";
import Chart from "react-apexcharts";

const Apexchart = ({ attendance }) => {
  const values = [
    attendance?.attended || 0,
    attendance?.not_attended || 0,
    attendance?.pending || 0,
    attendance?.blank || 0,
  ];

  const [options] = useState({
    series: values,
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Asistió", "No asistió", "Pendiente", "Sin registro"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <Chart
      options={options.options}
      series={options.series}
      type="pie"
      width={400}
      height={320}
    />
  );
};

export default Apexchart;
