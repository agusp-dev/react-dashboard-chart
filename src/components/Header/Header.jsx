import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useStyles } from './style'
import clsx from 'clsx'


const Header = ({ title }) => {

  const classes = useStyles()

  return (
    <Grid item className={clsx(classes.root, 'headerContent')} sm={12} md={4}>
      <Typography
        color='primary'
        className={clsx(classes.title, 'headerTitle')}
      >{ title }
      </Typography>
    </Grid>
  )
}

export { Header }