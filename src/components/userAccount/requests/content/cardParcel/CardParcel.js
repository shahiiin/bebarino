import "./card-parcel.scss";
import Tag from "./tag";
import dots from "../../../../../assets/content/dots.png";
import Avatar from "../../../../../assets/content/request-avatar.png";
import Star from "../../../../../assets/content/Star.png";
import Messages from "../../../../../assets/content/Messages.png";
import Loading from "../../../../../assets/content/loading.png";
const CardParcel = () => {
  return (
    <article className="card-parcel">
      <header className="card-parcel__header d-flex align-items-center">
        <h5 className="card-parcel__header__title ml-3">تورنتو - تهران</h5>
        <Tag />
        <div className="mr-auto">
          <button type="button" className="card-parcel__header__setting">
            <img src={dots} alt="settings" />
          </button>
        </div>
      </header>
      <section className="card-parcel__user-info d-flex align-items-center mt-4">
        <img
          src={Avatar}
          alt="user"
          className="card-parcel__user-info__avatar"
        />
        <h6 className="card-parcel__user-info__user-name ml-2 mr-2">
          آریوبرزن
        </h6>
        <div>
          <span className="card-parcel__user-info__rate">۴</span>
          <img src={Star} alt="rate" />
        </div>
        <div className="mr-2">
          <span className="card-parcel__user-info__message">۴</span>
          <img src={Messages} alt="message" />
        </div>
      </section>
      <div className="my-3">
        <span className="card-parcel__parcel-type">بسته سوغاتی‌های خوراکی</span>
      </div>
      <footer>
        <div className="d-flex">
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center">
              <span className="card-parcel__value">۵</span>
              <span className="card-parcel__unit mr-1">کیلوگرم</span>
            </div>
            <div className="d-flex align-items-center mr-3">
              <span className="card-parcel__value">۵۰</span>
              <span className="card-parcel__unit mr-1">یورو</span>
            </div>
          </div>
          <div className="mr-auto d-flex align-items-center">
            <div className="card-parcel__state ml-3">
              <img src={Loading} alt="loading" />
              <span className="mr-1">در انتظار درخواست برنده</span>
            </div>
            <div className="primary-button">وضعیت بسته</div>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default CardParcel;
