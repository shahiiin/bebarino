import LogoFooter from "./../../assets/content/Group.png";
import Copyright from "./../../assets/content/copyright.png";
import Facebook from "./../../assets/images/Facebook.png";
import Instagram from "./../../assets/images/Instagram.png";
import Telegram from "./../../assets/images/Telegram.png";
import { NavLink, Link } from "react-router-dom";
import "./footer.scss";

const MainFooter = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <h5>
              <Link to="/"><img src={LogoFooter} alt="logo" /></Link>
            </h5>
            <p className="mt-4">
              ببرینو، یک سرویس ارسال بین‌المللی فردبه‌فرد تضمین‌
            </p>
          </div>
          <div className="col-sm-6 col-md-3">
            <h5>تماس با ما</h5>
            <ul>
              <li className="mt-4">
                <NavLink to="#">
                  تهران، خیابان شریعتی، خیابان میرزاپور ، کوچه بارا
                </NavLink>
              </li>
              <li className="mt-2">
                <NavLink to="#">۰۲۱-۳۳۴۴۵۵۶</NavLink>
              </li>
              <li className="mt-2">
                <NavLink to="#">Send@Bebarino.com</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3 text-center">
            <h5>درخواست ها</h5>
            <ul>
              <li className="mt-4">
                <NavLink to="#">ارسال بسته</NavLink>
              </li>
              <li className="mt-2">
                <NavLink to="#">دریافت بسته</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3 text-center">
            <h5>آموزش و اطلاعات</h5>
            <ul>
              <li className="mt-4">
                <NavLink to="/how-works">چطور کار می‌کند؟</NavLink>
              </li>
              <li className="mt-2">
                <NavLink to="/term-of-use">قوانین و مقررات</NavLink>
              </li>
              <li className="mt-2">
                <NavLink to="/faq">سوالات پرتکرار</NavLink>
              </li>
              <li className="mt-2">
                <NavLink to="/about">درباره ما</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-md-between mt-4">
          <div>
            <img src={Copyright} alt="copyright" />
            <span className="main-footer__copyright mr-2">
              تمام حقوق برای ببرینو محفوظ است 1400
            </span>
          </div>
          <div className="main-footer__icons">
            <NavLink to="#" className="ml-3">
              <img src={Instagram} alt="instagram" />
            </NavLink>
            <NavLink to="#" className="ml-3">
              <img src={Telegram} alt="telegram" />
            </NavLink>
            <NavLink to="#">
              <img src={Facebook} alt="facebook" />
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
