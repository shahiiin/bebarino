import { NavLink } from "react-router-dom";
import LoginEnter from "./../../assets/navbar/login-enter.png";
const NavbarList = () => {
    return (
        <ul>
            <div className="row">
                <li>
                    <NavLink to="/helper" className="main-header__navbar-item-requests">
                    درخواست‌ها     
                    </NavLink>
                </li>
                <li className="ml-md-4">
                    <NavLink to="/how-works">
                    چطور کار می‌کند ؟    
                    </NavLink>
                </li>
                <li className="ml-md-4">
                    <NavLink to="/term-of-use">
                    قوانین و مقررات      
                    </NavLink>
                </li>
                <li className="ml-md-4">
                    <NavLink to="/faq">
                    سوالات پر‌تکرار     
                    </NavLink>
                </li>
                <li className="ml-md-4">
                    <NavLink to="/about">
                    درباره ما       
                    </NavLink>
                </li>
                <li className="main-header__navbar-item-login">
                <NavLink to="/signin">
                    <img src={LoginEnter} alt="login text icon" />
                    <span className="mr-2">ورود/ثبت نام </span>   
                </NavLink>
                </li>
            </div>
              </ul>
    )
}

export default NavbarList;
