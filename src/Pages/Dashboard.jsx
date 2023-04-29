import React from "react";
import { Chart } from "react-google-charts";
import StockList from "../components/StockList";

const Dashboard = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  const options = {
    title: "المحفظة الحالية:",
    fontName: "Cairo",
    titleTextStyle: {
      position: "right",
      color: "red",
      fontName: "",
      fontSize: 14,
      bold: true,
      position: "bottom",
      alignment: "start",
      dir: "rtl",
    },
    legend: {
      position: "left",
      textStyle: { color: "blue", fontSize: 16 },
    },
  };
  return (
    <div
      className="w-full h-screen bg-white my-10 rounded-lg  flex-col  flex"
      dir="rtl"
    >
      <div className=" justify-center items-center mx-auto gap-5  w-[100%] flex sm:flex-row flex-col">
        <div className=" sm:w-1/3 w-full  flex flex-col bg-green-500 h-[100%] justify-center gap-10">
          <h1 className="text-center font-cairo text-2xl font-bold text-primary ">
            اداء محفظتك هو :
          </h1>
          <h1 className="text-center font-cairo text-6xl font-bold   ">7.2%</h1>
        </div>
        <div className=" sm:w-1/3 w-full h-[400px] bg-red-200 rounded-lg">
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
          />
        </div>
        <div className=" sm:w-1/3 w-full  bg-red-300 rounded-lg"></div>
      </div>
      <StockList />
    </div>
  );
};

export default Dashboard;
