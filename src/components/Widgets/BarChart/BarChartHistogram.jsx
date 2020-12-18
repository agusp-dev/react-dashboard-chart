import React from 'react'
import { Bar } from 'react-chartjs-2'
import cloneDeep from 'lodash/cloneDeep'

const BarChartHistogram = ({ barChartData }) => {

  const data = {
    labels: [...barChartData.x],
    datasets: [
      {
        label: '',
        fill: false,
        backgroundColor: 'rgba(178, 204, 234, 0.8)',
        stack: 1,
        hoverBackgroundColor: 'rgba(178, 204, 234)',
        data: [...barChartData.y],
      }, 
      {
        label: 'Promedio',
        fill: true,
        showLine: true,
        type: 'line',
        lineTension: 0.2,
        backgroundColor: 'rgba(75,192,192,0)',
        borderColor: 'rgba(75,192,192,1)',
        pointRadius: 0,
        borderWidth: 1,
        data: [...barChartData.y],
      }
    ]
  }

  const getAverageLine = () => {
    const { x } = barChartData.average_line
    return ({
      type: 'line',
      mode: 'vertical',
      scaleID: 'x-axis-0',
      value: x,
      backgroundColor: 'rgba(178, 204, 234, 1)',
      borderWidth: 3,
      fill: true,
      showLine: true,
    })
  }
  
  const options = {
    annotation: {
      annotations: [getAverageLine()]
    },
    layout: {
      padding: {
        bottom: 30,
        top: 20,
        left: 20,
        right: 20
      },
      
    },
    scales: {
      
    xAxes: [{
      stacked: true,
      gridLines: {
        display: false
      },
      scaleLabel: {
        display: true,
        labelString: barChartData.xlabel
      }
    }],
    yAxes: [{
      stacked: true,
      scaleLabel: {
        display: true,
        labelString: barChartData.ylabel
      }
    }],
    },
    responsive: true,
    legend: {
      display: false,
      position: 'center',
      labels: {
        fontColor: '#91929b',
        padding: 20
      }
    }
  }

  return (
    <div>
      <Bar data={cloneDeep(data)} options={options}/>
    </div>
  )
}

export { BarChartHistogram }