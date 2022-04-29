import logo from '../../assets/logo.svg'
import styled from 'styled-components'
import colors from '../../utils/style/color'

const Navbar = styled.nav`
background-color: #020203 ;
display:flex;
align-items: center;
justify-content:space-between;
gap: 140px;
height: 91px;
padding: 0 91px 0 28px;
`
const NavbarList = styled.ul`
display: flex;
flex-grow: 1;
align-items: center;
justify-content:space-between;
color: ${colors.secondary}
`

const ListElement = styled.li`
    list-style: none;
`

const Link = styled.a`
color: ${colors.tertiary};
text-decoration: none;
font-size: 1.33em;
`

function NavbarMain() {
    return ( 
        <Navbar>
            <Link href='#'><img src={logo} alt="sportsee logo" /></Link>
            <NavbarList>
                <ListElement><Link href="#">Accueil</Link></ListElement>
                <ListElement><Link href="#">Profil</Link></ListElement>
                <ListElement><Link href="#">Réglage</Link></ListElement>
                <ListElement><Link href="#">Communauté</Link></ListElement>
            </NavbarList>
        </Navbar>
     );
}

export default NavbarMain;