import NavbarMain from '../../components/NavbarMain';
import NavbarSecond from '../../components/NavbarSecond';
import Header from '../../components/Header';
import Dashboard from '../../components/Dashboard';
import styled from 'styled-components';
import { useAxios } from '../../utils/hooks';

const AppBlock = styled.div`
  max-width: 1800px;
  margin: 0 auto;
`;

const MainBlock = styled.div`
  display: flex;
  justify-content: start;
  align-items: stretch;
  height: calc(100vh - 91px);
`;

const Container = styled.div`
  flex-grow: 1;
  padding: 69px 109px;
`;

const userID = 12;

function App() {
  const { data, isLoading, error } = useAxios(
    `http://localhost:3000/user/${userID}`
  );
  if (!isLoading && !error)
    return (
      <AppBlock>
        <NavbarMain />
        <MainBlock>
          <NavbarSecond />
          <Container>
            <Header firstName={data ? data.userInfos.firstName : 'Charles'} />
            <Dashboard />
          </Container>
        </MainBlock>
      </AppBlock>
    );
}

export default App;
