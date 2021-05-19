import React from "react";
// import { Line } from "react-chartjs-2";
import Detail from "./Detail";

const Chart = ({activePage, chartToggle,chart}) => {
  return (
    <>
      <div
        className="chart-con d-flex align-items-center flex-column justify-content-center"
        style={{ height: "50%" }}
      >
        <div
          className=" d-flex justify-content-between align-items-center"
          style={{ width: "100%"  ,             paddingBottom: "20px"
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
          data={{
            labels: ["1", "2", "3", "4", "5", "6"],
            dataSets: [
              {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgba(255, 99, 132, 0.2)",
              },
            ],
          }}
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </>
  );
};

export default Chart;
