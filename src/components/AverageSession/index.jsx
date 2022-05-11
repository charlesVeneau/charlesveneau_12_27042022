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

function AverageSession() {
  const { data, isLoading, error } = useAxios(`/average-sessions`);

  if (!isLoading && !error)
    return (
      <AverageGraph>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={730}
            height={250}
            data={data.sessions}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" />
            <YAxis />
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <Tooltip />
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
