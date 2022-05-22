import styled from 'styled-components';
import Error from '../Error';
import colors from '../../utils/style/color';
import breakpoints from '../../utils/style/breakpoints';
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
  height: 228px;
  color: ${colors.tertiary};
  .recharts-polar-grid-angle {
    line {
      stroke: none;
    }
  }
  @media screen and (min-width: ${breakpoints.bigScreen}) {
    height: 263px;
  }
`;
const CustomTextTick = styled.text`
  font-size: 10px;
  top: 8px;
  @media screen and (min-width: ${breakpoints.bigScreen}) {
    font-size: 12px;
  }
`;

/**
 * Customize payload value to get radarChart tick string in french
 * @param { Number } x
 * @param { Number } y
 * @param { Object } payload
 * @returns { HtmlElement } Recharts styled custom tick for the RadarChart Element
 */
function CustomRadarLabel({ x, y, payload }) {
  const cos = Math.cos((-payload.coordinate * Math.PI) / 180);
  let tick = '';
  switch (payload.value) {
    case 1:
      tick = 'Cardio';
      break;
    case 2:
      tick = 'Energie';
      break;
    case 3:
      tick = 'Endurance';
      break;
    case 4:
      tick = 'Force';
      break;
    case 5:
      tick = 'Vitesse';
      break;
    case 6:
      tick = 'Intensité';
      break;
    default:
      tick = '';
  }
  return (
    <CustomTextTick
      x={x}
      y={y > 200 ? y + 10 : y}
      type="category"
      textAnchor={cos < 0.09 && cos > 0 ? 'middle' : cos >= 0 ? 'start' : 'end'}
    >
      {tick}
    </CustomTextTick>
  );
}

function IntensityBlock() {
  const { data, isLoading, error } = useAxios(`/performance`);
  function RadarOuter() {
    return window.innerWidth <= 1083 ? 60 : 80;
  }
  if (!isLoading && !error) {
    return (
      <IntensityGraph>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            data={data.data}
            fill={colors.tertiary}
            outerRadius={RadarOuter()}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" tick={CustomRadarLabel} />
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
  } else if (error) {
    return (
      <IntensityGraph>
        <Error />
      </IntensityGraph>
    );
  }
}

export default IntensityBlock;
