import styled from 'styled-components';
import colors from '../../utils/style/color';
import { useAxios } from '../../utils/hooks';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from 'recharts';

const IntensityGraph = styled.div`
  background-color: ${colors.lowBlack};
  border-radius: 5px;
  grid-column: 2;
  height: 263px;
  color: ${colors.tertiary};
`;

/**
 * Get response from API and format to translate in french and push it to data Array
 * @param { Object } data
 * @returns { Array }
 */

/* function getFormattedPerformances(data) {
  data.forEach((performance) => {
    performance.kind = data.kind.toString(performance.kind);
  });
  console.log(data);
} */

function IntensityBlock() {
  const { data, isLoading, error } = useAxios(`/performance`);
  // getFormattedPerformances(data);
  if (!isLoading && !error)
    return (
      <IntensityGraph>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data.data}>
            <PolarGrid />
            <PolarAngleAxis
              dataKey="kind"
              axisLine={false}
              color={colors.tertiary}
            />
            <Radar
              name="performance"
              dataKey="value"
              fill={colors.secondary}
              fillOpacity={0.7}
            />
          </RadarChart>
        </ResponsiveContainer>
      </IntensityGraph>
    );
}

export default IntensityBlock;
