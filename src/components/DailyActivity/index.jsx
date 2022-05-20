import styled from 'styled-components';
import { useAxios } from '../../utils/hooks';
import colors from '../../utils/style/color';
import breakpoints from '../../utils/style/breakpoints';
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
  height: 280px;
  padding: 18px 20px 18px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: ${breakpoints.bigScreen}) {
    height: 320px;
    padding: 24px 26px 24px 32px;
  }
  .recharts-layer {
    tspan,
    .recharts-text {
      font-size: 14px;
    }
  }
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
  margin: 0;
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
 * @param { string } payload
 * @param { string } label
 * @param { boolean } active
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

function CustomXLabel({ x, y, payload }) {
  const dateArray = payload.value.split('-');
  const dayDate = dateArray[dateArray.length - 1];
  return (
    <text
      orientation="bottom"
      width="903"
      height="30"
      type="category"
      x={x}
      y={y + 16}
      stroke="none"
      fill="#989EAC"
      className="recharts-text recharts-cartesian-axis-tick-value"
      textAnchor="middle"
    >
      {dayDate[0] === '0' ? dayDate[1] : dayDate}
    </text>
  );
}

function DailyActivity() {
  const { data, isLoading, error } = useAxios(`/activity`);
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
          <BarChart data={sessions}>
            <CartesianGrid
              vertical={false}
              strokeDasharray="4"
              horizontalPoints={[126, 63, 10]}
            />
            <XAxis dataKey="day" axisLine={true} tick={CustomXLabel} />
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
              tickLine={false}
              type="number"
              domain={['dataMin - 2', 'dataMax + 2']}
            />
            <Tooltip content={<CustomToolTip />} />
            <Bar
              yAxisId="right"
              dataKey="kilogram"
              fill={colors.lowBlack}
              barSize={7}
              radius={[3, 3, 0, 0]}
            />
            <Bar
              yAxisId="left"
              dataKey="calories"
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
