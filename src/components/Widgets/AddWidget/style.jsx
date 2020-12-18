import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    color: '#fafafa',
    right: '48px',
    width: '80px',
    bottom: '28px',
    cursor: 'pointer',
    height: '80px',
    padding: '12px',
    display: 'flex',
    position: 'fixed',
    alignContent: 'center',
    borderRadius: '50%',
    background: '#2BB38B 0% 0% no-repeat padding-box',
    boxShadow: '0px 12px 24px #00000029',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    zIndex: 9999
  },
  icon: {
    font: 'Bold 4rem Montserrat'
  },
  rootMenu: {
    display: 'flex'
  },
  paper: {
    marginRight: theme.spacing(4)
  },
  Menu: {
    background: 'transparent',
    boxShadow: 'none'
  },
  subMenu: {
    background: '#D9F0EA',
    boxShadow: '0px 6px 12px #00000029',
    marginTop: theme.spacing(4),
    padding: theme.spacing(2, 3),
    borderRadius: 10,
    textAlign: 'center',
    '&:hover': {
      background: '#cce0db 0% 0% no-repeat padding-box'
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(1, 2)
    }
  },
  subMenuTitle: {
    color: '#2BB38B',
    font: 'Bold 20px Montserrat',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      font: 'Bold 12px Montserrat',
      marginBottom: 0
    }
  }
}))
