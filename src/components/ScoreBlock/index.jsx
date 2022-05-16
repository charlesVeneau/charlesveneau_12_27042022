import styled from 'styled-components';
import colors from '../../utils/style/color';
import { useContext } from 'react';
import { UserContext } from '../../utils/context';

const ScoreGraph = styled.div`
  background-color: ${colors.lightGrey};
  border-radius: 5px;
  grid-column: 3;
  height: 263px;
`;

function ScoreBlock() {
  const { data, isLoading, error } = useContext(UserContext);
  const todayScore = data.todayScore * 100;

  if (!isLoading && !error) {
    return (
      <ScoreGraph>
        <h4>Score</h4>
        {todayScore}%
      </ScoreGraph>
    );
  }
}

export default ScoreBlock;
