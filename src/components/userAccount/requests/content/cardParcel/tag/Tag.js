import "./tag.scss";
import Baggage from "../../../../../../assets/content/Baggage.png";

const Tag = () => {
  return (
    <div className="card-parcel__tag">
      <img src={Baggage} alt="send parcel" />
      <span className="mr-2">ارسال بسته</span>
    </div>
  );
};

export default Tag;
