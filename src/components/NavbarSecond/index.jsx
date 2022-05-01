import colors from '../../utils/style/color';
import styled from 'styled-components';
import yoga from '../../assets/yoga.svg';
import swimming from '../../assets/swimming.svg';
import cycling from '../../assets/cycling.svg';
import weight from '../../assets/weight.svg';

const AsideNavbar = styled.aside`
  background-color: ${colors.primary};
  color: ${colors.tertiary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 39px;
  width: 117px;
  height: 100%;
  gap: 25%;
`;

const Copyright = styled.p`
  text-orientation: sideways;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  font-size: 0.67em;
  font-weight: 500;
`;

const NavbarList = styled.ul`
  padding: 0;
`;

const ListElt = styled.li`
  list-style: none;
  & + & {
    margin-top: 20px;
  }
`;

const Icon = styled.button`
  border: none;
  background-color: ${colors.tertiary};
  border-radius: 6px;
  width: 64px;
  height: 64px;
`;

function NavbarSecond() {
  return (
    <AsideNavbar>
      <NavbarList>
        <ListElt>
          <Icon>
            <img src={yoga} alt="yoga" />
          </Icon>
        </ListElt>
        <ListElt>
          <Icon>
            <img src={swimming} alt="swimming" />
          </Icon>
        </ListElt>
        <ListElt>
          <Icon>
            <img src={cycling} alt="cycling" />
          </Icon>
        </ListElt>
        <ListElt>
          <Icon>
            <img src={weight} alt="weight" />
          </Icon>
        </ListElt>
      </NavbarList>
      <Copyright>Copyright, SportSee 2020</Copyright>
    </AsideNavbar>
  );
}

export default NavbarSecond;
