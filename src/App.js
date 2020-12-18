import { Fragment } from 'react'
import { Dashboard } from './components/Dashboard/Dashboard'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Container, Box } from '@material-ui/core'

function App() {
  return (
    <Fragment>
      <Sidebar />
      <Container maxWidth='xl'>
        <Box pt={ 16 }>
          <Dashboard />
        </Box>
      </Container>
    </Fragment>
  );
}

export default App;
