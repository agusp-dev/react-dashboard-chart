import React, { useEffect } from 'react'
import { Card, Typography, Badge, IconButton, Grid } from '@material-ui/core'
import { useStyles } from './style'
import NotificationsIcon from '@material-ui/icons/Notifications'

const AlertsWidget = () => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <div  
        className={classes.alertNavLink}>
          <IconButton
            color='inherit'
            aria-controls='simple-menu'
            aria-haspopup='true'
            className={classes.NavAlert}
          >
            <Badge
              // badgeContent={alerts.unread}
              color='secondary'
              className={classes.NavAlertBadge}
              variant='dot'
            >
              <NotificationsIcon style={{ fontSize: 100, color: '#F8CA51' }} />
            </Badge>
          </IconButton>
      </div>
    </Card>
  )
}

export { AlertsWidget }
