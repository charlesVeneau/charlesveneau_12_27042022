import NavbarMain from '../../components/NavbarMain';
import NavbarSecond from '../../components/NavbarSecond';
import Header from '../../components/Header';
import Dashboard from '../../components/Dashboard';
import styled from 'styled-components';
import { useContext } from 'react';
import { UserContext } from '../../utils/context';

const AppBlock = styled.div`
  margin: 0 auto;
`;

const MainBlock = styled.div`
  display: grid;
  grid-template-columns: 117px auto;
  grid-template-rows: calc(100vh - 91px);
`;

const Container = styled.section`
  flex-grow: 1;
  padding: 69px 109px;
`;

function App() {
  const { data, isLoading, error } = useContext(UserContext);
  if (!isLoading && !error)
    return (
      <AppBlock>
        <NavbarMain />
        <MainBlock>
          <NavbarSecond />
          <Container>
            <Header firstName={data ? data.userInfos.firstName : ''} />
            <Dashboard />
          </Container>
        </MainBlock>
      </AppBlock>
    );
}

export default App;
