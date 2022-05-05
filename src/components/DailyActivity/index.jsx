import styled from 'styled-components';
import { useAxios } from '../../utils/hooks';
import colors from '../../utils/style/color';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const DailyGraph = styled.div`
  background-color: ${colors.lightGrey};
  border-radius: 5px;
  height: 320px;
  padding: 24px 26px 24px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const GraphInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GraphTitle = styled.p`
  font-size: 0.83em;
  font-weight: 500;
  margin: 0;
`;

const GraphLegendBlock = styled.div`
  display: flex;
  gap: 40px;
`;

const GraphLegendText = styled.p`
  color: ${colors.mediumGrey};
  font-size: 14px;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -18px;
    width: 8px;
    height: 8px;
    border-radius: 12px;
    background-color: ${(props) =>
      props.calories ? colors.secondaryDarken : colors.lowBlack};
  }
`;

const CustomToolTipBlock = styled.div`
  color: ${colors.tertiary};
  background-color: ${colors.secondaryDarken};
  padding: 12px;
  p {
    font-size: 10px;
    font-weight: 500;
  }
  p + p {
    margin-top: 16px;
  }
`;

/**
 * Set a cutom tool tip for the graph bar
 * @param {string} payload
 * @param {string} label
 * @param {boolean} active
 * @returns { components }
 */
function CustomToolTip({ payload, label, active }) {
  if (active) {
    return (
      <CustomToolTipBlock className="custom-tooltip">
        {payload.map((element, index) => {
          return (
            <p key={`${element}-${index}`}>
              {element.value}
              {element.dataKey === 'kilogram' ? 'kg' : 'kCal'}
            </p>
          );
        })}
      </CustomToolTipBlock>
    );
  }
}

function DailyActivity() {
  const userID = 12;
  const { data, isLoading, error } = useAxios(
    `http://localhost:3000/user/${userID}/activity`
  );
  const sessions = data.sessions;

  if (!isLoading && !error)
    return (
      <DailyGraph>
        <GraphInfo>
          <GraphTitle>Activité quotidienne</GraphTitle>
          <GraphLegendBlock>
            <GraphLegendText>Poids (kg)</GraphLegendText>
            <GraphLegendText calories>Calories brûlées (kCal)</GraphLegendText>
          </GraphLegendBlock>
        </GraphInfo>
        <ResponsiveContainer width="100%" height={215}>
          <BarChart data={sessions} barCategoryGap={40}>
            <CartesianGrid vertical={false} strokeDasharray="4" />
            <XAxis dataKey="day" axisLine={true} />
            <YAxis
              yAxisId="left"
              dataKey="calories"
              orientation="left"
              hide={true}
            />
            <YAxis
              yAxisId="right"
              dataKey="kilogram"
              orientation="right"
              axisLine={false}
              interval="preserveStartEnd"
            />
            <Tooltip content={<CustomToolTip />} />
            <Bar
              yAxisId="left"
              dataKey="calories"
              fill={colors.lowBlack}
              barSize={7}
              radius={[3, 3, 0, 0]}
            />
            <Bar
              yAxisId="right"
              dataKey="kilogram"
              fill={colors.secondaryDarken}
              barSize={7}
              radius={[3, 3, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </DailyGraph>
    );
}

export default DailyActivity;
