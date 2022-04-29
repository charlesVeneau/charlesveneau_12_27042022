import NavbarMain from '../components/NavbarMain';
import NavbarSecond from '../components/NavbarSecond';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import styled from 'styled-components'

const AppBlock = styled.div`
max-width: 1800px;
margin: 0 auto;
`

function App() {
  return (
    <AppBlock>
      <NavbarMain />
      <NavbarSecond />
      <Header />
      <Dashboard />
    </AppBlock>
  );
}

export default App;
