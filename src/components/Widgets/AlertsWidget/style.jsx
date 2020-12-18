import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    padding: '20px',
    // width: '100%',
    // height: '100%',
    background: '#FAFAFA',
    boxShadow: 'none'
  },
  action: {
    margin: 'auto',
    border: '2px dashed #2BB38B',
    borderRadius: '20px',
    opacity: 1,
    width: '80%',
    padding: '10px',
    textAlign: 'center'
  },
  NavAlert: {
    paddingTop: '0px',
    '&:hover': {
      background: 'none',
      color: '#2BB38B'
    }
  },
  title: {
    textAlign: 'center',
    color: '#2BB38B',
    fontWeight: 'bold'
  },
  alertNavLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})