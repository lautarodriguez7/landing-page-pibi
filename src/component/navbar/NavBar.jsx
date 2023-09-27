import {Navbar, NavbarBrand, NavbarContent, Link, Button, Image} from '@nextui-org/react'
import logo from '../../assets/images/logo-pibi.ico'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="navbar-div">
      <Navbar className="navbar">
        <NavbarBrand justify="start">
          <Image src={logo} className="mr-5" width={100} alt="Pibi Logo" />
        </NavbarBrand>
        <NavbarContent justify="center">
          <Link color="foreground" href="#">
            Acerca de PiBi
          </Link>
          <Link color="foreground" href="#">
            Beneficios
          </Link>
          <Link color="foreground" href="#">
            Pricing
          </Link>
          <Button size="md" radius="sm" className="m-3 dark">
            Solicitá una demo
          </Button>
        </NavbarContent>
      </Navbar>
    </div>
  )
}

export default NavBar
