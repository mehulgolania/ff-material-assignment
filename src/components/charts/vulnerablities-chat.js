import React from 'react';
import Chart from "react-google-charts";

const data = [
  ["", "", { role: 'style' }, { role: "annotation" }],
  ["Encryption Vulnerabilities", 28, "#ffc000", "28"],
  ["Excessive User Permissions", 44, "#ffc000", "44"],
  ["Dormants Accounts", 33, "#ffc000", "33"],
  ["Physical Security", 67, "#ffc000", "67"],
  ["Overly Trusting Employees", 25, "#ffc000", "25"]
];


const options = {
  legend: { position: 'none' },
  chartArea: { width: '50%' },
}

function Vulenrabilities(){
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

export default Vulenrabilities;