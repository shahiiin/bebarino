import "./sidebar.scss";
import MessageIcon from "../../../../../assets/content/Messages.png";
import StarIcon from "../../../../../assets/content/Star.png";
import CardAvatar from "../../../../../assets/content/sender-request-avatar.png";
import Comment from "./comment";
const Sidebar = () => {
  return (
    <aside className="sender-request-aside">
      <div className="sender-request-aside__user">
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
        <div className="d-flex align-items-center mt-4">
          <div className="d-flex flex-column align-items-center">
            <span className="request-card__body__heading">ارسال</span>
            <span className="request-card__body__text">۳۰</span>
          </div>
          <div className="d-flex flex-column align-items-center mr-4">
            <span className="request-card__body__heading">دریافت</span>
            <span className="request-card__body__text">۳</span>
          </div>
          <div className="d-flex flex-column align-items-center mr-4">
            <span className="request-card__body__heading">هزینه</span>
            <span className="request-card__body__text">۴۰۰</span>
          </div>
          <div className="d-flex flex-column align-items-center mr-4">
            <span className="request-card__body__heading">درآمد</span>
            <span className="request-card__body__text">۱۵۰</span>
          </div>
        </div>
      </div>

      <div className="sender-request-aside__last-comments mt-5">
        <h5 className="mt-4 mb-3">آخرین نظرات</h5>
        <Comment />
      </div>
    </aside>
  );
};

export default Sidebar;
