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
      <NavbarBrand justify="start">
        <img src={logo} className="mr-5" width={100} alt="Pibi Logo" />
      </NavbarBrand>
      <NavbarMenu>
        <Link
          to="what-is"
          className="navbar-link"
          spy={true}
          smooth={true}
          size="lg"
          color="primary"
        >
          ¿Que es?
        </Link>
        <Link to="how-it-works" className="navbar-link" spy={true} smooth={true}>
          ¿Como funciona?
        </Link>
        <Link to="scenarios" className="navbar-link" spy={true} smooth={true}>
          Escenarios
        </Link>
        <Link to="benefit" className="navbar-link" spy={true} smooth={true}>
          Beneficios
        </Link>
        <Button size="md" radius="sm" className="m-3 dark">
          <Link to="contact-us" spy={true} smooth={true}>
            Solicitá una demo
          </Link>
        </Button>
      </NavbarMenu>
    </Navbar>
  )
}

export default NavBarMobile