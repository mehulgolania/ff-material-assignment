import React from 'react';
import Chart from "react-google-charts";

const pieOptions = {
  title: "",
  pieHole: 0.3,
  slices: [
    {
      color: "#7f7f81"
    },
    {
      color: "#7dc15e"
    },
    {
      color: "#fcb535"
    },
    {
      color: "#fd8c88"
    }
  ],
  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      color: "233238",
      fontSize: 12
    }
  },
  tooltip: {
    showColorCode: true
  },
  chartArea: {
    left: 0,
    top: 30,
    width: "100%",
    height: "80%"
  },
  fontName: "Roboto"
};

function PlanChartBreakdown(){
  return(
    <Chart
      width={"100%"}
      height={'400px'}
      chartType="PieChart"
      data={[
        ["ActionType", "Volume"], 
        ["Deffred", 0.9], 
        ["Implemented", 32.9], 
        ["Planned", 7.6], 
        ["TDB", 57.6]
      ]}
      options={pieOptions}
      graph_id="PlanChart"
      legend_toggle
    />
  );
}

export default PlanChartBreakdown;