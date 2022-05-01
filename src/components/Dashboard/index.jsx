import CounterCards from '../CounterCards';
import DailyActivity from '../DailyActivity';
import AverageSession from '../AverageSession';
import IntensityBlock from '../IntensityBlock';
import ScoreBlock from '../ScoreBlock';
import styled from 'styled-components';

const DashboardBlock = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 30px;
`;

const GraphMainBlock = styled.div`
  grid-column-start: 1;
  grid-column-end: span 3;
  grid-row-end: span 2;
`;

const GraphSecondaryBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 30px;
`;

function Dashboard() {
  return (
    <DashboardBlock>
      <GraphMainBlock>
        <DailyActivity />
        <GraphSecondaryBlock>
          <AverageSession />
          <IntensityBlock />
          <ScoreBlock />
        </GraphSecondaryBlock>
      </GraphMainBlock>
      <CounterCards />
    </DashboardBlock>
  );
}

export default Dashboard;
