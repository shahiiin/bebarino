import "./SearchAndFilterSection.scss";
// assets
import SortingIcon from "../../../../assets/requests/ArrangeFilterSort.png";
import SearchIcon from "../../../../assets/requests/Search.png";

const SearchAndFilterSection = () => {
	return (
		<form className="d-flex flex-column search-filter">
			<div className="search-filter__main-tabs mb-4">
				<label className="search-filter__main-tabs__label ml-5">
					ارسال بسته
					<input type="radio" name="main-filtering" checked />
					<span className="search-filter__main-tabs__label__checkmark"></span>
				</label>
				<label className="search-filter__main-tabs__label">
					دریافت بسته
					<input type="radio" name="main-filtering" />
					<span className="search-filter__main-tabs__label__checkmark"></span>
				</label>
			</div>
			<div className="d-flex justify-content-between align-items-center search-filter__search-sort">
				<img src={SearchIcon} alt="search icon" />
				<input
					type="search"
					placeholder="دسته‌بندی کالاهای بسته"
					className="flex-grow-1 ml-3"
				/>
				<button>
					<img src={SortingIcon} className="ml-2" alt="sorting icon" />
					مرتب سازی
				</button>
			</div>
		</form>
	);
};
export default SearchAndFilterSection;
