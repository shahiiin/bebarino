import "./baner.scss";
import Ticket from "./../../assets/content/ticket.png";
import Trolley from "./../../assets/content/trolley.png";
import Distance from "./../../assets/content/distance.png";
import Profit from "./../../assets/content/profit.png";
const Banner = () => {
  return (
    <div className="baner">
      <div className="row">
        <div className="col-md-3">
          <div className="baner__item">
            <img src={Ticket} alt="Ticket" />
            <p>ثبت سفر و درخواست دریافت بسته</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="baner__item">
            <img src={Trolley} alt="Trolley" />
            <p>هماهنگی با فرستنده و تحویل گرفتن بسته</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="baner__item">
            <img src={Distance} alt="Distance" />
            <p>انجام سفر و تحویل دادن بسته</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="baner__item">
            <img src={Profit} alt="Profit" className="banner__profit" />
            <p>تایید تحویل و دریافت هزینه</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
