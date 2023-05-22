import React from "react";

const StockList = () => {
  const data = [
    {
      name: "VOO",
      currentPrice: 100,
      buyPrice: 200,
      percentage: 10,
    },
    {
      name: "Apple iPhone 12",
      currentPrice: 200,
      buyPrice: 100,
      percentage: 10,
    },
    {
      name: "Apple iPad Pro",
      currentPrice: 200,
      buyPrice: 200,
      percentage: 10,
    },
    {
      name: "Apple iPad Pro",
      currentPrice: 200,
      buyPrice: 200,
      percentage: 10,
    },
    {
      name: "Apple iPad Pro",
      currentPrice: 200,
      buyPrice: 200,
      percentage: 10,
    },
    {
      name: "Apple iPad Pro",
      currentPrice: 200,
      buyPrice: 200,
      percentage: 10,
    },
    {
      name: "Apple iPad Pro",
      currentPrice: 200,
      buyPrice: 200,
      percentage: 10,
    },
    {
      name: "Apple iPad Pro",
      currentPrice: 200,
      buyPrice: 200,
      percentage: 10,
    },
    {
      name: "Apple iPad Pro",
      currentPrice: 200,
      buyPrice: 200,
      percentage: 10,
    },
    {
      name: "Apple iPad Pro",
      currentPrice: 200,
      buyPrice: 200,
      percentage: 10,
    },
  ];

  return (
    <div className="w-full h-[100%] my-5 shadow   rounded-xl p-5 overflow-hidden   flex-col  flex bg-white">
      <div className="text-start p-5 font-ibmsans text-2xl font-bold text-primary ">
        أكبر مكونات المحفظة
      </div>
      <div className="p-5 flex  h-[100%] w-[100%] overflow-hidden  ">
        <table className="w-full text-md  text-gray-500 text-center ">
          <thead className="text-s text-gray-700 font-ibmsans border-b ">
            <tr>
              <th scope="col" className="px-6 py-3 text-start ">
                الشركة
              </th>
              <th scope="col" className="px-6 py-3">
                سعر الشراء
              </th>
              <th scope="col" className="px-6 py-3">
                السعر الحالي
              </th>
              <th scope="col" className="px-6 py-3">
                التغيير
              </th>
              <th scope="col" className="px-6 py-3">
                النسبة من المحفظة
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <SingleStock
                  key={index}
                  name={item.name}
                  currentPrice={item.currentPrice}
                  buyPrice={item.buyPrice}
                  percentage={item.percentage}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockList;

const SingleStock = ({ name, currentPrice, buyPrice, percentage }) => {
  var change = ((currentPrice - buyPrice) / buyPrice) * 100.0;
  return (
    <tr className="font-cairo ">
      <th
        scope="row"
        className="px-6 py-4  w-[40%] overflow-hidden h-5 text-start font-cairo "
      >
        <div className="flex h-5 overflow-hidden items-center">{name}</div>
      </th>
      <td dir="ltr" className="px-6 py-4">
        {buyPrice}
      </td>
      <td dir="ltr" className="px-6 py-4">
        {currentPrice}
      </td>
      <td
        dir="ltr"
        className={`px-6 py-4 ${change < 0 && "text-red-500"} ${
          change > 0 && "text-green-500"
        }`}
      >
        {change}%
      </td>
      <td dir="ltr" className="px-6 py-4">
        {percentage}%
      </td>
    </tr>
  );
};
