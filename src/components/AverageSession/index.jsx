import styled from 'styled-components';
import colors from '../../utils/style/color';
import { useAxios } from '../../utils/hooks';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
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

  if (!isLoading && !error)
    return (
      <AverageGraph>
        <p>Durée moyenne des sessions</p>
        <ResponsiveContainer width="100%" height="80%">
          <AreaChart
            // width={730}
            // height={250}
            data={data.sessions}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="day" />
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <Tooltip content={<CustomToolTip />} />
            <Area
              type="monotone"
              dataKey="sessionLength"
              stroke={colors.tertiary}
              fillOpacity={0.3}
              fill={colors.tertiary}
            />
          </AreaChart>
        </ResponsiveContainer>
      </AverageGraph>
    );
}

export default AverageSession;
