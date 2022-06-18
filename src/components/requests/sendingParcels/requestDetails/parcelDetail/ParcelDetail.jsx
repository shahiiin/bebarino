import { Link } from "react-router-dom";
// style
import "./ParcelDetails.scss";
import "../../../../receivingParcel/sendingRequests/senderRequest/souvenirPackages/souvenirPackages.scss";
// assets
import Baggage from "../../../../../assets/content/Baggage.png";
import InfoIcon from "../../../../../assets/content/info-icon.png";
import ArrowLeft from "../../../../../assets/content/arrow-left.png";
// componnents
import BoxContent from "../../../../receivingParcel/sendingRequests/senderRequest/souvenirPackages/boxContent/BoxContent";

const ParcelDetail = () => {
	return (
		<section className="souvenir-packages mt-md-0">
			<header className="d-flex align-items-center mb-5">
				<h5>تورنتو - تهران</h5>
				<span className="souvenir-packages__send-box mr-auto">
					<img src={Baggage} alt="baggage" /> ارسال بسته
				</span>
			</header>
			<h3>بسته سوغاتی‌های خوراکی</h3>
			<div className="souvenir-packages__box-contents">
				<h4 className="mt-5 mb-3">محتویات بسته</h4>
				<div>
					<div className="row">
						<div className="col-md-6">
							<BoxContent />
						</div>
						<div className="col-md-6">
							<BoxContent />
						</div>
						<div className="col-md-6">
							<BoxContent />
						</div>
					</div>
				</div>
			</div>
			<div className="souvenir-packages__furthur-informations">
				<h4 className="mt-5 mb-3">اطلاعات تکمیلی</h4>
				<div className="mb-2">
					<span className="souvenir-packages__furthur-informations__label">
						نوع تحویل
					</span>
					<span>درب منزل </span>
					<span className="souvenir-packages__furthur-informations__green-info">
						(۶ درصد هزینه بیشتر)
					</span>
				</div>
				<div>
					<span className="souvenir-packages__furthur-informations__label">
						محدودیت زمانی
					</span>
					<span>تا ۲۰۲۱.۰۳.۰۶ تحویل داده شود </span>
					<span className="souvenir-packages__furthur-informations__green-info">
						(۶ درصد هزینه بیشتر)
					</span>
				</div>
			</div>
			<hr className="my-4" />
			<footer className="souvenir-packages__footer">
				<div className="row align-items-center">
					<div className="col-md-4">
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
					</div>
					<div className="col-md-8">
						<div className="souvenir-packages__footer__btn-group">
							<Link to="#">
								انتخاب بسته{" "}
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
