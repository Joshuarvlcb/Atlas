import React from "react";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2"
import Detail from "./Detail";

const Chart = ({activePage, chartToggle,chart, newData}) => {


  const labels = {
    today: ['Morning', 'Noon', 'Evening', 'Night'],
    daily: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    hourly: ['6:00', '12:00', '18:00', '24:00', '36:00', '42:00', '48:00']
  }
  const data = {
    labels: labels[activePage],
    datasets: [
      {
        data: [10, 20, 15, 45],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
      },
    ],
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      // xAxes: [
      //   {
      //     ticks: {
      //       beginAtZero: true,
      //     }
      //   }
      // ]
    },
  };

  return (
    <>
      <div
        className="chart-con d-flex align-items-center flex-column justify-content-center"
        style={{ height: "50%" }}
      >
        <div
          className=" d-flex justify-content-between align-items-center"
          style={{ width: "100%"  , paddingBottom: "20px"
        }}
        >
          <h3
            style={{
              paddingLeft: "20px",
            }}
          >
            Chart
          </h3>
 
          <Detail activePage = {activePage} chartToggle = {chartToggle} chart={chart}/>
        </div>
        <Line
          style={{ padding: "0 25px" }}
          height="70%"
          data= {data}
          options={options}
        />
      </div>
    </>
  );
};

export default Chart;
