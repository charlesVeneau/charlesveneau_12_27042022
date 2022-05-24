import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/style/color';
import breakpoints from '../../utils/style/breakpoints';
import calories from '../../assets/flame.svg';
import proteines from '../../assets/chicken.svg';
import glucides from '../../assets/apple.svg';
import lipides from '../../assets/burger.svg';

const Card = styled.div`
  background-color: ${colors.lightGrey};
  border-radius: 5px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  @media screen and (min-width: ${breakpoints.bigScreen}) {
    padding: 32px;
    gap: 24px;
  }
  & + & {
    margin-top: 15px;
    @media screen and (min-width: ${breakpoints.bigScreen}) {
      margin-top: 39px;
    }
  }
`;

const CardImg = styled.div`
  border-radius: 6px;
  background-color: ${colors.mediumGrey};
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${breakpoints.bigScreen}) {
    width: 60px;
    height: 60px;
  }
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

const CardValue = styled.p`
  color: ${colors.lowBlack};
  font-size: 1em;
  font-weight: bold;
  margin: 0;
  @media screen and (min-width: ${breakpoints.bigScreen}) {
    font-size: 1.11em;
  }
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
  /**
   * @type  { String}
   */
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
  /**
   * @return Data name in french
   */
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
      <div>
        <CardValue>
          {value >= 1000 ? addComaToNumber(value) : value}
          {keyDataFrench() === 'calories' ? 'kCal' : 'g'}
        </CardValue>
        <CardKey>{keyDataFrench()}</CardKey>
      </div>
    </Card>
  );
}

CounterCard.propTypes = {
  keyData: PropTypes.string,
  value: PropTypes.number,
};

export default CounterCard;
