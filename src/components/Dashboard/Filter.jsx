import React from 'react'
import { Grid, Paper, IconButton } from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings'
import SearchIcon from '@material-ui/icons/Search'

import { useStyles } from './styleFilter'

const Filter = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={4}>
          <Paper component='form' className={classes.rootForm}>
            <IconButton
              type='submit'
              className={classes.iconButton}
              aria-label='search'
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          desde
        </Grid>
        <Grid item xs={12} sm={2}>
          <SettingsIcon />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Filter