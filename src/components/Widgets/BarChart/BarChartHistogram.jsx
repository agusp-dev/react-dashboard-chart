import React from 'react'
import { Bar } from 'react-chartjs-2'
import cloneDeep from 'lodash/cloneDeep'

const BarChartHistogram = () => {

  const histogramData = {
    x: ['6.6','6.7','6.8','6.9','7.0','7.1','7.2','7.3'], 
    y: ['0.1','0.4','0.6','1.4','3.5','4.0','3.0','1.5'], 
    average_line: { x: '7.0' },
    xlabel: 'CSS [in]',
    ylabel: 'N° de Ocurrencias'
  } 

  const data = {
    labels: [...histogramData.x],
    datasets: [
      {
        label: '',
        fill: true,
        backgroundColor: 'rgba(178, 204, 234, 0.8)',
        stack: 1,
        hoverBackgroundColor: 'rgba(178, 204, 234)',
        data: [...histogramData.y],
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
        data: [...histogramData.y],
      }
    ]
  }

  const getAverageLine = () => {
    const { x } = histogramData.average_line
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
        bottom: 20,
        top: 20,
        right: 20,
        left: 20
      }
    },
    scales: {
      
    xAxes: [{
      stacked: true,
      gridLines: {
        display: false
      },
      scaleLabel: {
        display: true,
        labelString: histogramData.xlabel
      }
    }],
    yAxes: [{
      stacked: true,
      scaleLabel: {
        display: true,
        labelString: histogramData.ylabel
      }
    }],
    },
    responsive: true,
    legend: {
      display: false,
      position: 'top',
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