import { ResponsivePie } from "@nivo/pie";

import React from "react";

const PieChart = (props) => {
  return (
    <ResponsivePie
      data={props.data}
      colors={{ scheme: "accent" }}
      margin={{ right: 80, left: 80 }}
      cornerRadius={3}
      borderWidth={1}
      sortByValue={true}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
    />
  );
};

PieChart.propTypes = {};

export default PieChart;
