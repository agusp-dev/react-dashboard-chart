import React, { useState } from 'react'
import _ from 'lodash'
import { Grid, Tabs, Tab, AppBar, Button } from '@material-ui/core'
import { ProjectTab } from './ProjectTab'
import LockIcon from '@material-ui/icons/Lock'
import LockOpenIcon from '@material-ui/icons/LockOpen'

const DashboardTableData = () => {

  const [tabIndex, setTabIndex] = useState(0)
  const [edit, setEdit] = useState(true)

  const projects = [
    {id: 1, name: 'Project 1', dashboard: []}, 
    {id: 2, name: 'Project 2', dashboard: []}, 
    {id: 3, name: 'Project 3', dashboard: []}
  ]

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

  const handleEditCards = () => {
    //todo
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
      {/* <Grid item xs={12} sm={1}>
        <Button
          onClick={ handleEditCards }
          style={{
            color: '#888888',
            border: '1px solid #E5E5E5',
            borderRadius: '25px',
            opacity: '1',
            padding: '16px 34px',
            fontSize: '14px'
          }}
        >
          {edit ? <LockIcon /> : <LockOpenIcon />}
          <span style={{ marginLeft: '5px' }}>{ edit ? 'Edit' : 'No Edit' }</span>
        </Button>
      </Grid> */}
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