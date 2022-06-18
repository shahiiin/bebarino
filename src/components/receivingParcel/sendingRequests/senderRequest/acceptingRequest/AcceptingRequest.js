import "./accepting-request.scss";
import DisabledIcon from "../../../../../assets/content/Disabled.png";
import ProfitIcon from "../../../../../assets/content/profit.png";
import InfoIcon from "../../../../../assets/content/info-icon.png";
import { Link } from "react-router-dom";
const AcceptingRequest = () => {
  return (
    <div className="accepting-request">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center">
          <section className="accepting-request__modal">
            <div className="d-flex align-items-center">
              <h4>قبول درخواست ارسال</h4>
              <button
                type="button"
                className="mr-auto accepting-request__modal__close"
              >
                <img src={DisabledIcon} alt="close icon" />
              </button>
            </div>
            <div className="accepting-request__modal__content d-flex flex-column align-items-center text-center mt-5">
              <img src={ProfitIcon} alt="profit image" />
              <p className="mt-4">
                با قبول این درخواست فرستنده ملزم به پرداخت هزینه بسته به ببرینو
                می باشد. پس از انجام پرداخت بسته به سفر شما اضافه خواهد شد
              </p>
            </div>
            <div className="accepting-request__modal__info-text mt-5 mb-4 d-flex">
              <div className="ml-2">
                <img src={InfoIcon} alt="info icon" />
              </div>
              <span>
                هزینه پرداختی نزد ببرینو محفوظ بوده و تنها پس از تایید تحویل به
                حساب برنده واریز می‌شود
              </span>
            </div>
            <div className="accepting-request__modal__btn-group">
              <div className="row">
                <div className="col-md-6">
                  <Link to="#" className="primary-outline-button">
                    بازگشت
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link to="#" className="primary-button">
                    قبول درخواست
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AcceptingRequest;
