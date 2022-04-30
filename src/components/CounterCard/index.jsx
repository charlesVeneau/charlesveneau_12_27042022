import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/style/color';
import calories from '../../assets/flame.svg';
import proteines from '../../assets/chicken.svg';
import glucides from '../../assets/apple.svg';
import lipides from '../../assets/burger.svg';

const Card = styled.div`
  background-color: ${colors.lightGrey};
  border-radius: 5px;
`;

const CardImg = styled.div`
  border-radius: 6px;
  background-color: pink;
`;

function CounterCard({ keyData, value }) {
  return (
    <Card>
      <CardImg>
        {(() => {
          switch (keyData) {
            case 'calories':
              return <img src={calories} alt="" />;
            case 'proteines':
              return <img src={proteines} alt="" />;
            case 'glucides':
              return <img src={glucides} alt="" />;
            case 'lipides':
              return <img src={lipides} alt="" />;
            default:
              break;
          }
        })()}
      </CardImg>
      {keyData}: {value}
      {keyData === 'calories' ? 'kCal' : 'g'}
    </Card>
  );
}

CounterCard.propTypes = {
  keyData: PropTypes.string,
  value: PropTypes.number,
};

export default CounterCard;
