// style
import "./Finalizing.scss";
// assets
import InfoIcon from "../../../assets/send-request/Info, Infornation.png";
import ParcelImg from "../../../assets/content/souvenir-box.png";

const Finalizing = () => {
	return (
		<>
			<form className="finalizing-sections p-3 p-md-4 mb-3">
				<fieldset className="m-3">
					<legend className="form-legend mb-4">شیوه پرداخت</legend>
					<label className="form-group d-flex justify-content-between radio-input ">
						درگاه بانکی
						<input type="radio" name="delivery-type" />
						<span className="radio-input__checkmark"></span>
					</label>
					<label className="form-group d-flex justify-content-between radio-input ">
						کیف پول (موجودی: ۴۰ یورو)
						<input type="radio" name="delivery-type" />
						<span className="radio-input__checkmark"></span>
					</label>
					<div className="d-flex justify-content-between">
						<input
							type="text"
							className="field-input col-8"
							placeholder="مبلغ موردنظر برای شارژ "
						/>
						<button type="submit" className="outline-blue-btn flex-grow-1 mr-3">
							شارژ کیف
						</button>
					</div>
				</fieldset>
				<div className="m-3">
					<img src={InfoIcon} alt="info icon" />
					<small className="form-description">
						حداقل نیاز به ۱۰ یورو افزایش موجودی دارید
					</small>
				</div>
				<hr className="mx-3"></hr>
				<fieldset className="m-3 mt-4">
					<legend className="form-legend mb-3">کد تخفیف دارید؟</legend>
					<div className="d-flex justify-content-between">
						<input
							type="text"
							className="field-input col-8"
							placeholder="مبلغ موردنظر برای شارژ "
						/>
						<button
							type="submit"
							className="outline-yellow-btn p-0 flex-grow-1 mr-3"
						>
							اعمال کد تخفیف
						</button>
					</div>
				</fieldset>
			</form>
			<div className="finalizing-sections p-3 p-md-4 mb-3">
				<div className="m-3 pb-3">
					<h1 className="form-legend mb-4">مسیر</h1>
					<div className="d-flex">
						<span className="col-1 px-0 text-light-clr">از</span>
						<p className="col-3 ml-3 pr-0 d-flex">اسپانیا، بارسلونا</p>
						<span className="col-1 pr-0 text-light-clr">به</span>
						<div className="d-flex flex-column flex-grow-1">
							<p className="mb-2">اسپانیا، بارسلونا</p>
							<p className="mb-2">La Fontanilla 65 Villanueva De Córdoba</p>
							<div>
								<span>۴۵۵۶۶۷۸۷۸</span>
								<span className="mx-2">،</span>
								<span>+۳۴۵۵۶۶۷۸۷۸</span>
							</div>
						</div>
					</div>
				</div>
				<div className="m-3 pb-3">
					<h1 className="form-legend mb-4">اطلاعات تماس</h1>
					<div>
						<span className="ml-4 text-light-clr">فرستنده</span>
						<span className="ml-5">+۳۴۵۵۶۶۷۸۷۸</span>
						<span className="ml-4 text-light-clr">گیرنده</span>
						<span>+۳۴۵۵۶۶۷۸۷۸</span>
					</div>
				</div>
				<div className="m-4 pb-3">
					<h1 className="form-legend mb-4">محتویات بسته</h1>
					<div className="d-flex justify-content-between flex-wrap">
						<div className="parcel-contents d-flex py-1 pr-1">
							<div className="parcel-contents__img col-4 p-0 ml-1">
								<img src={ParcelImg} alt="parcel image" />
							</div>
							<div className="flex-grow-1 overflow-hidden">
								<p className="parcel-contents__name">
									امپاگلیفلوزین داروی دیابت
								</p>
								<span className="parcel-contents__category-badge">
									سایر اقلام
								</span>
							</div>
						</div>
						<div className="parcel-contents d-flex py-1 pr-1">
							<div className="parcel-contents__img col-4 p-0 ml-1">
								<img src={ParcelImg} alt="parcel image" />
							</div>
							<div className="flex-grow-1 overflow-hidden">
								<p className="parcel-contents__name">
									امپاگلیفلوزین داروی دیابت
								</p>
								<span className="parcel-contents__category-badge">
									سایر اقلام
								</span>
							</div>
						</div>
						<div className="parcel-contents d-flex py-1 pr-1">
							<div className="parcel-contents__img col-4 p-0 ml-1">
								<img src={ParcelImg} alt="parcel image" />
							</div>
							<div className="flex-grow-1 overflow-hidden">
								<p className="parcel-contents__name">
									امپاگلیفلوزین داروی دیابت
								</p>
								<span className="parcel-contents__category-badge">
									سایر اقلام
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="m-3 pb-3">
					<h1 className="form-legend mb-4">نام بسته</h1>
					<div>
						<span className="ml-4">بسته مایحتاج خانوار</span>
					</div>
				</div>
				<div className="m-3 pb-3 ">
					<h1 className="form-legend mb-4">اطلاعات تکمیلی</h1>
					<div>
						<span className="ml-4 text-light-clr">نوع تحویل</span>
						<span className="ml-5">درب منزل</span>
						<span className="ml-4 text-light-clr">بیمه</span>
						<span className="ml-5">ندارد</span>
						<span className="ml-4 text-light-clr">محدودیت زمانی</span>
						<span>۲۰۲۱.۰۳.۰۶</span>
					</div>
				</div>
			</div>
		</>
	);
};
export default Finalizing;
