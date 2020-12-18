import React, { useState } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import { GeneralWidget } from '../Widgets/GeneralWidget/GeneralWidget'
import { Alert } from '@material-ui/lab'
import { useStyles } from './style'
import ZoomInIcon from '@material-ui/icons/ZoomIn'
import { BarChartHistogram } from '../Widgets/BarChart/BarChartHistogram'
import { LineChartDistribution } from '../Widgets/LineChart/LineChartDistributtion'
import { PieChart } from '../Widgets/PieChart/PieChart'

const ProjectDashboard = ({ 
  // dashboard, 
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

  const processor1 = {
    processor_id: 'Processor Id 1',
    widget_col: 5,
    widget_row: 1
  }

  dashboard.push(processor1)

  /**
   * With this function we make every item on the dashboard
   * @key: number - isRequired for the order of the items
   */
  const generateDOM = () => {
    return dashboard.map((object, index) => {
      return (
        <div
          key={object.processor_id}
          className={classes.draggable}
          data-grid={{
            i: object.processor_id.toString(),
            x:
              object.widget_col === 0
                ? object.widget_col
                : object.widget_col || 4 + index + 1,
            y:
              object.widget_row === 0
                ? object.widget_row
                : object.widget_row || 1 + index + 1,
            w: widthBreakpoint,
            h: heightBreakpoint,
            isResizable: false,
            static: !editCards
          }}
        >
          <ZoomInIcon
            className={classes.zoomIn}
            title={'Show more detail'}
            // onClick={() => hangleShowChartDetail(object)}
          />
          {/* <iframe
            title='unique title iframe'
            className={classes.iframe}
            srcdoc={object.request_str}
          ></iframe> */}
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
    // console.log('%c breakpoint', 'background: red; color: #fff')
    // console.lconsole.logog(breakpoint)
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
      onBreakpointChange={onBreakpointChange}
    >
      <div
        key={'general'}
        className={classes.notDraggable}
        data-grid={{
          i: 'alerts',
          x: 0,
          y: 0,
          w: widthBreakpoint,
          h: heightBreakpoint,
          isResizable: false,
          static: true
        }}
      >
        <GeneralWidget project={project} />
      </div>
      <div
        key={'general2'}
        className={classes.notDraggable}
        data-grid={{
          i: 'alerts',
          x: 4,
          y: 0,
          w: 7,
          h: 3,
          isResizable: false,
          static: true
        }}
      >
        <BarChartHistogram />
      </div>

      <div
        key={'general4'}
        className={classes.notDraggable}
        data-grid={{
          i: 'alerts',
          x: 0,
          y: 4,
          w: 5,
          h: 3,
          isResizable: false,
          static: true
        }}
      >
        <LineChartDistribution />
      </div>

      <div
        key={'general5'}
        className={classes.notDraggable}
        data-grid={{
          i: 'alerts',
          x: 6,
          y: 4,
          w: 5,
          h: 3,
          isResizable: false,
          static: true
        }}
      >
        <PieChart />
      </div>

      {/* {generateDOM()} */}
    </ResponsiveGridLayout> 
  )
}

export { ProjectDashboard }