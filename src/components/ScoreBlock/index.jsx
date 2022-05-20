import styled from 'styled-components';
import colors from '../../utils/style/color';
import { useContext } from 'react';
import { UserContext } from '../../utils/context';
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';

const ScoreGraph = styled.div`
  background-color: ${colors.lightGrey};
  position: relative;
  border-radius: 5px;
  grid-column: 3;
  height: 263px;
  &:before {
    content: '';
    background-color: ${colors.tertiary};
    position: absolute;
    border-radius: 150px;
    width: calc(66px * 2);
    height: calc(66px * 2);
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ScoreGraphTitle = styled.p`
  color: ${colors.lowBlack};
  font-size: 15px;
  font-weight: 500;
  position: absolute;
  top: 24px;
  left: 30px;
`;
const ScoreGraphLegend = styled.p`
  color: ${colors.lowBlack};
  font-size: 26px;
  font-weight: bold;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  line-height: 26px;
  max-width: 95px;
  span {
    color: ${colors.mediumGrey};
    font-size: 16px;
    font-weight: 500;
    display: inline-block;
  }
`;

function ScoreBlock() {
  const { data, isLoading, error } = useContext(UserContext);
  const todayScore = [{ name: 'todayScore', value: data.todayScore * 100 }];

  if (!isLoading && !error) {
    return (
      <ScoreGraph>
        <ScoreGraphTitle>Score</ScoreGraphTitle>
        <ScoreGraphLegend>
          {data.todayScore * 100}% <span>de votre objectif</span>
        </ScoreGraphLegend>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            innerRadius={72}
            barSize={10}
            data={todayScore}
            startAngle={90}
            endAngle={450}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              clockWise
              dataKey="value"
              cornerRadius="50%"
              fill={colors.secondaryDarken}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </ScoreGraph>
    );
  }
}

export default ScoreBlock;
