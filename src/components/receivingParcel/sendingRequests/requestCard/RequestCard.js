import "./requestCard.scss";
import CardAvatar from "../../../../assets/content/card-avatar.png";
import MessageIcon from "../../../../assets/content/Messages.png";
import StarIcon from "../../../../assets/content/Star.png";
import WalletIcon from "../../../../assets/content/wallet.png";
import DotsIcon from "../../../../assets/content/dots.png";
import { Link } from "react-router-dom";
const RequestCard = () => {
  return (
    <article className="request-card">
      <header className="request-card__header d-flex align-items-center">
        <img src={CardAvatar} alt="avatar" />
        <h6 className="mx-3">سورنا</h6>
        <span className="d-flex align-items-center request-card__star">
          <span>۴</span>
          <img src={StarIcon} alt="star icon" />
        </span>
        <span className="d-flex align-items-center mr-2 ml-3 request-card__message">
          <span>۴</span>
          <img src={MessageIcon} alt="message icon" />
        </span>
        <span className="request-card__date">۲۰۲۱.۰۱.۰۳</span>
        <button type="button" className="mr-auto">
          <img src={DotsIcon} alt="more setting" />
        </button>
      </header>
      <div className="mt-md-0">
        <div className="request-card__body row mt-4">
          <div className="request-card__body__info col-md-5 d-flex align-items-center">
            <div className="d-flex flex-column align-items-center">
              <h6 className="request-card__body__heading">ارسال</h6>
              <span className="request-card__body__text">۳۰</span>
            </div>
            <div className="d-flex flex-column align-items-center mr-4">
              <h6 className="request-card__body__heading">دریافت</h6>
              <span className="request-card__body__text">۳</span>
            </div>
            <div className="d-flex flex-column align-items-center mr-4">
              <h6 className="request-card__body__heading">هزینه</h6>
              <span className="request-card__body__text">۴۰۰</span>
            </div>
            <div className="d-flex flex-column align-items-center mr-4">
              <h6 className="request-card__body__heading">درآمد</h6>
              <span className="request-card__body__text">۱۵۰</span>
            </div>
          </div>
          <div className="request-card__body__btn-group d-flex align-items-center col-md-7">
            <div className="ml-4">
              <img src={WalletIcon} alt="wallet icon" />
              <span className="mr-2">درانتظار پرداخت به ببرین</span>
            </div>
            <Link to="#">مشاهده درخواست</Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default RequestCard;
