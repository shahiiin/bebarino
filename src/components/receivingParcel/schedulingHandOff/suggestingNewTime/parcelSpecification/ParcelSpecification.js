import "./parcel-specification.scss";
import Info from "../../packageSpecification/info";
import Accepted from "../../../../../assets/content/accepted.png";
import DateTag from "../../packageSpecification/dateTag";
import Avatar from "../../../../../assets/content/card-avatar.png";
import Time from "../../../../../assets/content/time.png";
import Plus from "../../../../../assets/content/plus.png";
import Calendar from "../../../../../assets/content/calendar.png";
import Alarm from "../../../../../assets/content/alarm.png";
import { Link } from "react-router-dom";
const ParcelSpecification = () => {
  return (
    <section className="suggestin-new-time__parcel-specification">
      <Info />
      <section className="suggestin-new-time__parcel-specification__delivery mt-4">
        <h2>مشخصات تحویل بسته</h2>
        <h5 className="mt-4">مکان ملاقات</h5>
        <div className="row align-items-center mt-4">
          <div className="col-md-8">
            <span className="suggestin-new-time__parcel-specification__delivery__place">
              La Fontanilla 65 Villanueva De Córdoba
            </span>
          </div>
          <div className="col-md-4">
            <div className="suggestin-new-time__parcel-specification__delivery__acception">
              <div>
                <img src={Accepted} alt="accepted icon" />
                <span className="mr-1 suggestin-new-time__parcel-specification__delivery__accepted">
                  تایید شد
                </span>
                <time className="mr-2 suggestin-new-time__parcel-specification__delivery__time">
                  ۲۰۲۱.۰۱.۰۳
                </time>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-3 suggestin-new-time__parcel-specification__meeting-time">
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
        <div className="d-flex align-items-center mt-5">
          <h4>زمان ملاقات</h4>
          <div className="mr-auto">
            <img src={Time} alt="time icon" />
            <span className="suggestin-new-time__parcel-specification__meeting-time__time mr-1">
              زمان ملاقات
            </span>
            <span className="scheduling-hand-off__package-specification__time mr-2">
              ۲۰۲۱.۰۱.۰۳
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="scheduling-hand-off__package-specification__meeting-time__date mt-4">
              <DateTag>چهارشنبه، ۲۰۲۱.۰۲.۰۴</DateTag>
              <DateTag>شنبه، ۲۰۲۱.۰۲.۰۴</DateTag>
              <DateTag>شنبه، ۲۰۲۱.۰۲.۰۴</DateTag>
            </div>
            <div className="mt-3">
              <DateTag>۱۴:۳۰</DateTag>
              <DateTag>۱۴:۳۰</DateTag>
            </div>
          </div>
        </div>
        <hr className="mt-4" />
        <div className="suggestin-new-time__parcel-specification__meeting-time__selecting-time">
          <header className="d-flex align-items-center">
            <img
              className="sender-request__comment__avatar"
              src={Avatar}
              alt="avatar"
            />
            <h6 className="mx-2">سورنا</h6>
            <div className="mr-auto">
              <Link to="#" className="primary-outline-button">
                ارسال
              </Link>
            </div>
          </header>
          <div className="d-flex align-items-center mt-4">
            <h4>زمان ملاقات</h4>
            <div className="mr-auto">
              <button type="button">
                <img src={Plus} alt="plus sign" />
                <span className="mr-2 suggestin-new-time__parcel-specification__meeting-time__selecting-time__date">
                  افزودن تاریخ
                </span>
              </button>
            </div>
          </div>
          <div className="mt-4 suggestin-new-time__parcel-specification__meeting-time__selecting-date">
            <span>تاریخ 1</span>
            <div className="mt-3">
              <div className="row">
                <div className="col-sm-12 col-md-4">
                  <div className="d-flex align-items-center suggestin-new-time__parcel-specification__meeting-time__selecting-date__input">
                    <input type="text" value="۱۹۹۱.۰۳.۰۶" />
                    <img src={Calendar} alt="calendar icon" />
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="d-flex align-items-center suggestin-new-time__parcel-specification__meeting-time__selecting-date__input">
                    <input type="text" value="۱۹۹۱.۰۳.۰۶" />
                    <img src={Alarm} alt="calendar icon" />
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="d-flex align-items-center suggestin-new-time__parcel-specification__meeting-time__selecting-date__input">
                    <input type="text" value="۱۹۹۱.۰۳.۰۶" />
                    <img src={Alarm} alt="calendar icon" />
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="d-flex align-items-center suggestin-new-time__parcel-specification__meeting-time__selecting-date__input">
                    <input type="text" value="۱۹۹۱.۰۳.۰۶" />
                    <img src={Alarm} alt="calendar icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ParcelSpecification;
