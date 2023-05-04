import React from "react";

import PieChart from "../components/PieChart";

import StockList from "../components/StockList";

const Dashboard = () => {
  const data = [
    {
      id: "VOO",
      value: 5,
    },
    {
      id: "2",
      value: 5,
    },
    {
      id: "3",
      value: 5,
    },
    {
      id: "4",
      value: 5,
    },
    {
      id: "5",
      value: 5,
    },
    {
      id: "6",
      value: 5,
    },
    {
      id: "7",
      value: 5,
    },
    {
      id: "8",
      value: 5,
    },
    {
      id: "9",
      value: 5,
    },
    {
      id: "10",
      value: 5,
    },
    {
      id: "11",
      value: 5,
    },
    {
      id: "12",
      value: 5,
    },
    {
      id: "13",
      value: 5,
    },
    {
      id: "14",
      value: 5,
    },
    {
      id: "15",
      value: 5,
    },
    {
      id: "16",
      value: 5,
    },
    {
      id: "17",
      value: 5,
    },
    {
      id: "18",
      value: 5,
    },
    {
      id: "19",
      value: 5,
    },
    {
      id: "20",
      value: 5,
    },
  ];

  return (
    <div
      className="w-full sm:h-screen bg-white my-10 rounded-lg  flex-col  flex"
      dir="rtl"
    >
      <div className=" justify-center items-center gap-5  w-[100%] flex sm:flex-row flex-col">
        <div className=" sm:w-1/3 w-full  flex flex-col  h-[100%] justify-center gap-10">
          <h1 className="text-center font-cairo text-2xl font-bold text-primary ">
            اداء محفظتك هو :
          </h1>
          <h1 className="text-center font-cairo text-6xl font-bold   ">7.2%</h1>
        </div>
        <div className=" sm:w-1/3 w-full h-[400px] rounded-lg flex flex-col  ">
          <h1 className="text-center font-cairo  text-xl font-bold self-start  px-10 py-5 text-primary ">
            المحفظة الحالية :
          </h1>
          <div className="flex-1  w-full">
            <PieChart data={data}></PieChart>
          </div>
        </div>
        <div className=" sm:w-1/3 w-full h-[400px] rounded-lg flex flex-col  ">
          <h1 className="text-center font-cairo  text-xl font-bold self-start  px-10 py-5 text-primary ">
            المحفظة المتوازنة :
          </h1>
          <div className="flex-1  w-full">
            <PieChart data={data}></PieChart>
          </div>
        </div>
      </div>
      <StockList />
    </div>
  );
};

export default Dashboard;
