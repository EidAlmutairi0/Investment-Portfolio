import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChar = () => {
  const dates = [];
  const maraker = {};
  const prices = [10, 41, 35, 51, 49, 62, 69, 91, 148, 77];

  const data = {
    series: [
      {
        data: prices,
      },
    ],

    options: {
      xaxis: {
        axisBorder: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      grid: {
        show: false,
      },

      markers: {
        discrete: [
          {
            seriesIndex: 0,
            dataPointIndex: prices.length - 1,
            fillColor: "blue",
            strokeColor: "#fff",
            size: 10,
            shape: "circle", // "circle" | "square" | "rect"
          },
        ],
      },
      chart: {
        height: 350,
        type: "line",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 6,
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: [],
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
            type="line"
            width="500"
          />
        </div>
      </div>
    </div>
  );
};

export default LineChar;
