import "./list-item.scss";
import { NavLink } from "react-router-dom";
import Money from "../../../../../assets/content/money-svg.svg";
import RequestIcon from "../../../../../assets/content/requests.png";
import Exit from "../../../../../assets/content/exit.png";
import UserProfile from "../../../../../assets/content/user-profile.png";
import Bell from "../../../../../assets/content/bell.png";
import Star from "../../../../../assets/content/star-favourite.png";

const ListItems = () => {
  return (
    <nav className="requests__sidebar__nav">
      <ul className="requests__sidebar__nav__list">
        <li className="requests__sidebar__nav__item active">
          <NavLink to="#" className="requests__sidebar__nav__link">
            <img src={RequestIcon} alt="requests" />
            <span className="requests__sidebar__nav__link__text mr-2">
              درخواست‌ها
            </span>
          </NavLink>
        </li>
        <li className="requests__sidebar__nav__item">
          <NavLink to="#" className="requests__sidebar__nav__link">
            <img src={Money} alt="transactions" />
            <span className="requests__sidebar__nav__link__text mr-2">
              تراکنش مالی
            </span>
          </NavLink>
        </li>
        <li className="requests__sidebar__nav__item">
          <NavLink to="#" className="requests__sidebar__nav__link">
            <img src={Star} alt="comments" />
            <span className="requests__sidebar__nav__link__text mr-2">
              امتیازها و نظرات
            </span>
          </NavLink>
        </li>
        <li className="requests__sidebar__nav__item">
          <NavLink to="#" className="requests__sidebar__nav__link">
            <img src={Bell} alt="notifications" />
            <span className="requests__sidebar__nav__link__text mr-2">
              اعلان‌ها
            </span>
          </NavLink>
        </li>
        <li className="requests__sidebar__nav__item">
          <NavLink to="#" className="requests__sidebar__nav__link">
            <img src={UserProfile} alt="Complete the account" />
            <span className="requests__sidebar__nav__link__text mr-2">
              تکمیل حساب کاربری
            </span>
          </NavLink>
        </li>
        <li className="requests__sidebar__nav__item">
          <NavLink to="#" className="requests__sidebar__nav__link">
            <img src={Exit} alt="exit" />
            <span className="requests__sidebar__nav__link__text-exit mr-2">
              خروج
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default ListItems;
