import CounterCard from '../CounterCard';
import Error from '../Error';
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
  if (!isLoading && !error)
    return (
      <CounterCardsBlock>
        {Object.entries(keyData).map((key, index) => {
          return (
            <CounterCard
              key={`${key}-${index}`}
              keyData={key[0]}
              value={key[1]}
            />
          );
        })}
      </CounterCardsBlock>
    );
  else if (error) {
    return (
      <CounterCardsBlock>
        <Error />
      </CounterCardsBlock>
    );
  }
}

export default CounterCards;
