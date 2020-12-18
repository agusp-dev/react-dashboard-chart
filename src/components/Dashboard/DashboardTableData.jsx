import React, { useState } from 'react'
import _ from 'lodash'
import { Grid, Tabs, Tab, AppBar, Button } from '@material-ui/core'
import { ProjectTab } from './ProjectTab'
import LockIcon from '@material-ui/icons/Lock'
import LockOpenIcon from '@material-ui/icons/LockOpen'

const DashboardTableData = () => {

  const projects = [

    //PROJECT 1

    {
      id: 1, 
      name: 'Project 1', 
      dashboard: [{
        key: 'general',
        grid: {
          i: 'alerts',
          x: 0,
          y: 0,
          w: 3,
          h: 3,
          isResizable: false,
          static: true
        },
      }, {
        key: 'barChartHistogram',
        grid: {
          i: 'alerts',
          x: 4,
          y: 0,
          w: 7,
          h: 3,
          isResizable: false,
          static: true
        },
        data: {
          x: ['6.6','6.7','6.8','6.9','7.0','7.1','7.2','7.3'], 
          y: ['0.1','0.4','0.6','1.4','3.5','4.0','3.0','1.5'], 
          average_line: { x: '7.0' },
          xlabel: '',
          ylabel: ''
        }
      }, {
        key: 'lineChartDistribution',
        grid: {
          i: 'alerts',
          x: 0,
          y: 4,
          w: 5,
          h: 3,
          isResizable: false,
          static: true
        },
        data: {
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
      }, {
        key: 'pieChart',
        grid: {
          i: 'alerts',
          x: 6,
          y: 4,
          w: 5,
          h: 3,
          isResizable: false,
          static: true
        },
        data: {
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
        }
      }]
    }, 

    //PROJECT 2

    {
      id: 2, 
      name: 'Project 2', 
      dashboard: [{
        key: 'general',
        grid: {
          i: 'alerts',
          x: 0,
          y: 0,
          w: 3,
          h: 3,
          isResizable: false,
          static: true
        },
      }, {
        key: 'barChartHistogram',
        grid: {
          i: 'alerts',
          x: 4,
          y: 0,
          w: 7,
          h: 3,
          isResizable: false,
          static: true
        },
        data: {
          x: ['1.0','1.1','1.3','1.4','1.5','1.8','2.0','2.1', '2.2', '2.3', '2.5'], 
          y: ['25','20','33','50','52','51','12','20', '22', '25', '20'], 
          average_line: { x: '1.8' },
          xlabel: '',
          ylabel: ''
        }
      }, {
        key: 'lineChartDistribution',
        grid: {
          i: 'alerts',
          x: 0,
          y: 4,
          w: 5,
          h: 3,
          isResizable: false,
          static: true
        },
        data: {
          points: [
            {x: '30', y: '8.1'},
            {x: '32', y: '8.9'},
            {x: '34', y: '9.3'},
            {x: '36', y: '7.2'},
            {x: '38', y: '6.9'},
            {x: '40', y: '10.9'},
            {x: '42', y: '12.2'},
            {x: '44', y: '15.0'},
            {x: '46', y: '14.0'},
            {x: '48', y: '13.5'},
            {x: '50', y: '13.9'},
            {x: '52', y: '8.9'},
            {x: '54', y: '8.3'},
            {x: '56', y: '7.0'},
          ],
          average_line: { y: '15.0' },
          vertical_lines: ['36', '40', '48', '54']
        }
      }, {
        key: 'pieChart',
        grid: {
          i: 'alerts',
          x: 6,
          y: 4,
          w: 5,
          h: 3,
          isResizable: false,
          static: true
        },
        data: {
          datasets: [{
              data: [10, 50, 5, 22, 20, 12, 7, 30, 4, 16],
              backgroundColor: [
                "#E77F3F",
                "#906B54",
                "#899054",
                "#188EA9",
                "#4C5F64",
                "#522BB3",
                "#CCBFEC",
                "#B02178",
                '#51463F',
                '#51183F'
            ]
          }],
          labels: [
              '13-Jul',
              '14-Jul',
              '15-Jul',
              '16-Jul',
              '17-Jul',
              '18-Jul',
              '19-Jul',
              '20-Jul',
              '21-Jul',
              '22-Jul'
          ],
          backgroundColor: [
            "#E77F3F",
            "#906B54",
            "#899054",
            "#188EA9",
            "#4C5F64",
            "#522BB3",
            "#CCBFEC",
            "#B02178",
            '#51463F',
            '#51183F'
        ]
        }
      }]
    },









    //PROJECT 3

    {
      id: 3, 
      name: 'Project 3', 
      dashboard: [{
        key: 'general',
        grid: {
          i: 'alerts',
          x: 0,
          y: 0,
          w: 3,
          h: 3,
          isResizable: false,
          static: true
        },
      }, {
        key: 'barChartHistogram',
        grid: {
          i: 'alerts',
          x: 4,
          y: 0,
          w: 7,
          h: 3,
          isResizable: false,
          static: true
        },
        data: {
          x: ['4.0','4.1','4.2','4.3','4.4','4.5','4.6','4.7', '4.8','4.9','5.0',
              '5.1','5.2','5.3','5.4','5.5','5.6','5.7', '5.8', '5.9', '6.0'], 
          y: ['8','9','7','10','12','11','15','27','22','16','18','19','15','12',
              '10','19','9','15','27','22','16'], 
          average_line: { x: '5.0' },
          xlabel: '',
          ylabel: ''
        }
      }, {
        key: 'lineChartDistribution',
        grid: {
          i: 'alerts',
          x: 0,
          y: 4,
          w: 5,
          h: 3,
          isResizable: false,
          static: true
        },
        data: {
          points: [
            {x: '30', y: '8.1'},
            {x: '32', y: '8.9'},
            {x: '34', y: '9.3'},
            {x: '36', y: '7.2'},
            {x: '38', y: '6.9'},
            {x: '40', y: '10.9'},
            {x: '42', y: '12.2'},
            {x: '44', y: '15.0'},
            {x: '46', y: '14.0'},
            {x: '48', y: '13.5'},
            {x: '50', y: '13.9'},
            {x: '52', y: '8.9'},
            {x: '54', y: '8.3'},
            {x: '56', y: '7.0'},

            {x: '58', y: '7.1'},
            {x: '60', y: '5.9'},
            {x: '62', y: '5.3'},
            {x: '64', y: '9.3'},
            {x: '66', y: '9.4'},
            {x: '68', y: '9.5'},
            {x: '70', y: '4.5'},
            {x: '72', y: '4.0'},
            {x: '74', y: '4.2'},
            {x: '76', y: '4.9'},
            {x: '78', y: '15.0'},
            {x: '80', y: '14.2'},
            {x: '82', y: '14.9'},
            {x: '84', y: '15.2'},
            {x: '86', y: '15.5'},
          ],
          average_line: { y: '15.0' },
          vertical_lines: ['36', '40', '48', '54']
        }
      }, {
        key: 'pieChart',
        grid: {
          i: 'alerts',
          x: 6,
          y: 4,
          w: 5,
          h: 3,
          isResizable: false,
          static: true
        },
        data: {
          datasets: [{
            data: [12, 13, 9, 5, 20],
            backgroundColor: [
              "#522BB3",
              "#CCBFEC",
              "#B02178",
              '#51463F',
              '#51183F'
            ]
          }],
          labels: [
            '22-Feb',
            '23-Feb',
            '25-Feb',
            '26-Feb',
            '27-Feb'
          ],
          backgroundColor: [
            "#522BB3",
            "#CCBFEC",
            "#B02178",
            '#51463F',
            '#51183F'
        ]
        }
      }]
    }











    
  ]





  const [tabIndex, setTabIndex] = useState(0)
  const [edit, setEdit] = useState(true)

  




    

   /**
   * properties for the tabs
   * {@index} number
   */
  const tabProps = index => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    }
  }

  /**
   * Handle the tab change between projects tabs
   */
  const handleChange = (event, newValue) => {
    if (tabIndex === newValue) return
    setTabIndex(newValue)
  }

  return (
    <Grid container>
      <Grid item xs={12} sm={11}>
        <AppBar
          position='static'
          style={{
            width: '100%',
            backgroundColor: 'transparent',
            height: '100%',
            color: '#888',
            boxShadow: 'none',
            zIndex: 1
          }}
        >
          <Tabs
            style={{ boxShadow: 'none' }}
            value={tabIndex}
            onChange={handleChange}
            aria-label='dashboard tabs'
            TabIndicatorProps={{
              style: {
                backgroundColor: '#2BB38B'
              }
            }}
          >
            {projects.map((item, index) => {
              return (
                <Tab
                  label={item.name}
                  {...tabProps(index)}
                  key={index}
                />
              )
            })}
          </Tabs>
        </AppBar>
      </Grid>
      <Grid item xs={12} sm={12}>
        {
          <ProjectTab
            key={tabIndex}
            project={projects[tabIndex]}
            editCards={false}
          />
        }
      </Grid>
    </Grid>
  )
}

export { DashboardTableData }