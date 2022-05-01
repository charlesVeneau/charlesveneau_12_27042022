import styled from 'styled-components';
import colors from '../../utils/style/color';

const DailyGraph = styled.div`
  background-color: ${colors.lightGrey};
  border-radius: 5px;
  height: 320px;
`;

function DailyActivity() {
  return <DailyGraph>Dailygraph</DailyGraph>;
}

export default DailyActivity;
