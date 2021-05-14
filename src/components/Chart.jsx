import React from 'react'
import { Line } from 'react-chartjs-2';


const Chart = () => {


  return (
      <>
    <div className = 'chart-con d-flex align-items-center flex-column' style = {{height:'50%'}}>
  <h3
                style={{
                  paddingBottom: "20px",
                  paddingLeft: "20px",
                }}
              >Chart</h3>

<Line style = {{padding:'0 25px'}}
height = '70%'
      data={{
        labels: ['1', '2', '3', '4', '5', '6'],
        dataSets:[
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      }}
      options = {{
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
