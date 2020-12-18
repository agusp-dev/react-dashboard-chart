import React, { Fragment, useEffect, useState, useRef } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import {
  Grow,
  Typography,
  Paper,
  Popper,
  MenuItem,
  MenuList
} from '@material-ui/core'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useStyles } from './style'

const AddWidget = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [expandIcon, setExpandIcon] = useState(
    <ExpandLessIcon className={classes.icon} />
  )
  const anchorRef = useRef(null)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
    if (open) {
      setExpandIcon(<ExpandLessIcon className={classes.icon} />)
    } else {
      setExpandIcon(<ExpandMoreIcon className={classes.icon} />)
    }
  }

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
    setExpandIcon(<ExpandLessIcon className={classes.icon} />)
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
      setExpandIcon(<ExpandLessIcon className={classes.icon} />)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open)
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <Fragment>
      <div className={classes.root} onClick={handleToggle} ref={anchorRef}>
        {expandIcon}
      </div>
      <div className={classes.rootMenu}>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: 'center top' }}
              timeout={1000}
            >
              <Paper className={classes.Menu}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id='menu-list-grow'
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem
                      // onClick={props.goScene}
                      className={classes.subMenu}
                    >
                      <Typography className={classes.subMenuTitle}>
                        Scenes
                      </Typography>
                    </MenuItem>
                    <MenuItem
                      // onClick={props.goWorkflow}
                      className={classes.subMenu}
                    >
                      <Typography className={classes.subMenuTitle}>
                        Workflow
                      </Typography>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Fragment>
  )
}

export { AddWidget }
