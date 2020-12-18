import React, { Fragment } from 'react'
import { useStyles } from './style'
import { DateWidget } from '../DateWidget/DateWidget'
import { HourWidget } from '../HourWidget/HourWidget'
import { AlertsWidget } from '../AlertsWidget/AlertsWidget'
import { Grid } from '@material-ui/core'

const GeneralWidget = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <HourWidget className={classes.dateWidget} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <AlertsWidget />
        </Grid>
        <Grid item xs={12} sm={12}>
          <DateWidget className={classes.dateWidget} />
        </Grid>
      </Grid>
    </Fragment>
  )
}

export { GeneralWidget }