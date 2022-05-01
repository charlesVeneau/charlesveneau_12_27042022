import colors from '../../utils/style/color';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderBlock = styled.header`
  margin-bottom: 60px;
  & p {
    font-weight: regular;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 2.67em;
  margin-top: 0;
  font-weight: 500;
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
