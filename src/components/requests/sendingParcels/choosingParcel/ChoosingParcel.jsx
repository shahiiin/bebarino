import { Link } from "react-router-dom";
// style
import "./ChoosingParcel.scss";
// assets
import CancelIcon from "../../../../assets/requests/DeleteDisabled2.png";
// componnents
import ParcelCard from "./parcelCard/ParcelCard";

const ChoosingParcel = () => {
	return (
		<div className="choosing-parcel d-flex align-items-center justify-content-center">
			<div className="choosing-parcel__modal">
				<h4 className="choosing-parcel__modal__title mb-4 pb-2">
					انتخاب بسته
					<img
						src={CancelIcon}
						alt="cancel"
						className="choosing-parcel__modal__title__image"
					/>
				</h4>
				<ParcelCard />
				<div className="my-4 py-2">
					<label className="choosing-parcel__modal__label">
						<input type="radio" name="trips-category" />
						<span className="choosing-parcel__modal__label__checkmark"></span>
						ثبت سفر جدید
					</label>
					<label className="choosing-parcel__modal__label">
						<input type="radio" name="trips-category" />
						<span className="choosing-parcel__modal__label__checkmark"></span>
						انتخاب از میان سفرهای ثبت شده{" "}
					</label>
				</div>
				<div className="accepting-request__modal__btn-group">
					<div className="row">
						<div className="col-md-6">
							<Link to="#" className="primary-outline-button">
								لغو درخواست
							</Link>
						</div>
						<div className="col-md-6">
							<Link to="#" className="primary-button">
								تایید و ادامه{" "}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChoosingParcel;
