import { Link } from "react-router-dom";
// style
import "./ParcelDetails.scss";
import "../../../../receivingParcel/sendingRequests/senderRequest/souvenirPackages/souvenirPackages.scss";
// assets
import AirplanIcon from "../../../../../assets/requests/AirplanePlaneTripTravel.png";
import ArrowLeft from "../../../../../assets/content/arrow-left.png";

const ParcelDetail = () => {
	return (
		<section className="receiver-parcel-detail mt-md-0">
			<header className="d-flex align-items-center mb-5">
				<h5>تورنتو - تهران</h5>
				<span className="receiver-parcel-detail__send-box mr-auto">
					<img src={AirplanIcon} alt="baggage" /> دریافت بسته
				</span>
			</header>
			<h3>
				<span className="receiver-parcel-detail__weight-remained">۴ </span>
				از ۵ کیلوگرم باقیمانده
			</h3>
			<div className="receiver-parcel-detail__box-contents pb-3">
				<h4 className="mt-5 mb-3">محتویات مورد قبول</h4>
				<div>
					<span className="receiver-parcel-detail__box-contents__badge mr-1">
						مواد خوراکی
					</span>
					<span className="receiver-parcel-detail__box-contents__badge mr-1">
						مدارک
					</span>
				</div>
			</div>
			<hr className="my-4" />
			<footer className="receiver-parcel-detail__footer">
				<div className="row align-items-center">
					<div className="col-md-4">
						<div className="receiver-parcel-detail__footer__box-info">
							<div className="d-flex align-items-center">
								<div className="receiver-parcel-detail__footer__box-info__weight d-flex align-items-center">
									<span>۱۴روز</span>
									<span className="mr-2">تا سفر (۲۰۲۱.۰۱.۰۳)</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-8">
						<div className="receiver-parcel-detail__footer__btn-group">
							<Link to="#">
								انتخاب سفر{" "}
								<img className="mr-3" src={ArrowLeft} alt="arrow left icon" />
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</section>
	);
};

export default ParcelDetail;
