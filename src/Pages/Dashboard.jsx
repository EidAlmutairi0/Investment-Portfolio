import React, { useEffect, useState } from "react";
import LineChar from "../components/LineChart";
import PieChart from "../components/PieChart";

const Dashboard = () => {
  const [totalValue, setTotalValue] = useState(0);

  const cost = 1000;
  const profit = 7.2;
  const marketValue = 12654350;

  useEffect(() => {
    setTotalValue(2380);
  }, []);
  const change = 0.5;
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
      <div className=" justify-center  items-center gap-5  rounded-xl  w-[100%] flex sm:flex-row flex-col">
        <div className=" sm:w-1/3 w-full  shadow-lg  shadow-card flex flex-col sm:[400px] h-full  mx-auto   justify-center px-10 m-auto gap-5 rounded-3xl green-pink-gradient">
          <div className="flex flex-row gap-3 justify-between ">
            <h1 className="  font-ibmsans  flex-1  font-bold text-white 2xl:text-xl text-lg  ">
              التكلفة:
            </h1>
            <h1 className=" font-ibmsans text-xl flex-1 font-bold text-center text-white">
              {totalValue} ريال
            </h1>
          </div>
          <div className="flex flex-row  ">
            <h1 className=" font-ibmsans text-lg font-bold flex-1  text-white ">
              الربح/الخسارة:
            </h1>
            <h1
              dir="ltr"
              className={` font-ibmsans flex text-xl flex-1 text-center font-bold  justify-center  ${
                profit > 0
                  ? "text-green-400"
                  : profit < 0
                  ? "text-red-400"
                  : "text-white"
              } `}
            >
              {profit}%
            </h1>
          </div>
          <div className="flex flex-row gap-3 justify-between ">
            <h1 className=" font-ibmsans text-lg font-bold flex-1 text-white ">
              القيمة السوقية:
            </h1>
            <h1 className=" font-ibmsans text-xl font-bold flex-1 text-center overflow-clip h-10 text-white">
              12654350 ريال
            </h1>
          </div>
        </div>
        <div className=" sm:w-1/3 w-full sm:h-[400px] h-[300px] rounded-lg  flex flex-col  ">
          <h1 className="text-center font-ibmsans  text-xl font-bold self-start  px-10 py-5 text-black ">
            المحفظة الحالية :
          </h1>
          <div className="flex-1  w-full">
            <PieChart data={setData(stocks)}></PieChart>
          </div>
        </div>

        <div className=" sm:w-1/3 w-full sm:h-[400px] h-[300px] rounded-lg flex flex-col  ">
          <h1 className="text-center font-ibmsans  text-xl font-bold self-start  px-10 py-5 text-black ">
            المحفظة المتوازنة :
          </h1>
          <div className="flex-1  w-full">
            <PieChart data={data}></PieChart>
          </div>
        </div>
      </div>
      <LineChar />
    </div>
  );
};

export default Dashboard;
