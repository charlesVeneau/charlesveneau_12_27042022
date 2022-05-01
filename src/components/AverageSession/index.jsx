import styled from 'styled-components';
import colors from '../../utils/style/color';

const AverageGraph = styled.div`
  background-color: ${colors.lightGrey};
  border-radius: 5px;
  grid-column: 1;
  height: 263px;
`;

function AverageSession() {
  return <AverageGraph>Averagegraph</AverageGraph>;
}

export default AverageSession;
