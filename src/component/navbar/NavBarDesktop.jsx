import React, {useState} from 'react'
import {Navbar, NavbarBrand, Button} from '@nextui-org/react'
import {Link} from 'react-scroll'
import logo from '../../assets/images/logo-nuevo.png'
import './NavBar.css'
const NavBarDesktop = () => {
  return (
    <Navbar className="navbar">
      <NavbarBrand justify="start">
        <a href="">
          <img src={logo} className="mr-5" width={100} alt="Pibi Logo" />
        </a>
      </NavbarBrand>
      <Link to="what-is" spy={true} smooth={true}>
        ¿Qué es?
      </Link>
      <Link to="how-it-works" spy={true} smooth={true}>
        ¿Cómo funciona?
      </Link>
      <Link to="scenarios" spy={true} smooth={true}>
        Escenarios
      </Link>
      <Link to="benefit" spy={true} smooth={true}>
        Beneficios
      </Link>
      <Button size="md" radius="sm" className="m-3 dark">
        <Link to="contact-us" spy={true} smooth={true}>
          Solicitá una demo
        </Link>
      </Button>
    </Navbar>
  )
}

export default NavBarDesktop
