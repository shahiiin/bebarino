import UserInfo from "../UserInfo";
// assets
import InfoIconSM from "../../../assets/send-request/Info, Infornation_4.png";

const SideForm = () => {
	return (
		<>
			<UserInfo />
			<div>
				<form>
					<div className="form-group">
						<label className="form-label">وزن</label>
						<input
							type="text"
							className="form-control"
							placeholder="مشخص نشده"
							disabled
						/>
					</div>
					<div className="form-group">
						<label className="form-label">هزینه</label>
						<input
							type="text"
							className="form-control"
							placeholder="مشخص نشده"
							disabled
						/>
						<div className="d-flex align-items-start mt-2">
							<img src={InfoIconSM} alt="info icon" />
							<p className="form-description-sm">
								توضیحات تکمیلی در رابطه با هزینه و ارتباط آن با وزن
							</p>
						</div>
					</div>
					<div className="form-group">
						<button className="primary-outline-button w-100 mb-3 d-none d-md-block">
							مرحله قبل
						</button>
						<button className="primary-button w-100">تایید و ادامه</button>
					</div>
				</form>
			</div>
		</>
	);
};
export default SideForm;
