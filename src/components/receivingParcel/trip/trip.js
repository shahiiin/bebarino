import Sidebar from "../schedulingHandOff/sidebar";
import Info from "../../../assets/content/info-icon.png";
import Download from "../../../assets/content/download.png";
import PlaceTravel from "../../../assets/content/place-travel.png";
import ArrowLeft from "../../../assets/content/arrow-left.png";
import "./trip.scss";
import { Link } from "react-router-dom";
const Trip = () => {
  return (
    <div className="trip">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-8 offset-md-1">
            <section className="trip__parcel">
              <div className="trip__parcel__handing-off-parcel">
                <h4>تحویل گرفتن بسته از فرستنده</h4>
                <div className="trip__parcel__handing-off-parcel__address mt-4">
                  <span>آدرس</span>
                  <span className="mr-3">
                    La Fontanilla 65 Villanueva De Córdoba
                  </span>
                </div>
                <div className="row trip__parcel__handing-off-parcel__date mt-3">
                  <div className="col-6 trip__parcel__handing-off-parcel__date__day">
                    <h6>روز</h6>
                    <span>چهارشنبه، ۲۰۲۱.۰۲.۰۴</span>
                  </div>
                  <div className="col-6 trip__parcel__handing-off-parcel__date__hour">
                    <h6>ساعت</h6>
                    <span>۱۴:۳۰</span>
                  </div>
                </div>
                <div className="trip__parcel__handing-off-parcel__info d-flex align-items-center mt-4">
                  <img src={Info} alt="info icon" />
                  <span className="mr-1">
                    توجه کنید که زمان ملاقات منعطف است و امکان جابه‌جایی زمانی
                    در صورت لزوم وجود دارد
                  </span>
                </div>
              </div>
              <div className="trip__parcel__handing-over-parcel mt-3">
                <div className="d-flex align-items-center">
                  <h4>تحویل دادن بسته به گیرنده</h4>
                  <div className="mr-auto">
                    <img src={Download} alt="download icon" />
                    <span className="trip__parcel__handing-over-parcel__download mr-2">
                      دانلود اطلاعات
                    </span>
                  </div>
                </div>
                <div className="trip__parcel__handing-off-parcel__address mt-4">
                  <span>آدرس</span>
                  <span className="mr-3">
                    La Fontanilla 65 Villanueva De Córdoba
                  </span>
                </div>
                <div className="row trip__parcel__handing-off-parcel__date d-flex align-items-center mt-3">
                  <div className="col-6 trip__parcel__handing-off-parcel__date__day">
                    <h6>کد پستی</h6>
                    <span>۴۵۱۳۳۶۶۸۹۲</span>
                  </div>
                  <div className="col-6 trip__parcel__handing-off-parcel__date__hour">
                    <h6>تلفن ثابت</h6>
                    <span>۰۲۱-۳۳۴۴۹۲۰۳</span>
                  </div>
                </div>
                <hr />
                <div className="trip__parcel__handing-off-parcel__contact-info">
                  <h4 className="mb-3">اطلاعات تماس</h4>
                  <div className="row align-items-center">
                    <div className="col-md-4 trip__parcel__handing-off-parcel__date__day d-flex align-items-center">
                      <h6>فرستنده</h6>
                      <span className="mr-2">+۹۸۹۱۲۲۲۳۳۴۴۵</span>
                    </div>
                    <div className="col-md-4 trip__parcel__handing-off-parcel__date__hour d-flex align-items-center">
                      <h6>گیرنده</h6>
                      <span className="mr-2">+۹۸۹۱۲۲۲۳۳۴۴۵</span>
                    </div>
                    <div className="col-md-4 trip__parcel__handing-off-parcel__date__hour d-flex align-items-center">
                      <h6>برنده</h6>
                      <span className="mr-2">+۹۸۹۱۲۲۲۳۳۴۴۵</span>
                    </div>
                  </div>
                </div>
              </div>
              <section className="trip__parcel__travel-done mt-3">
                <div className="row">
                  <div className="col-12 col-lg-1">
                    <div>
                      <img src={PlaceTravel} alt="place travel" />
                    </div>
                  </div>
                  <div className="col-12 col-lg-8">
                    <div className="trip__parcel__travel-done__texts">
                      <h2>آیا سفر شما انجام شده است</h2>
                      <div className="trip__parcel__handing-off-parcel__info d-flex mt-3">
                        <div>
                          <img src={Info} alt="info icon" />
                        </div>
                        <span className="mr-1">
                          به دلیل شرایط مسافرتی نامشخص پس انجام سفر را تایید
                          کنید
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-3 trip__parcel__travel-done__button">
                    <Link to="#" className="primary-button">
                      <span>تایید سفر</span>
                      <img
                        src={ArrowLeft}
                        alt="arrow left"
                        className="mr-auto"
                      />
                    </Link>
                  </div>
                </div>
              </section>
              {/* <div className="row trip__parcel__travel-done mt-4">
                <div className="col-md-1">
                  <img src={PlaceTravel} alt="place travel" />
                </div>
                <div className="col-md-8">
                  <div>
                    <h2>آیا سفر شما انجام شده است</h2>
                    <div className="trip__parcel__handing-off-parcel__info d-flex mt-3">
                      <div>
                        <img src={Info} alt="info icon" />
                      </div>
                      <span className="mr-1">
                        به دلیل شرایط مسافرتی نامشخص پس انجام سفر را تایید کنید
                      </span>
                    </div>
                  </div>
                  <div className="col-12 col-md-3">
                    <Link to="#" className="primary-button mr-auto">
                      <span className="ml-4">تایید سفر</span>
                      <img src={ArrowLeft} alt="arrow left" />
                    </Link>
                  </div>
                </div>
              </div> */}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trip;
