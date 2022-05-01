import CounterCards from '../CounterCards';
import styled from 'styled-components';

const DashboardBlock = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 30px;
`;

function Dashboard() {
  return (
    <DashboardBlock>
      <CounterCards />
    </DashboardBlock>
  );
}

export default Dashboard;
