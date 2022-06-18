import "./hero.scss";
import Woman from "./../../../assets/content/woman.png";
import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="hero__content">
              <div className="hero__content__texts">
                <h1>ببرینو؛ یک ارسال فردبه‌فرد تضمین‌شده</h1>
                <p>
                  بسته‌های ارسالی خود را در اختیار برنده‌های مورد اعتماد ببرینو
                  قرار دهید یا سفر بعدی خود را ثبت کرده و با بردن بسته‌ها کسب
                  درآمد کنید.
                </p>
              </div>
              <div className="hero__button-group">
                <NavLink
                  to="#"
                  type="button"
                  className="primary-button primary-button--big ml-3"
                >
                  ثبت درخواست
                </NavLink>
                <NavLink
                  to="/how-works"
                  type="button"
                  className="primary-outline-button"
                >
                  چطور کار می‌کند؟
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img className="hero__image" src={Woman} alt="woman" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
