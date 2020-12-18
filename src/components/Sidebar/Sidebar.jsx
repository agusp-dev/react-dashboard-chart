import React, { useState } from 'react'
import clsx from 'clsx'
import {
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Grid,
  Avatar
} from '@material-ui/core'

import { PersonalMenu } from './PersonalMenu'

import MoreIcon from '@material-ui/icons/MoreVert'
import DashboardIcon from '@material-ui/icons/Dashboard'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import SettingsIcon from '@material-ui/icons/Settings'

import { useStyles } from './style'

// import logo from '../../assets/logo.svg'
// import logo_small from '../../assets/logo_small.svg'

const DASH_ROUTES = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: <DashboardIcon style={{ fontSize: 30 }} />
  },
  {
    path: '/projects',
    name: 'Projects',
    icon: <BusinessCenterIcon style={{ fontSize: 30 }} />
  },
  {
    path: '/market',
    name: 'Market',
    icon: <ShoppingCartIcon style={{ fontSize: 30 }} />
  }
]

const Sidebar = () => {

  const classes = useStyles()

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const mobileMenuId = 'primary-search-account-menu-mobile'

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {DASH_ROUTES.map((prop, key) => {
        return (
          <MenuItem key={key}>
            {/* <NavLink to={prop.path}>
              {' '} */}
              <IconButton className={classes.NavButton} color='primary'>
                {prop.icon} {prop.name}
              </IconButton>
            {/* </NavLink> */}
          </MenuItem>
        )
      })}
      <MenuItem key='account'>
        {/* <NavLink to='/account'>
          {' '} */}
          <IconButton className={classes.NavButton} color='primary'>
            <SettingsIcon style={{ fontSize: 30 }} /> Account
          </IconButton>
        {/* </NavLink> */}
      </MenuItem>
      {/* <MenuItem key='logout'>
          <IconButton className={classes.NavButton} color='primary'>
            <ExitToAppIcon style={{ fontSize: 30 }} /> Logout
          </IconButton>
      </MenuItem> */}
    </Menu>
  )


  return (
    <AppBar className={clsx(classes.root)}>
      <Toolbar>
        <Grid container className={classes.NavAll}>
          <Grid item xs={12} sm={2}>
            {/* <NavLink to='/projects'> */}
              {/* <Hidden smDown>
                <img alt='Logo' src={logo} className={classes.logo} />
              </Hidden> */}
              {/* <Hidden mdUp>
                <img
                  alt='Logo'
                  src={logo_small}
                  className={classes.logo_small}
                />
              </Hidden> */}
            {/* </NavLink> */}
          </Grid>
          <Grid item xs={12} sm={8} className={classes.NavList}>
            <div className={classes.flexGrow} />
            <Hidden smDown>
              {DASH_ROUTES.map((prop, key) => {
                return (
                  <Tooltip title={prop.name} key={key}>
                    {/* <NavLink to={prop.path} key={key}> */}
                      <IconButton className={classes.NavButton} color='primary'>
                        {prop.icon}
                      </IconButton>
                    {/* </NavLink> */}
                  </Tooltip>
                )
              })}
            </Hidden>
          </Grid>
          <Grid item xs={12} sm={2} className={classes.NavPersonalConfig}>
            <Hidden smDown>
              <PersonalMenu />
            </Hidden>
          </Grid>
        </Grid>

        <Hidden mdUp>
          <Avatar>CM</Avatar>
        </Hidden>
        {/* <Alerts /> */}
        <Hidden mdUp>
          <IconButton
            aria-controls={mobileMenuId}
            aria-label='show more'
            aria-haspopup='true'
            color='primary'
            onClick={handleMobileMenuOpen}
          >
            <MoreIcon />
          </IconButton>
        </Hidden>

        {renderMobileMenu}
      </Toolbar>
    </AppBar>
  )
}

export { Sidebar }