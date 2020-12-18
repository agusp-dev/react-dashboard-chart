import React from 'react'
import { Line } from 'react-chartjs-2'
import cloneDeep from 'lodash/cloneDeep'

const LineChartDistribution = () => {

  const heightData = {
    points: [
      {x: '0', y: '7.634307169827454'},
      {x: '2', y: '7.808075717458578'},
      {x: '4', y: '7.4473037960704715'},
      {x: '6', y: '7.049794775317785'},
      {x: '8', y: '7.0595332950030185'},
      {x: '10', y: '7.169494583072296'},
      {x: '12', y: '7.691462976156072'},
      {x: '14', y: '7.422518971051361'},
      {x: '16', y: '7.675066882698764'},
      {x: '18', y: '7.527046356178005'},
      {x: '20', y: '7.634307169827454'},
      {x: '22', y: '8.808075717458578'},
      {x: '24', y: '8.4473037960704715'},
      {x: '26', y: '8.049794775317785'},
      {x: '28', y: '8.0595332950030185'},
      {x: '30', y: '8.169494583072296'},
      {x: '32', y: '8.691462976156072'},
      {x: '34', y: '8.422518971051361'},
      {x: '36', y: '8.675066882698764'},
      {x: '38', y: '8.527046356178005'},
      {x: '40', y: '9.634307169827454'},
      {x: '42', y: '9.808075717458578'},
      {x: '44', y: '9.4473037960704715'},
      {x: '46', y: '9.049794775317785'},
      {x: '48', y: '9.0595332950030185'},
      {x: '40', y: '9.169494583072296'},
      {x: '42', y: '9.691462976156072'},
      {x: '44', y: '9.422518971051361'},
      {x: '46', y: '9.675066882698764'},
      {x: '48', y: '9.527046356178005'},
    ],
    average_line: { y: '7.5' },
    vertical_lines: ['2', '5', '9', '10.5']
  }

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
        data: [...heightData.points]
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
    const { y } = heightData.average_line
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
    const { vertical_lines } = heightData
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