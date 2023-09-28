import {Navbar, NavbarBrand, NavbarContent, Button, Image} from '@nextui-org/react'
import logo from '../../assets/images/logo-pibi.ico'
import './NavBar.css'
import { Link } from 'react-scroll'
const NavBar = () => {
  return (
    <div className="navbar-div">
      <Navbar className="navbar">
        <NavbarBrand justify="start">
          <Image src={logo} className="mr-5" width={100} alt="Pibi Logo" />
        </NavbarBrand>
        {/* <NavbarContent justify="center"> */}
          {/* <Link color="foreground" href="#">
            Acerca de PiBi
          </Link>
          <Link color="foreground" href="#">
            Beneficios
          </Link>
          <Link color="foreground" href="#">
            Pricing
          </Link> */}
               {/* <Link to="demo-request" spy={true} smooth={true}>Demo Request</Link> */}
        <Link to="what-is" spy={true} smooth={true}>Que es</Link>
        <Link to="how-it-works" spy={true} smooth={true}>Como funciona</Link>
        <Link to="scenarios" spy={true} smooth={true}>Escenarios</Link>
        <Link to="benefit" spy={true} smooth={true}>Beneficios</Link>
          <Button size="md" radius="sm" className="m-3 dark">
        <Link to="contact-us" spy={true} smooth={true}>Solicitá una demo</Link>
            
          </Button>
        {/* </NavbarContent> */}
      </Navbar>
    </div>
  )
}

export default NavBar