import "./package-specification.scss";
import Avatar from "../../../../assets/content/card-avatar.png";
import Info from "./info";
import { Link } from "react-router-dom";
import DateTag from "./dateTag";
const PackageSpecification = () => {
  return (
    <section className="scheduling-hand-off__package-specification">
      <Info />
      <section className="scheduling-hand-off__package-specification__delivery mt-4">
        <h3 className="mb-4">مشخصات تحویل بسته</h3>
        <header className="d-flex align-items-center">
          <img
            className="sender-request__comment__avatar"
            src={Avatar}
            alt="avatar"
          />
          <h6 className="mx-2">سورنا</h6>
          <time className="mr-2 scheduling-hand-off__package-specification__time">
            ۲۰۲۱.۰۱.۰۳
          </time>
        </header>
        <div className="scheduling-hand-off__package-specification__meting-info mt-5">
          <div className="scheduling-hand-off__package-specification__meeting-place">
            <div className="row">
              <div className="col-md-4 d-flex align-items-center">
                <h5>مکان ملاقات</h5>
              </div>
              <div className="col-md-8">
                <div className="scheduling-hand-off__package-specification__btn-group d-flex justify-content-md-end">
                  <Link to="#" className="primary-button">
                    تایید مکان
                  </Link>
                  <Link to="#" className="primary-outline-button mr-3">
                    مکان من
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <span className="scheduling-hand-off__package-specification__meeting-place__place mt-4">
                  La Fontanilla 65 Villanueva De Córdoba
                </span>
              </div>
            </div>
          </div>
          <div className="scheduling-hand-off__package-specification__meeting-time mt-5">
            <div className="row">
              <div className="col-md-4 d-flex align-items-center">
                <h5>زمان ملاقات</h5>
              </div>
              <div className="col-md-8">
                <div className="scheduling-hand-off__package-specification__btn-group d-flex justify-content-md-end">
                  <Link to="#" className="primary-button">
                    تایید مکان
                  </Link>
                  <Link to="#" className="primary-outline-button mr-3">
                    مکان من
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="scheduling-hand-off__package-specification__meeting-time__date mt-4">
                  <DateTag active>چهارشنبه، ۲۰۲۱.۰۲.۰۴</DateTag>
                  <DateTag>شنبه، ۲۰۲۱.۰۲.۰۴</DateTag>
                  <DateTag>شنبه، ۲۰۲۱.۰۲.۰۴</DateTag>
                </div>
                <div className="mt-3">
                  <DateTag active>۱۴:۳۰</DateTag>
                  <DateTag>۱۴:۳۰</DateTag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PackageSpecification;
