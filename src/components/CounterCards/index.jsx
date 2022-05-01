import CounterCard from '../CounterCard';
import styled from 'styled-components';
import { useContext } from 'react';
import { UserContext } from '../../utils/context';

const CounterCardsBlock = styled.aside`
  grid-column-start: 4;
  grid-row-end: span 2;
`;

function CounterCards() {
  const { data, isLoading, error } = useContext(UserContext);
  const keyData = data.keyData;

  return (
    <CounterCardsBlock>
      <CounterCard keyData="calories" value={keyData.calorieCount} />
      <CounterCard keyData="proteines" value={keyData.proteinCount} />
      <CounterCard keyData="glucides" value={keyData.carbohydrateCount} />
      <CounterCard keyData="lipides" value={keyData.lipidCount} />
    </CounterCardsBlock>
  );
}

export default CounterCards;
