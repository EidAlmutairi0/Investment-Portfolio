import { signal } from "@preact/signals-react";
import _ from "lodash";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const LineChar = (props) => {
  const prices = [
    {
      date: "2021-09-01",
      price: 100,
    },
    {
      date: "2021-09-02",
      price: 200,
    },
    {
      date: "2021-09-03",
      price: 70,
    },
    {
      date: "2021-09-04",
      price: 53,
    },
    {
      date: "2021-09-05",
      price: 86,
    },
    {
      date: "2021-09-06",
      price: 100,
    },
    {
      date: "2021-09-07",
      price: 200,
    },
    {
      date: "2021-09-08",
      price: 70,
    },
    {
      date: "2021-09-09",
      price: 53,
    },
    {
      date: "2021-09-10",
      price: 86,
    },
    {
      date: "2021-09-01",
      price: 100,
    },
    {
      date: "2021-09-02",
      price: 200,
    },
    {
      date: "2021-09-03",
      price: 70,
    },
    {
      date: "2021-09-04",
      price: 53,
    },
    {
      date: "2021-09-05",
      price: 86,
    },
    {
      date: "2021-09-06",
      price: 100,
    },
    {
      date: "2021-09-07",
      price: 200,
    },
    {
      date: "2021-09-01",
      price: 100,
    },
    {
      date: "2021-09-02",
      price: 200,
    },
    {
      date: "2021-09-03",
      price: 70,
    },
    {
      date: "2021-09-04",
      price: 53,
    },
    {
      date: "2021-09-05",
      price: 86,
    },
    {
      date: "2021-09-06",
      price: 100,
    },
    {
      date: "2021-09-07",
      price: 200,
    },
    {
      date: "2021-09-01",
      price: 100,
    },
    {
      date: "2021-09-02",
      price: 200,
    },
    {
      date: "2021-09-03",
      price: 70,
    },
    {
      date: "2021-09-04",
      price: 53,
    },
    {
      date: "2021-09-05",
      price: 86,
    },
    {
      date: "2021-09-06",
      price: 100,
    },
    {
      date: "2021-09-07",
      price: 200,
    },
    {
      date: "2021-09-01",
      price: 100,
    },
    {
      date: "2021-09-02",
      price: 200,
    },
    {
      date: "2021-09-03",
      price: 70,
    },
    {
      date: "2021-09-04",
      price: 53,
    },
    {
      date: "2021-09-05",
      price: 86,
    },
    {
      date: "2021-09-06",
      price: 100,
    },
    {
      date: "2021-09-07",
      price: 200,
    },
    {
      date: "2021-09-01",
      price: 100,
    },
    {
      date: "2021-09-02",
      price: 200,
    },
    {
      date: "2021-09-03",
      price: 70,
    },
    {
      date: "2021-09-04",
      price: 53,
    },
    {
      date: "2021-09-05",
      price: 86,
    },
    {
      date: "2021-09-06",
      price: 100,
    },
    {
      date: "2021-09-07",
      price: 200,
    },
    {
      date: "2021-09-01",
      price: 100,
    },
    {
      date: "2021-09-02",
      price: 200,
    },
    {
      date: "2021-09-03",
      price: 70,
    },
    {
      date: "2021-09-04",
      price: 53,
    },
    {
      date: "2021-09-05",
      price: 86,
    },
    {
      date: "2021-09-06",
      price: 100,
    },
    {
      date: "2021-09-07",
      price: 200,
    },
    {
      date: "2021-09-01",
      price: 100,
    },
    {
      date: "2021-09-02",
      price: 200,
    },
    {
      date: "2021-09-03",
      price: 70,
    },
    {
      date: "2021-09-04",
      price: 53,
    },
    {
      date: "2021-09-05",
      price: 86,
    },
    {
      date: "2021-09-06",
      price: 100,
    },
    {
      date: "2021-09-07",
      price: 200,
    },
    {
      date: "2021-09-01",
      price: 100,
    },
    {
      date: "2021-09-02",
      price: 200,
    },
    {
      date: "2021-09-03",
      price: 70,
    },
    {
      date: "2021-09-04",
      price: 53,
    },
    {
      date: "2021-09-05",
      price: 86,
    },
    {
      date: "2021-09-06",
      price: 100,
    },
    {
      date: "2021-09-07",
      price: 200,
    },
    {
      date: "2021-09-01",
      price: 100,
    },
    {
      date: "2021-09-02",
      price: 200,
    },
    {
      date: "2021-09-03",
      price: 70,
    },
    {
      date: "2021-09-04",
      price: 53,
    },
    {
      date: "2021-09-05",
      price: 86,
    },
    {
      date: "2021-09-06",
      price: 100,
    },
    {
      date: "2021-09-30",
      price: 500,
    },
  ];

  const selectedPrice = signal(prices[prices.length - 1].price);
  const selectedDate = signal(prices[prices.length - 1].date);
  const selectedIndex = signal(prices.length - 1);

  const [selectedRange, setSelectedRange] = useState(7);

  const data = {
    series: [
      {
        data: _.takeRight(prices, selectedRange).map((price) => price.price),
      },
    ],

    options: {
      tooltip: {
        enabled: true,
        enabledOnSeries: undefined,
        shared: true,
        followCursor: true,
        intersect: false,
        inverseOrder: false,
        fillSeriesColor: true,
        theme: false,
        style: {
          fontSize: "12px",
        },
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return (
            '<div class="arrow_box bg-white p-2 font-serif font-bold">' +
            "<span>" +
            prices[prices.length - (selectedRange - dataPointIndex)].date +
            "</span>" +
            "</div>"
          );
        },
        onDatasetHover: {
          highlightDataSeries: false,
        },
        x: {
          show: false,
        },
        y: {},
        z: {
          show: false,
        },
        marker: {
          show: false,
        },
        items: {
          display: "flex",
        },
        fixed: {
          enabled: false,
          position: "topRight",
          offsetX: 0,
          offsetY: 0,
        },
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
        tooltip: {
          enabled: false,
          formatter: (value, indexObj) => {
            selectedPrice.value =
              prices[
                prices.length - (selectedRange - indexObj.dataPointIndex)
              ].price;
            selectedDate.value =
              prices[
                prices.length - (selectedRange - indexObj.dataPointIndex)
              ].date;
            selectedIndex.value = indexObj.dataPointIndex;
            return;
          },
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
            dataPointIndex: _.takeRight(prices, selectedRange).length - 1,
            fillColor: "blue",
            strokeColor: "blue",
            size: 10,
            shape: "circle", // "circle" | "square" | "rect",
          },
          {
            seriesIndex: 0,
            dataPointIndex: selectedIndex,
            fillColor: "red",
            strokeColor: "blue",
            size: 10,
            shape: "circle", // "circle" | "square" | "rect"
          },
        ],
      },
      chart: {
        parentHeightOffset: 0,
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
            speed: 500,
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
      <div className="flex flex-col font-ibmsans ">
        <div className="text-lg">قيمة المحفظة</div>
        <div className="flex flex-rows gap-1">
          <div className=" text-3xl font-medium">{selectedPrice}</div>
          <div className="flex justify-end  items-end">ريال</div>
        </div>
        <div className="mixed-chart ">
          <ReactApexChart
            options={data.options}
            series={data.series}
            type="line"
            width="500"
          />
          <div className="w-full h-12  flex flex-row p-1 gap-3">
            <Range
              range="أسبوع"
              rangeNum={7}
              setSelectedRange={setSelectedRange}
              selectedRange={selectedRange}
            />
            <Range
              range="شهر"
              rangeNum={14}
              setSelectedRange={setSelectedRange}
              selectedRange={selectedRange}
            />
            <Range
              range="سنة"
              rangeNum={360}
              setSelectedRange={setSelectedRange}
              selectedRange={selectedRange}
            />
            <Range
              range="الكل"
              rangeNum={prices.length}
              setSelectedRange={setSelectedRange}
              selectedRange={selectedRange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineChar;

const Range = (props) => {
  return (
    <div
      className={`flex flex-1  h-full border-2 rounded-md  border-blue-700 cursor-pointer hover:bg-blue-700 hover:text-white transition-all ${
        props.selectedRange === props.rangeNum && " bg-blue-700 text-white"
      } `}
      onClick={() => {
        props.setSelectedRange(props.rangeNum);
        console.log(props.rangeNum);
      }}
    >
      <div className="flex flex-1 justify-center items-center font-ibmsans ">
        {props.range}
      </div>
    </div>
  );
};
