import colors from '../../utils/style/color';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useAxios } from '../../utils/hooks';

const HeaderBlock = styled.header`
  & p {
    font-weight: regular;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 2.67em;
  margin-top: 0;
  & span {
    color: ${colors.secondary};
  }
`;

function Header({ user }) {
  const { data, isLoading } = useAxios(`http://localhost:3000/user/${user}`);
  return (
    <HeaderBlock>
      <HeaderTitle>
        Bonjour <span>{data.userInfos.firstName}</span>
      </HeaderTitle>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </HeaderBlock>
  );
}

Header.propTypes = {
  user: PropTypes.number,
};

export default Header;
