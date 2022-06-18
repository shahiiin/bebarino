import waliz from "./../../../assets/content/waliz.png";
import "./travel.scss";
import { NavLink } from "react-router-dom";
const Travel = () => {
  return (
    <section className="travel">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <img src={waliz} alt="waliz" />
          </div>
          <div className="col-md-5">
            <div className="travel__content">
              <h2>سفری در پیش دارید؟</h2>
              <p>
                فضای اضافی بار خود را با بسته‌های ببرینو پر کرده و هزینه‌های سفر
                را جبران کنید
              </p>
              <div>
                <NavLink
                  to="#"
                  className="secondary-button secondary-button--big"
                >
                  ثبت سفر
                </NavLink>
              </div>
              <div className="mt-5 travel__question-link-box">
                <NavLink to="#" className="travel__question-link">
                  سوالی دارد؟ <span>سوالات پرتکرار</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Travel;
