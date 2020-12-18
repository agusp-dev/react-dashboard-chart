import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    background: '#fff'
  },
  flexGrow: {
    flexGrow: 1
  },
  NavButton: {
    // border: '1px solid #E5E5E5',
    borderRadius: '15px',
    padding: '10px 20px',
    marginLeft: '20px',
    marginRight: '20px',
    color: '#2BB38B'
  },
  logo: {
    height: 55,
    width: 209
  },
  logo_small: {
    height: 55
  },
  NavAll: {
    marginTop: theme.spacing(2)
  },
  NavList: {
    textAlign: 'center'
  },
  NavPersonalConfig: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: '#bdbdbd'
  },
  NavAlert: {
    color: '#DAD7D6',
    paddingTop: '5px',
    '&:hover': {
      background: 'none',
      color: '#2BB38B'
    }
  },
  NavAlertBadge: {},
  NavName: {
    marginTop: '10px',
    marginLeft: '5px',
    color: '#888888',
    fontWeight: 'bold',
    cursor: 'pointer',
    height: '35px'
  },
  paper: {
    marginRight: theme.spacing(2)
  },
  badge: {
    background: 'blue'
  },
  navMenuItem: {
    color: '#333333 !important'
  },
  removeOver: {
    '&:hover': {
      background: 'none',
      cursor: 'auto'
    }
  },
  progress: {
    position: 'absolute',
    top: '70px',
    left: '5px'
  }
}))