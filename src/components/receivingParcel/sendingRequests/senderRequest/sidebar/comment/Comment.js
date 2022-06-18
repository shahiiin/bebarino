import "./comment.scss";
import RateStar from "../rateStar";
import Avatar from "../../../../../../assets/content/request-avatar.png";
const Comment = () => {
  return (
    <article className="sender-request__comment">
      <header className="d-flex align-items-center">
        <img
          className="sender-request__comment__avatar"
          src={Avatar}
          alt="avatar"
        />
        <h6 className="mx-2">سورنا</h6>
        <span className="sending-requests-aside__tag ml-2">فرستنده</span>
        <time className="mr-auto">۲۰۲۱.۰۱.۰۳</time>
      </header>
      <div className="mt-3">
        <RateStar />
      </div>
      <p className="mt-3">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است
      </p>
    </article>
  );
};

export default Comment;
