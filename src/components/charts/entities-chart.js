import React from 'react';
import Chart from "react-google-charts";

const data = [
  ["", "", { role: 'style' }, { role: "annotation" }],
  ["Genral Hospital", 66, "#ff0401", "66"],
  ["Internal Medicine East", 19, "#ff0401", "19"],
  ["Asheville Vascular Care", 18, "#ff0401", "18"],
  ["Regional Medical Center", 16, "#ff0401", "16"],
  ["Internal Medicine - Davidson ", 16, "#ff0401", "16"]
];


const options = {
  legend: { position: 'none' },
  chartArea: { width: '50%' },
}

function EntitiesChart(){
  return(
    <Chart 
      chartType="BarChart" 
      width="100%" 
      height="400px" 
      data={data} 
      options={options}
      loader={<div>Loading Chart...</div>}
    />
  )
}

export default EntitiesChart;