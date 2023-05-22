import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChar = () => {
  const dates = [];

  const data = {
    series: [
      {
        data: [
          [1327359600000, 30.95],
          [1327446000000, 31.34],
          [1327532400000, 31.18],
          [1327618800000, 31.05],
          [1327878000000, 31.0],
          [1327964400000, 30.95],
          [1328050800000, 31.24],
          [1328137200000, 31.29],
          [1328223600000, 31.85],

          [1361487600000, 38.55],
          [1361746800000, 38.11],
          [1361833200000, 38.59],
          [1361919600000, 50.6],
        ],
      },
    ],
    options: {
      chart: {
        id: "area",
        type: "area",
        height: 350,
        zoom: {
          autoScaleYaxis: true,
        },
      },

      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
        style: "hollow",
      },
      xaxis: {
        type: "datetime",
        min: new Date("01 Mar 2012").getTime(),
        tickAmount: 6,
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
    },
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <ReactApexChart
            options={data.options}
            series={data.series}
            type="area"
            width="500"
          />
        </div>
      </div>
    </div>
  );
};

export default LineChar;
