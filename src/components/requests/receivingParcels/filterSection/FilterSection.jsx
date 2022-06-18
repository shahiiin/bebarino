// style
import "./FilterSection.scss";
// assets
import CancelIcon from "../../../../assets/requests/DeleteDisabledSM.png";
import CancelIcon2 from "../../../../assets/requests/DeleteDisabled2.png";
import CalenderIcon from "../../../../assets/requests/CalendarSchedule.png";
// componnents
import Slider from "../../../Slider";

const FilterSection = () => {
	return (
		<>
			<form className="receiving-parcel-filter-section pr-3">
				<fieldset>
					<legend className="receiving-parcel-filter-section__legend">
						مسیر
						<img
							src={CancelIcon2}
							className="receiving-parcel-filter-section__legend__icon"
							alt="cancel icon"
						/>
					</legend>
					<div className="d-flex flex-column mb-3">
						<label className="receiving-parcel-filter-section__label">از</label>
						<input
							type="text"
							className="receiving-parcel-filter-section__field-input"
							placeholder="نام شهر مبدا را وارد کنید"
						/>
						<div>
							<span className="receiving-parcel-filter-section__badge">
								<img src={CancelIcon} alt="cancel icon" />
								تورنتو
							</span>
						</div>
					</div>
					<div className="d-flex flex-column mb-3">
						<label className="receiving-parcel-filter-section__label">به</label>
						<input
							type="text"
							className="receiving-parcel-filter-section__field-input"
							placeholder="نام شهر مقصد را وارد کنید"
						/>
						<div>
							<span className="receiving-parcel-filter-section__badge">
								<img src={CancelIcon} alt="cancel icon" />
								تهران
							</span>
							<span className="receiving-parcel-filter-section__badge">
								<img src={CancelIcon} alt="cancel icon" />
								تبریز
							</span>
						</div>
					</div>
				</fieldset>
				<fieldset>
					<legend className="receiving-parcel-filter-section__legend">
						بازه زمانی
						<img
							src={CancelIcon2}
							className="receiving-parcel-filter-section__legend__icon"
							alt="cancel icon"
						/>
					</legend>
					<div className="d-flex flex-column mb-3">
						<label className="receiving-parcel-filter-section__label">
							از
							<img src={CalenderIcon} alt="calender icon" />
						</label>
						<input
							type="date"
							className="receiving-parcel-filter-section__field-input"
							placeholder="شروع تاریخ"
						/>
					</div>
					<div className="d-flex flex-column mb-3">
						<label className="receiving-parcel-filter-section__label">
							تا
							<img src={CalenderIcon} alt="calender icon" />
						</label>
						<input
							type="date"
							className="receiving-parcel-filter-section__field-input"
							placeholder="اتمام تاریخ"
						/>
					</div>
				</fieldset>
				<fieldset>
					<legend className="receiving-parcel-filter-section__legend">
						وزن
						<img
							src={CancelIcon2}
							className="receiving-parcel-filter-section__legend__icon"
							alt="cancel icon"
						/>
					</legend>
					<div className="d-flex flex-column mb-3">
						<Slider />
						<div className="mt-3">
							<span className="ml-1">۱</span>
							<span className="receiving-parcel-filter-section__disable-label">
								تا
							</span>
							<span className="mx-1">۴</span>
							<span className="receiving-parcel-filter-section__disable-label">
								کیلوگرم
							</span>
						</div>
					</div>
				</fieldset>
				<fieldset>
					<legend className="receiving-parcel-filter-section__legend">
						دسته‌بندی کالاهای بسته
					</legend>
					<div className="d-flex flex-column mb-3">
						<label className="receiving-parcel-filter-section__disable-label">
							تمام دسته‌بندی‌ها
							<input type="checkbox" />
							<span className="receiving-parcel-filter-section__disable-label__checkmark"></span>
						</label>
						<label className="receiving-parcel-filter-section__disable-label">
							مدارک <input type="checkbox" />
							<span className="receiving-parcel-filter-section__disable-label__checkmark"></span>
						</label>
						<label className="receiving-parcel-filter-section__disable-label">
							مواد خوراکی <input type="checkbox" />
							<span className="receiving-parcel-filter-section__disable-label__checkmark"></span>
						</label>
						<label className="receiving-parcel-filter-section__disable-label">
							داروها <input type="checkbox" />
							<span className="receiving-parcel-filter-section__disable-label__checkmark"></span>
						</label>
					</div>
				</fieldset>
			</form>
		</>
	);
};
export default FilterSection;
