import NavBarDesktop from './NavBarDesktop'
import NavBarMobile from './NavBarMobile'

const NavBar = () => {
  return (
    <div className="navbar-div">
      {window.innerWidth < 1000 ? <NavBarMobile /> : <NavBarDesktop />}
    </div>
  )
}

export default NavBar
