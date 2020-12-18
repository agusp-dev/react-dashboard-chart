import React, { useState } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import { GeneralWidget } from '../Widgets/GeneralWidget/GeneralWidget'
import { useStyles } from './style'
import ZoomInIcon from '@material-ui/icons/ZoomIn'
import { BarChartHistogram } from '../Widgets/BarChart/BarChartHistogram'
import { LineChartDistribution } from '../Widgets/LineChart/LineChartDistributtion'
import { PieChart } from '../Widgets/PieChart/PieChart'

const ProjectDashboard = ({ 
  project, 
  editCards 
}) => {
  
  const classes = useStyles()
  const ResponsiveGridLayout = WidthProvider(Responsive)
  let layout = []
  const [currentBreakpoint, setCurrentBreakpoint] = useState('lg')
  const [widthBreakpoint, setWidthBreakpoint] = useState(3)
  const [heightBreakpoint, setHeightBreakpoint] = useState(3)

  const { dashboard } = project

  const getChart = (key, data) => {
    switch (key) {
      case 'general': 
        return <GeneralWidget />
      case 'barChartHistogram': 
        return <BarChartHistogram barChartData={ data }/>
      case 'lineChartDistribution': 
        return <LineChartDistribution lineChartData={ data }/>
      case 'pieChart': 
        return <PieChart pieChartData={ data }/>
      default: return <div></div>
    }
  }

  /**
   * With this function we make every item on the dashboard
   * @key: number - isRequired for the order of the items
   */
  const generateDOM = () => {
    return dashboard.map(o => {
      return (
        <div
          key={ o.key }
          className={ classes.notDraggable }
          data-grid={ o.grid }
        >
          {/* <ZoomInIcon
            className={classes.zoomIn}
            title={'Show more detail'}
            onClick={() => hangleShowChartDetail(object)}
          /> */}
          { getChart(o.key, o.data) }
        </div>
      )
    })
  }

  const onLayoutChange = layoutUpdated => {
    // layout = layoutUpdated.filter(e => e.i !== 'alerts')
    // layout.map(e => {
    //   dashboard.map(o => {
    //     if (o.processor_id.toString() === e.i) {
    //       o.widget_col = e.x
    //       o.widget_row = e.y
    //       o.widget_width = widthBreakpoint
    //       o.widget_height = heightBreakpoint
    //     }
    //   })
    // })
    // updateDashboardGrid(dashboard)
  }

  const onBreakpointChange = breakpoint => {
    setCurrentBreakpoint(breakpoint)
  }

  return (
    <ResponsiveGridLayout
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={100}
      width={1200}
      onDragStop={onLayoutChange}
      onResizeStop={onLayoutChange}
      layout={layout}
      margin={[1, 1]}
      onBreakpointChange={onBreakpointChange}
    >
      { generateDOM() }
    </ResponsiveGridLayout> 
  )
}

export { ProjectDashboard }