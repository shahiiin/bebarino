import { Link } from "react-router-dom";
//  style
import "./ParcelInfo.scss";
//  assets
import InfoIcon from "../../../assets/send-request/Info, Infornation.png";
import PlusIcon from "../../../assets/send-request/parcel-information/Plus, Add.1.png";
import TrashIcon from "../../../assets/send-request/parcel-information/Trash, Delete, Bin.png";
import TrashIconDisable from "../../../assets/send-request/parcel-information/Trash, Delete, Bin_2.png";

const ParcelInfo = () => {
	return (
		<form
			className="p-3 p-md-4"
			style={{
				backgroundColor: "#fff",
				borderRadius: ".75rem",
			}}
		>
			<fieldset className="m-3">
				<legend className="form-legend mb-4">مشخصات کالا(ها)</legend>
				<div className="add-parcel d-flex align-items-start mt-3">
					<img src={PlusIcon} className=" ml-3" alt="plus icon" />
					<p className="m-0">افزودن کالا</p>
				</div>
				<div className="d-flex justify-content-between">
					<label className="parcel-img-label  form-label">تصویر</label>
					<label className="parcel-category-label form-label">
						دسته‌بندی کالا
					</label>
					<label className="parcel-name-label form-label">نام کلا</label>
				</div>
				<div className="d-flex justify-content-between parcel-info form-group">
					<label className="parcel-img-input upload-input mb-0">
						<input type="file" />
					</label>
					<input
						type="select"
						className="parcel-category-input field-input"
						placeholder="انتخاب کنید"
					/>
					<input
						type="text"
						className="parcel-name-input field-input"
						placeholder="نامی در توضیح کالای شما"
					/>
					<button className="parcel-delete-btn form-label">
						<img src={TrashIcon} alt="trash icon" />
					</button>
				</div>
				<div className="d-flex justify-content-between parcel-info">
					<label className="parcel-img-input upload-input mb-0">
						<input type="file" />
					</label>
					<input
						type="text"
						className="parcel-category-input field-input"
						placeholder="انتخاب کنید"
					/>
					<input
						type="text"
						className="parcel-name-input field-input"
						placeholder="نامی در توضیح کالای شما"
					/>
					<button className="parcel-delete-btn form-label">
						<img src={TrashIconDisable} alt="trash icon" />
					</button>
				</div>
				<div className="mt-4">
					<img src={InfoIcon} alt="info icon" />
					<small className="form-description">
						نوع کالا باید منطبق بر قوانین کشور مقصد و با توجه به
						<strong>
							<Link to="#"> قوانین و مقررات </Link>
						</strong>
						ببرینو تعیین شود
					</small>
				</div>
			</fieldset>
			<fieldset className="d-flex m-3">
				<legend className="form-legend">مشخصات تکمیلی بسته</legend>
				<div className="d-flex flex-column form-group col-md-8 pr-0">
					<label className="form-label">نام بسته</label>
					<input type="text" className="field-input" />
				</div>
				<div className="d-flex flex-column form-group col-4 pl-0">
					<label className="form-label">وزن کل کالاها</label>
					<div className="field-input d-flex align-items-center justify-content-between">
						<input
							type="text"
							placeholder=""
							className="w-50 field-input__no-border"
						/>
						<span className="field-input__unit">کیلوگرم</span>
					</div>
				</div>
			</fieldset>
			<div className="m-3">
				<img src={InfoIcon} alt="info icon" />
				<small className="form-description">
					نام بسته می‌بایست گویای هویت آن و هدف از ارسال آن باشد
				</small>
			</div>
			<div className="m-3">
				<img src={InfoIcon} alt="info icon" />
				<small className="form-description">
					کالاها را به همراه بسته‌بندی آن‌ها وزن کنید
				</small>
			</div>
			<div className="m-3">
				<img src={InfoIcon} alt="info icon" />
				<small className="form-description">
					در صورت ادعای بیشتر بودن وزن از طرف برنده و تایید صحت آن هزینه وزن
					اضافی دریافت می‌شود
				</small>
			</div>
		</form>
	);
};

export default ParcelInfo;
