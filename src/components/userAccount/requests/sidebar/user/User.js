import "./user.scss";
import Avatar from "../../../../../assets/content/sender-request-avatar.png";
import Star from "../../../../../assets/content/Star.png";
import Message from "../../../../../assets/content/Messages.png";
const user = () => {
  return (
    <section className="requests__user d-flex">
      <div>
        <img src={Avatar} alt="user avatar" className="requests__user__img" />
      </div>
      <div className="mr-3">
        <div className="d-flex align-items-center">
          <h6 className="requests__user__user-name">آریوبرزن</h6>
          <div className="mr-2">
            <span className="requests__user__user-rate">۴</span>
            <img src={Star} alt="star" />
          </div>
          <div className="mr-2">
            <span className="requests__user__user-message">۴</span>
            <img src={Message} alt="message" />
          </div>
        </div>
        <span className="requests__user__user-email">
          h.karami1996@gmail.com
        </span>
      </div>
    </section>
  );
};

export default user;
