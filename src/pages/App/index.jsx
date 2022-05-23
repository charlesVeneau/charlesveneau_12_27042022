import NavbarMain from '../../components/NavbarMain';
import NavbarSecond from '../../components/NavbarSecond';
import Header from '../../components/Header';
import Dashboard from '../../components/Dashboard';
import Error from '../../components/Error';
import styled from 'styled-components';
import { useContext } from 'react';
import { UserContext } from '../../utils/context';
import breakpoints from '../../utils/style/breakpoints';

const AppBlock = styled.div`
  margin: 0 auto;
`;

const MainBlock = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  grid-template-rows: calc(100vh - 70px);
  @media screen and (min-width: ${breakpoints.bigScreen}) {
    grid-template-columns: 117px auto;
    grid-template-rows: calc(100vh - 91px);
  }
`;

const Container = styled.section`
  flex-grow: 1;
  margin: 30px 36px 0;
  @media screen and (min-width: ${breakpoints.bigScreen}) {
    margin: 69px 109px;
  }
`;

function App() {
  const { data, isLoading, error } = useContext(UserContext);
  if (!isLoading)
    return (
      <AppBlock>
        <NavbarMain />
        <MainBlock>
          <NavbarSecond />
          <Container>
            {error && <Error />}
            {!error && (
              <Header firstName={data ? data.userInfos.firstName : ''} />
            )}
            <Dashboard />
          </Container>
        </MainBlock>
      </AppBlock>
    );
}

export default App;
