import React from 'react'
import { Line } from 'react-chartjs-2'
import cloneDeep from 'lodash/cloneDeep'

const LineChartDistribution = ({ lineChartData }) => {

  const data = {
    datasets: [
      {
        label: 'Remanente ',
        fill: false,
        type: 'scatter',
        backgroundColor: 'rgba(75,134,200,0)',
        borderColor: 'rgba(75,134,200,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,134,200,1)',
        pointBackgroundColor: 'rgba(75,134,200,1)',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,134,200,1)',
        pointHoverBorderColor: 'rgba(75,134,200,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 1,
        data: [...lineChartData.points]
      },
      {
        label: 'Sep. de ccv ',
        backgroundColor: 'rgba(131, 131, 131, 1)',
        borderColor: 'rgba(131, 131, 131, 1)',
      },
      {
        label: 'Promedio ',
        backgroundColor: 'rgba(9, 187, 55, 1)',
        borderColor: 'rgba(9, 187, 55, 1)',
      }
    ]
  }

  const getAverageLine = () => {
    const { y } = lineChartData.average_line
    return ({
      type: 'line',
      mode: 'horizontal',
      scaleID: 'y-axis-0',
      value: y,
      backgroundColor: 'rgba(9, 187, 55, 1)',
      borderColor: 'rgba(9, 187, 55, 1)',
      borderWidth: 1,
      fill: true,
      showLine: true,
    })
  }

  const getVerticalLines = () => {
    const { vertical_lines } = lineChartData
    return vertical_lines.map( x => {
      return ({
        type: 'line',
        mode: 'vertical',
        scaleID: 'x-axis-0',
        value: x,
        backgroundColor: 'rgba(131, 131, 131, 1)',
        borderColor: 'rgba(131, 131, 131, 1)',
        borderWidth: 1
      })
    })
  }
  
  const options = {
    annotation: {
      annotations: [
        getAverageLine(), 
        ...getVerticalLines()
    ]
  },
    layout: {
      padding: {
        bottom: 0,
        top: 0
      }
    },
    scales: {
    xAxes: [{
      type: 'linear',
      stacked: true,
      gridLines: {
        display: false
      },
    }],
    yAxes: [{
      // stacked: true,
      // scaleLabel: {
      //   display: true,
      //   labelString: 'Remanente [mm]',
        // fontSize: 21,
        // fontColor: '#0057B8'
      // }
    }],
    },
    responsive: true,
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: '#91929b',
          padding: 20
        }
      }
    }

  return (
    <div>
     <Line data={cloneDeep(data)} options={options}/>
    </div>
  )
}

export { LineChartDistribution }