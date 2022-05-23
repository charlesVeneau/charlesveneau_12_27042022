import styled from 'styled-components';
import Error from '../Error';
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
 * @param { Props } props containing the payload Obj, label boolean, and active boolean
 * @param { Object } payload
 * @param { String } label
 * @param { Boolean } active
 * @returns { HTMLElement } Recharts custom label for barChart component
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

/**
 * Set a cutom text for the X axis ticks to show only the day date
 * @param { Number } x coordonate of the x axis
 * @param { Number } y coordonate of the y axis
 * @param { Object } payload
 * @returns { Components } Recharts custom text element for barChart X axis
 */
function CustomXLabel({ x, y, payload }) {
  /**
   * Get day of the month based on the payload value which format is YYYY-MM-DD
   * @type { String }
   */
  const dayDate = payload.value.split('-')[payload.value.split('-').length - 1];
  return (
    <text
      orientation="bottom"
      width="10"
      height="30"
      type="category"
      x={x}
      y={y + 16}
      stroke="none"
      fill="#989EAC"
      className="recharts-text recharts-cartesian-axis-tick-value"
      textAnchor="middle"
    >
      <tspan>{dayDate[0] === '0' ? dayDate[1] : dayDate}</tspan>
    </text>
  );
}

function DailyActivity() {
  const { data, isLoading, error } = useAxios(`/activity`);
  const { sessions } = data;

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
  else if (error)
    return (
      <DailyGraph>
        <Error />
      </DailyGraph>
    );
}

export default DailyActivity;
