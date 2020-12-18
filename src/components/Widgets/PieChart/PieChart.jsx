import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import cloneDeep from 'lodash/cloneDeep'

const PieChart = () => {

  const data = {
    datasets: [{
        data: [102, 50, 23, 38, 74, 33, 15, 49],
        backgroundColor: [
          "#E77F3F",
          "#906B54",
          "#899054",
          "#188EA9",
          "#4C5F64",
          "#522BB3",
          "#CCBFEC",
          "#B02178"
      ]
    }],
    labels: [
        '20-Nov',
        '22-Nov',
        '24-Nov',
        '26-Nov',
        '28-Nov',
        '30-Nov',
        '02-Dic',
        '04-Dic',
    ],
    backgroundColor: [
      "#E77F3F",
      "#906B54",
      "#899054",
      "#188EA9",
      "#4C5F64",
      "#522BB3",
      "#CCBFEC",
      "#B02178"
  ]
  };

  // const data = {
  //   labels: [...histogramData.x],
  //   datasets: [
  //     {
  //       label: '',
  //       fill: true,
  //       backgroundColor: 'rgba(178, 204, 234, 0.8)',
  //       stack: 1,
  //       hoverBackgroundColor: 'rgba(178, 204, 234)',
  //       data: [...histogramData.y],
  //     }, 
  //     {
  //       label: 'Promedio',
  //       fill: true,
  //       showLine: true,
  //       type: 'line',
  //       lineTension: 0.2,
  //       backgroundColor: 'rgba(75,192,192,0)',
  //       borderColor: 'rgba(75,192,192,1)',
  //       pointRadius: 0,
  //       borderWidth: 1,
  //       data: [...histogramData.y],
  //     }
  //   ]
  // }

  // const getAverageLine = () => {
  //   const { x } = histogramData.average_line
  //   return ({
  //     type: 'line',
  //     mode: 'vertical',
  //     scaleID: 'x-axis-0',
  //     value: x,
  //     backgroundColor: 'rgba(178, 204, 234, 1)',
  //     borderWidth: 3,
  //     fill: true,
  //     showLine: true,
  //   })
  // }
  
  const options = {
    layout: {
      // padding: {
      //   bottom: 20,
      //   top: 20,
      //   right: 20,
      //   left: 20
      // }
    },
    responsive: true,
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        fontColor: '#91929b',
        padding: 12
      },
      marginTop: 20
    }
  }

  return (
    <div>
      <Doughnut data={data} options={ options }/>
    </div>
  )
}

export { PieChart }




