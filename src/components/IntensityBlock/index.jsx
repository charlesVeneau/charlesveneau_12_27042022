import styled from 'styled-components';
import colors from '../../utils/style/color';

const IntensityGraph = styled.div`
  background-color: ${colors.lightGrey};
  border-radius: 5px;
  grid-column: 2;
  height: 263px;
`;

function IntensityBlock() {
  return <IntensityGraph>IntensityGraph</IntensityGraph>;
}

export default IntensityBlock;
