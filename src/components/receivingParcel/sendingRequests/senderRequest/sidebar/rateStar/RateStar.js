import "./rate-star.scss";
import Star from "../../../../../../assets/content/Star.png";
const RateStar = () => {
  return (
    <div class="rate">
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
      <div className="rate__value mr-2">
        <span>۵</span> <span>از ۵</span>
      </div>
    </div>
  );
};

export default RateStar;
