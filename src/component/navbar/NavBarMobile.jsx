import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Button,
  Image,
  NavbarMenuToggle,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react'
import logo from '../../assets/images/logo-nuevo.png'
import './NavBar.css'
import {Link} from 'react-scroll'
import {useState} from 'react'

const NavBarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = ['¿Que es?', '¿Como funciona?', 'Escenarios', 'Beneficios']
  return (
    <Navbar
      className="navbar-container"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
      </NavbarContent>
      <div className="logo-pibi">
        <img src={logo} width={100} alt="Pibi Logo" />
      </div>
      {/* <NavbarBrand justify="center"> */}
      {/* </NavbarBrand> */}
      <NavbarMenu>
        <Link
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          to="what-is"
          className="navbar-link"
          spy={true}
          smooth={true}
          size="lg"
          color="primary"
        >
          ¿Qué es?
        </Link>
        <Link
          to="how-it-works"
          className="navbar-link"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          spy={true}
          smooth={true}
        >
          ¿Cómo funciona?
        </Link>
        <Link
          to="scenarios"
          className="navbar-link"
          spy={true}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          smooth={true}
        >
          Escenarios
        </Link>
        <Link
          to="benefit"
          className="navbar-link"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          spy={true}
          smooth={true}
        >
          Beneficios
        </Link>
        <Button size="md" radius="sm" className="m-3 dark">
          <Link to="contact-us" onClick={() => setIsMenuOpen(!isMenuOpen)} spy={true} smooth={true}>
            Solicitá una demo
          </Link>
        </Button>
      </NavbarMenu>
      <div></div>
    </Navbar>
  )
}

export default NavBarMobile
