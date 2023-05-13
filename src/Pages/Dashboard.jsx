import React from "react";
import PieChart from "../components/PieChart";

import StockList from "../components/StockList";

const Dashboard = () => {
  const totalValue = 2380;
  const stocks = [
    {
      name: "VOO",
      buyPrice: 100,
      stocksQuantity: 10,
      value: 1000,
    },
    {
      name: "SCHD",
      buyPrice: 90,
      stocksQuantity: 10,
      value: 900,
    },
    {
      name: "ARAMCO",
      buyPrice: 43,
      stocksQuantity: 10,
      value: 430,
    },
    {
      name: "GOOG",
      buyPrice: 50,
      stocksQuantity: 1,
      value: 50,
    },
  ];

  const setData = (stocks) => {
    let data = [];
    stocks.forEach((stock) => {
      data.push({
        id: stock.name,
        label: stock.name,
        value: ((stock.value / totalValue) * 100).toFixed(1),
      });
    });
    return data;
  };

  const data = [
    {
      id: "VOO",
      label: "go",
      value: 5,
    },
    {
      id: "2",
      label: "go",

      value: 5,
    },
    {
      id: "3",
      label: "go",

      value: 5,
    },
  ];

  return (
    <div className="w-full h-[100%]  rounded-xl p-5   flex-col  flex">
      <div className=" justify-center shadow-sm items-center gap-5 bg-[#ffffff] rounded-xl  w-[100%] flex sm:flex-row flex-col">
        <div className=" sm:w-1/3 w-full  flex flex-col sm:[400px] h-[200px]  mx-auto text-center  justify-center px-10 m-auto gap-5">
          <div className="flex flex-row gap-3 justify-between text-start">
            <h1 className=" font-cairo text-xl flex-1  font-bold text-primary    ">
              التكلفة:
            </h1>
            <h1 className=" font-cairo text-2xl flex-1 font-bold  text-primary">
              126350 ريال
            </h1>
          </div>
          <div className="flex flex-row gap-3 justify-between text-start">
            <h1 className=" font-cairo text-xl font-bold flex-1 text-primary ">
              الربح/الخسارة:
            </h1>
            <h1 className=" font-cairo flex text-2xl  flex-1 font-bold  ">
              7.2%
            </h1>
          </div>
          <div className="flex flex-row gap-3 justify-between text-start">
            <h1 className=" font-cairo text-xl font-bold flex-1 text-primary">
              القيمة السوقية:
            </h1>
            <h1 className=" font-cairo text-2xl font-bold flex-1 text-primary">
              126350 ريال
            </h1>
          </div>
        </div>
        <div className="w-[1px] h-[90%] bg-gray-200" />
        <div className=" sm:w-1/3 w-full sm:h-[400px] h-[300px] rounded-lg  flex flex-col  ">
          <h1 className="text-center font-cairo  text-xl font-bold self-start  px-10 py-5 text-primary ">
            المحفظة الحالية :
          </h1>
          <div className="flex-1  w-full">
            <PieChart data={setData(stocks)}></PieChart>
          </div>
        </div>
        <div className="w-[1px] h-[90%] bg-gray-200" />

        <div className=" sm:w-1/3 w-full sm:h-[400px] h-[300px] rounded-lg flex flex-col  ">
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
