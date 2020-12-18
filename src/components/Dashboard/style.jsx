import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  draggable: {
    border: '1px solid #ddd',
    cursor: 'grab',
    padding: '5px 20px',
    borderRadius: '25px',
    background: '#fafafa',
    boxShadow: '0px 6px 12px #00000029',
    position: 'relative'
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none'
  },
  layout: {
    minHeight: '200px',
    height: '100%',
    width: '100%',
    background:
      '#000 linear-gradient(109deg, #E8FFF8 0%, #2BB38B 100%) 0% 0% no-repeat padding-box',
    borderRadius: '105px 0px 0px',
    opacity: 1,
  },
  notDraggable: {
    border: '1px solid #ddd',
    cursor: 'not-allowed',
    padding: '30px 20px 20px 20px',
    borderRadius: '25px',
    backgroundColor: '#fafafa',
    boxShadow: '0px 6px 12px #00000029'
  },
  zoomIn: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    cursor: 'pointer'
  }
}))
