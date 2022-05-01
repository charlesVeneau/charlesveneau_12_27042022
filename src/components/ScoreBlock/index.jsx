import styled from 'styled-components';
import colors from '../../utils/style/color';

const ScoreGraph = styled.div`
  background-color: ${colors.lightGrey};
  border-radius: 5px;
  grid-column: 3;
  height: 263px;
`;

function ScoreBlock() {
  return <ScoreGraph>ScoreGraph</ScoreGraph>;
}

export default ScoreBlock;
