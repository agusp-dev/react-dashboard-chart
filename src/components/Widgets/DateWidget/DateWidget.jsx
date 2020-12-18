import React from 'react'
import Moment from 'react-moment'
import { Typography, Hidden } from '@material-ui/core'
import { useStyles } from './style'

const DateWidget = className => {
  const classes = useStyles()
  const today = new Date()

  return (
    <div className={className.className}>
      <Typography variant='h6' className={classes.month}>
        <Moment date={today} format='MMMM' />,
        <Moment date={today} format='DD' />
        <Hidden mdDown>
          <span>
            {' '}
            <Moment
              style={{ fontWeight: '100', marginLeft: '5px' }}
              date={today}
              format='dddd'
            />
          </span>
        </Hidden>
        <Hidden mdUp>
          <span>
            {' '}
            <Moment
              style={{ fontWeight: '100', marginLeft: '5px' }}
              date={today}
              format='dddd'
            />
          </span>
        </Hidden>
      </Typography>
    </div>
  )
}

export { DateWidget }
