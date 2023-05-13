import { ResponsivePie } from "@nivo/pie";

import React from "react";

const PieChart = (props) => {
  return (
    <ResponsivePie
      data={props.data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      padAngle={0.7}
      fit={true}
      colors={{ scheme: "paired" }}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      arcLabel={(e) => `${e.value}%`}
      arcLinkLabelsTextOffset={20}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor="#ffffff"
      animate={true}
      motionConfig="default"
      transitionMode="startAngle"
    />
  );
};

PieChart.propTypes = {};

export default PieChart;
