import "./delivery-verification.scss";
import Sidebar from "../schedulingHandOff/sidebar";
import Info from "../../../assets/content/info-icon.png";
import Shipment from "../../../assets/content/shipment.png";
import Money from "../../../assets/content/money.png";
const DeliveryVerification = () => {
  return (
    <div className="delivery-verification">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-8 offset-md-1">
            <section>
              <div className="trip__parcel__travel-done mt-4 d-flex">
                <div>
                  <img src={Shipment} alt="place travel" />
                </div>
                <div className="d-flex mr-3">
                  <div>
                    <h2>آیا سفر شما انجام شده است</h2>
                    <div className="trip__parcel__handing-off-parcel__info d-flex mt-3">
                      <div>
                        <img src={Info} alt="" />
                      </div>
                      <span className="mr-1">
                        در صورت عدم تایید تا ۲۴ ساعت پشتیبانی پیگیری خواهد کرد{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="trip__parcel__travel-done mt-4 d-flex mt-4 opacity-box">
                <div>
                  <img src={Money} alt="place travel" />
                </div>
                <div className="d-flex mr-3">
                  <div>
                    <h2>آیا سفر شما انجام شده است</h2>
                    <div className="trip__parcel__handing-off-parcel__info d-flex mt-3">
                      <div>
                        <img src={Info} alt="" />
                      </div>
                      <span className="mr-1">
                        تا ۴۸ ساعت پس از تایید تحویل توسط فرستنده واریز می‌شود
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryVerification;
