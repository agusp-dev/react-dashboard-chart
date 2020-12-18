import React, { Fragment } from 'react'
import { Header } from '../Header/Header'
import { DashboardTableData } from '../Dashboard/DashboardTableData'

const Dashboard = () => {
  return (
    <Fragment>
      <Header title='Dashboard'/>
      <DashboardTableData />
    </Fragment>
  )
}

export { Dashboard }