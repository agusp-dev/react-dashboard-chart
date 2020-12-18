import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import cloneDeep from 'lodash/cloneDeep'

const PieChart = ({ pieChartData }) => {
  
  const options = {
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
      <Doughnut data={ pieChartData } options={ options }/>
    </div>
  )
}

export { PieChart }




