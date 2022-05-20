import colors from '../../utils/style/color';
import breakpoints from '../../utils/style/breakpoints';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderBlock = styled.header`
  margin-bottom: 30px;
  @media screen and (min-width: ${breakpoints.bigScreen}) {
    margin-bottom: 60px;
  }
  & p {
    font-weight: 400;
    font-size: 0.8em;
    margin: 0;
    @media screen and (min-width: ${breakpoints.bigScreen}) {
      font-size: 1em;
    }
  }
`;

const HeaderTitle = styled.h1`
  font-size: 1.4em;
  margin: 0 0 0.6em;
  font-weight: 500;
  @media screen and (min-width: ${breakpoints.bigScreen}) {
    font-size: 2.67em;
  }
  & span {
    color: ${colors.secondary};
  }
`;

function Header({ firstName }) {
  return (
    <HeaderBlock>
      <HeaderTitle>
        Bonjour <span>{firstName}</span>
      </HeaderTitle>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </HeaderBlock>
  );
}

Header.propTypes = {
  firstName: PropTypes.string,
};

export default Header;
