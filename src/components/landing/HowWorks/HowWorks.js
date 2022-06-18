import "./howWorks.scss";
import Banner from "../../baner-home-page/baner";
import { NavLink } from "react-router-dom";
const HowWorks = () => {
  return (
    <section className="how-works">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex align-items-center flex-column">
            <div className="how-works__texts">
              <h2>چطور کار می‌کند؟</h2>
              <p>
                در ببرینو فرستندگان ارسال‌های بین‌المللی با برنده‌های مسافر
                دارای فضای بار اضافی ارتباط می‌گیرند‌
              </p>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="how-works__button-group p-1">
                <button type="button">فرستنده</button>
                <button type="button" className="active">
                  برنده
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Banner />
        </div>
        <div className="row justify-content-center how-works__read-more-box">
          <NavLink to="#" className="how-works__read-more-link">
            در این باره
            <span className="how-works__read-more"> بیشتر بخوانید</span>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
export default HowWorks;
