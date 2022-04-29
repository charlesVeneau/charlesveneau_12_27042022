import NavbarMain from '../components/NavbarMain';
import NavbarSecond from '../components/NavbarSecond';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import styled from 'styled-components'

const AppBlock = styled.div`
max-width: 1800px;
margin: 0 auto;
`

const MainBlock = styled.div`
display: flex;
justify-content:start;
align-items: stretch;
height: calc(100vh - 91px);
`

function App() {
  return (
    <AppBlock>
      <NavbarMain />
      <MainBlock>
      <NavbarSecond />
      <div>
      <Header />
      <Dashboard />
      </div>
      </MainBlock>
    </AppBlock>
  );
}

export default App;
