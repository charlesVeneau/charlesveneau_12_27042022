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
  padding: 32px;
  display: flex;
  align-items: center;
  gap: 24px;
  & + & {
    margin-top: 39px;
  }
`;

const CardImg = styled.div`
  border-radius: 6px;
  background-color: ${colors.mediumGrey};
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.calories {
    background-color: rgba(255, 0, 0, 0.07);
  }
  &.proteines {
    background-color: rgba(74, 184, 255, 0.1);
  }
  &.glucides {
    background-color: rgba(249, 206, 35, 0.1);
  }
  &.lipides {
    background-color: rgba(253, 81, 129, 0.1);
  }
`;

const CardInfo = styled.div``;

const CardValue = styled.p`
  color: ${colors.lowBlack};
  font-size: 1.11em;
  font-weight: bold;
  margin: 0;
`;

const CardKey = styled.p`
  color: ${colors.mediumGrey};
  text-transform: capitalize;
  margin: 8px 0 0;
  font-size: 0.78em;
`;

/**
 * Return a number with a coma for the thousands
 * @param { Number} value
 * @returns { String }
 * @author Charles
 * @version 1.0
 */
function addComaToNumber(value) {
  const valueToString = value.toString();
  let outputValue = '';
  [...valueToString].forEach((number, index) => {
    outputValue += number;
    if (index === 0) {
      outputValue += ',';
    }
  });
  return outputValue;
}

function CounterCard({ keyData, value }) {
  const keyDataFrench = () => {
    switch (keyData) {
      case 'calorieCount':
        return 'calories';
      case 'proteinCount':
        return 'proteines';
      case 'carbohydrateCount':
        return 'glucides';
      case 'lipidCount':
        return 'lipides';
      default:
        break;
    }
  };
  return (
    <Card>
      <CardImg className={keyDataFrench()}>
        {(() => {
          switch (keyDataFrench()) {
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
      <CardInfo>
        <CardValue>
          {value >= 1000 ? addComaToNumber(value) : value}
          {keyDataFrench() === 'calories' ? 'kCal' : 'g'}
        </CardValue>
        <CardKey>{keyDataFrench()}</CardKey>
      </CardInfo>
    </Card>
  );
}

CounterCard.propTypes = {
  keyData: PropTypes.string,
  value: PropTypes.number,
};

export default CounterCard;
