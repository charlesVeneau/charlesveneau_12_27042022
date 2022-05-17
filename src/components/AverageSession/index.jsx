import styled from 'styled-components';
import colors from '../../utils/style/color';
import { useAxios } from '../../utils/hooks';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';

const AverageGraph = styled.div`
  background-color: ${colors.secondary};
  border-radius: 5px;
  grid-column: 1;
  height: 263px;
  color: ${colors.tertiary};
`;

const CustomToolTipBlock = styled.div`
  color: ${colors.primary};
  background-color: ${colors.tertiary};
  padding: 4px 10px;
  p {
    font-size: 10px;
    font-weight: 500;
  }
`;

const AverageGraphTitle = styled.p`
  color: ${colors.tertiary};
  opacity: 0.5;
  max-width: 164px;
  margin: 29px 0 0 34px;
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
              min
            </p>
          );
        })}
      </CustomToolTipBlock>
    );
  }
}

function AverageSession() {
  const { data, isLoading, error } = useAxios(`/average-sessions`);
  if (!isLoading && !error) {
    const sessions = data.sessions;
    //Simple switch to set the first letter of the day instead of the number in the week
    sessions.forEach((session) => {
      switch (session.day) {
        case 1:
          session.day = 'L';
          break;
        case 2:
          session.day = 'M';
          break;
        case 3:
          session.day = 'M';
          break;
        case 4:
          session.day = 'J';
          break;
        case 5:
          session.day = 'V';
          break;
        case 6:
          session.day = 'S';
          break;
        case 7:
          session.day = 'D';
          break;
        default:
          break;
      }
    });
    return (
      <AverageGraph>
        <AverageGraphTitle>Durée moyenne des sessions</AverageGraphTitle>
        <ResponsiveContainer width="100%" height="80%">
          <AreaChart
            data={sessions}
            margin={{ top: 10, right: 0, left: 5, bottom: 20 }}
          >
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              stroke={colors.tertiary}
              fillOpacity={0.3}
            />
            <Tooltip content={<CustomToolTip />} />
            <Area
              type="monotone"
              dataKey="sessionLength"
              stroke={colors.tertiary}
              strokeWidth={2}
              fillOpacity={0.3}
              fill={colors.tertiary}
            />
          </AreaChart>
        </ResponsiveContainer>
      </AverageGraph>
    );
  }
}

export default AverageSession;
