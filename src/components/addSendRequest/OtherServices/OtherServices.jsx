import { Link } from "react-router-dom";
// style
import "./OtherServices.scss";
// assets
import InfoIcon from "../../../assets/send-request/Info, Infornation.png";

const OtherServices = () => {
	return (
		<>
			<form className="other-services-form p-3 p-md-4 mb-3">
				<fieldset className="m-3">
					<legend className="form-legend mb-4">نوع تحویل</legend>
					<label className="form-group d-flex justify-content-between radio-input ">
						بر عهده برنده
						<input type="radio" name="delivery-type" />
						<span className="radio-input__checkmark"></span>
					</label>
					<label className="form-group d-flex justify-content-between radio-input radio-input__selected">
						درب منزل (۵ درصد هزینه بیشتر)
						<input type="radio" name="delivery-type" />
						<span className="radio-input__checkmark"></span>
					</label>
					<label className="form-group d-flex justify-content-between radio-input">
						مراکز ببرینو
						<input type="radio" name="delivery-type" />
						<span className="radio-input__checkmark"></span>
					</label>
					<div className="">
						<img src={InfoIcon} alt="info icon" />
						<small className="form-description">
							<Link to="#"> توضیحات بیشتر درباره نحوه کار مراکز ببرینو</Link>
						</small>
					</div>
				</fieldset>
			</form>
			<form className="other-services-form p-3 p-md-4 mb-3">
				<fieldset className="m-3">
					<legend className="form-legend mb-4">خدمات تکمیلی</legend>
					<label className="form-group d-flex justify-content-between checkbox-input">
						بیمه بسته (۵ درصد هزینه بیشتر)
						<input type="checkbox" />
						<span className="checkbox-input__checkmark"></span>
					</label>
					<div className="mb-4 pb-2">
						<img src={InfoIcon} alt="info icon" />
						<small className="form-description">
							<Link to="#">
								با ده درصد هزینه بیشتر می‌تواند از خدمات ادعای خسارت <br></br>
								ببرینو استفاده کنید
							</Link>
						</small>
					</div>
					<label className="form-group d-flex justify-content-between checkbox-input">
						محدودیت زمانی (۵ درصد هزینه بیشتر)
						<input type="checkbox" />
						<span className="checkbox-input__checkmark"></span>
					</label>
					<div className="">
						<img src={InfoIcon} alt="info icon" />
						<small className="form-description">
							<Link to="#">
								با ده درصد هزینه بیشتر می‌توانید محدوده زمانی تعیین کنید
								<br></br>
								تا سریع‌تر برنده خود را بیابید
							</Link>
						</small>
					</div>
				</fieldset>
			</form>
			<form className="other-services-form p-3 p-md-4">
				<label className="form-group d-flex justify-content-between checkbox-input m-3">
					درخواست ارسال رایگان
					<input type="checkbox" />
					<span className="checkbox-input__checkmark"></span>
				</label>
				<div className="mb-4 pb-2 mx-3">
					<img src={InfoIcon} alt="info icon" />
					<small className="form-description">
						<Link to="#">
							پس از ثبت بسته‌ی شما و بررسی درخواست توسط کارشناسان ببرینو
							<br></br>
							وضعیت درخواست به اطلاع شما می‌رسد
						</Link>
					</small>
				</div>
			</form>
		</>
	);
};

export default OtherServices;
