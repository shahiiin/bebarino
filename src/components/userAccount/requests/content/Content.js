import "./content.scss";
import CardParcel from "./cardParcel";
import MainTab from "./mainTab";
import Plus from "../../../../assets/content/plus.png";
const Content = () => {
  return (
    <section className="requests__content">
      <div className="mb-5">
        <MainTab />
      </div>
      <div className="is-doing d-flex mb-5">
        <div>
          <span className="is-doing__text">در حال انجام</span>
        </div>
        <div className="mr-auto">
          <button type="button" className="is-doing__button">
            <img src={Plus} alt="add request" />
            <span className="is-doing__add-request mr-2">افزودن درخواست</span>
          </button>
        </div>
      </div>
      <CardParcel />
      <div className="requests__content__tab my-5">
        <button type="button" className="requests__content__tab__button active">
          همه
        </button>
        <button type="button" className="requests__content__tab__button mr-5">
          ارسال
        </button>
        <button type="button" className="requests__content__tab__button mr-5">
          دریافت
        </button>
      </div>
      <CardParcel />
      <CardParcel />
    </section>
  );
};

export default Content;
