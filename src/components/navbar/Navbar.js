import { Link } from 'react-router-dom'
import Logo from "./../../assets/navbar/navbar.png";
import NavbarList from "./NavbarList";
import "./navbar.scss";
const Navbar = () => {
  return (
      <header className="main-header">
        <div className="container">
          <div className="row">
            <div>
              <Link to="/">
              <img src={Logo} alt="logo" />
              </Link>
            </div>
            <nav className="main-header__navbar">
                <NavbarList />
            </nav>
          </div>
        </div>
      </header>
  );
};
export default Navbar;
