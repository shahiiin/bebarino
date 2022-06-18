import MessageIcon from "../../../../assets/content/Messages.png";
import StarIcon from "../../../../assets/content/Star.png";
import CardAvatar from "../../../../assets/content/sender-request-avatar.png";
import BoxContent from "../../sendingRequests/senderRequest/souvenirPackages/boxContent/BoxContent";
import InfoIcon from "../../../../assets/content/info-icon.png";
import DeleteImage from "../../../../assets/content/delete.png";
import InputCategory from "./InputCategory";
const Sidebar = () => {
  return (
    <aside className="scheduling-hand-off__sidebar">
      <div className="sending-requests-aside__info d-md-block">
        <h5 className="mb-3">تورنتو - تهران</h5>
        <div className="sending-requests-aside__value d-flex align-items-center">
          <span className="ml-1"> ۱ </span>
          <span> از ۵ کیلوگرم باقیمانده </span>
        </div>
        <div className="sending-requests-aside__day d-flex align-items-center">
          <span>۱۴ روز</span>
          <span className="mr-2">تا سفر (۲۰۲۱.۰۱.۰۳)</span>
        </div>
        <div className="d-flex align-items-center mt-4">
          <span className="sending-requests-aside__tag ml-2">مواد خوراکی</span>
          <span className="sending-requests-aside__tag ml-2">مدارک</span>
          <span className="sending-requests-aside__tag ml-2">سایر اقلام</span>
        </div>
      </div>
      <hr />
      <div className="sending-requests-aside__boxes d-flex align-items-center">
        <span>بسته‌ها</span>
        <span className="mr-auto">(۰)</span>
      </div>
      <div className="my-3">
        <InputCategory active />
      </div>
      <div className="d-flex align-items-center">
        <img
          className="sender-request-aside__avatar"
          src={CardAvatar}
          alt="avatar"
        />
        <div>
          <div className="d-flex align-items-center">
            <h6 className="mx-3">سورنا</h6>
            <span className="d-flex align-items-center request-card__star">
              <span>۴</span>
              <img src={StarIcon} alt="star icon" />
            </span>
            <span className="d-flex align-items-center mr-2 ml-3 request-card__message">
              <span>۴</span>
              <img src={MessageIcon} alt="message icon" />
            </span>
          </div>
          <div>
            <span className="sender-request-aside__time mr-3 mt-2">
              <time>عضو شده در</time>۲۰۲۱.۰۸.۰۹
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <BoxContent />
        <BoxContent />
        <BoxContent />
      </div>
      <div className="souvenir-packages__footer__box-info">
        <div className="d-flex align-items-center">
          <div className="souvenir-packages__footer__box-info__weight d-flex align-items-center">
            <span>۵</span>
            <span className="mr-2">کیلوگرم</span>
          </div>
          <div className="souvenir-packages__footer__box-info__price mr-4 d-flex align-items-center">
            <span>۵۰</span>
            <span className="mr-2">یورو</span>
          </div>
        </div>
        <div>
          <span className="souvenir-packages__footer__box-info__info-text d-flex">
            <div>
              <img src={InfoIcon} alt="info icon" />{" "}
            </div>
            <div className="mr-2">
              توضیحات تکمیلی در رابطه با هزینه و ارتباط آن با وزن{" "}
            </div>
          </span>
        </div>
      </div>
      <hr />
      <div className="my-3">
        <InputCategory />
      </div>
      <hr />
      <div className="sending-requests-aside__buttons d-md-block">
        <div>
          <button type="button" className="mt-3">
            <img src={DeleteImage} alt="delete" />
            <span className="mr-2 text-button-delete">لغو سفر</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
