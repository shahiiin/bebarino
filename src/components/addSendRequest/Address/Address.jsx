//  style
import "./Address.scss";
// assets
import InfoIcon from "../../../assets/send-request/Info, Infornation.png";
import LocationIcon from "../../../assets/send-request/PinLocation.png";

const Address = () => {
	return (
		<form className="add-request-address p-3 p-md-4">
			<fieldset className="form-row justify-content-md-between form-group m-3">
				<legend className="form-legend">مبدا</legend>
				<div className="col-md-6 form-group">
					<label className="form-label">کشور</label>
					<input
						type="text"
						className="form-control"
						placeholder="کشور را وارد کنید"
					/>
				</div>
				<div className="col-md-6 form-group">
					<label className="form-label">شهر</label>
					<input
						type="text"
						className="form-control"
						placeholder="شهر را وارد کنید"
					/>
				</div>
				<div>
					<img src={InfoIcon} alt="info icon" />
					<small className="form-description">
						برنده در این مبدا بسته را از شما تحویل خواهد گرفت
					</small>
				</div>
			</fieldset>
			<fieldset className="form-row justify-content-md-between form-group m-3">
				<legend className="form-legend">مقصد</legend>
				<div className="col-md form-group">
					<label className="form-label">کشور</label>
					<input
						type="text"
						className="form-control"
						placeholder="کشور را وارد کنید"
					/>
				</div>
				<div className="col-md form-group">
					<label className="form-label">شهر</label>
					<input
						type="text"
						className="form-control"
						placeholder="شهر را وارد کنید"
					/>
				</div>
				<div className="col-md-12 form-group position-relative">
					<label className="form-label">آدرس دقیق</label>
					<input
						type="text"
						className="form-control"
						placeholder="آدرس را وارد کنید"
					/>
					<span className="pin-icon">
						<img src={LocationIcon} alt="location icon" />
					</span>
				</div>
				<div className="col-md-6 form-group">
					<label className="form-label">کد پستی</label>
					<input
						type="text"
						className="form-control"
						placeholder="کد پستی را وارد کنید"
					/>
				</div>
				<div className="col-md-6 form-group">
					<label className="form-label">شماره تلفن ثابت</label>
					<input
						type="text"
						className="form-control"
						placeholder="تلفن را وارد کنید"
					/>
				</div>
				<div>
					<img src={InfoIcon} alt="info icon" />
					<small className="form-description">
						برنده در این مقصد بسته را تحویل خواهد داد
					</small>
				</div>
			</fieldset>
			<fieldset className="form-row form-group m-3">
				<legend className="form-legend">اطلاعات تماس</legend>
				<div className="col-md-6 form-group">
					<label className="form-label">شماره تلفن همرا فرستده</label>
					<input
						type="text"
						className="form-control"
						placeholder="تلفن همراه فرستنده"
					/>
				</div>
				<div className="col-md-6 form-group">
					<label className="form-label">شماره تلفن همراه گیرنده</label>
					<input
						type="text"
						className="form-control"
						placeholder="تلفن همراه گیرنده"
					/>
				</div>
				<div>
					<img src={InfoIcon} alt="info icon" />
					<small className="form-description">
						به منظور هماهنگی با تیم پشتیبانی و برنده شماره تلفن همراه در دسترس
						فرستنده (شما) و گیرنده در محل را وارد کنید
					</small>
				</div>
			</fieldset>
		</form>
	);
};

export default Address;
