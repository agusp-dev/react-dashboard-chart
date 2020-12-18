import React from 'react'
import Moment from 'react-moment'
import { Typography } from '@material-ui/core'

const HourWidget = () => {

  const classes = {
    root: {
      color: '#fafafa'
    },
    dateWidget: {
      background: '#2BB38B 0% 0% no-repeat padding-box',
      borderRadius: '20px',
      opacity: 1,
      border: '1px solid #ddd',
      cursor: 'not-allowed',
      padding: '16px 24px 16px 16px',
      borderRadius: '25px'
    },
    hour: {
      textAlign: 'right',
      fontSize: '3.6em',
      fontWeight: '600',
      fontFamily: 'Montserrat, Roboto',
      letterSpacing: '0px',
      color: '#FFFFFF',
      opacity: 1,
      marginLeft: '-2px',
      lineHeight: '0.8',
      marginTop: '10px'
    }
  }

  const time = Date.now()

  return (
    <div style={classes.dateWidget}>
      <Typography variant='h6' style={classes.hour}>
        <Moment date={time} format='HH' utc local />
      </Typography>
      <Typography variant='h6' style={classes.hour}>
        <Moment date={time} format='mm' utc local />
      </Typography>
    </div>
  )
}

export { HourWidget }
