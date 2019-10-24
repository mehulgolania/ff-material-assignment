import React from 'react';
import Chart from "react-google-charts";

const pieOptions = {
  title: "",
  pieHole: 0.3,
  slices: [
    {
      color: "#7c509b"
    },
    {
      color: "#cb4125"
    },
    {
      color: "#7bbb4b"
    },
    {
      color: "#f69f02"
    }
  ],
  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      color: "4c4c4c",
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

function RiskChartBreakdown(){
  return(
    <Chart
      width={"100%"}
      height={'400px'}
      chartType="PieChart"
      data={[
        ["RiskType", "Risk"], 
        ["Critical Risk", 0.9], 
        ["Hight Risk", 13], 
        ["Low risk", 47], 
        ["Medium risk", 40]
      ]}
      options={pieOptions}
      graph_id="RiskChart"
      legend_toggle
    />
  );
}

export default RiskChartBreakdown;