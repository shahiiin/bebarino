import "./main-tab.scss";
const MainTab = () => {
  return (
    <div className="main-tab">
      <button type="button" className="main-tab__button active">
        ثبت‌شده
      </button>
      <button type="button" className="main-tab__button mr-5">
        انتخاب‌شده
      </button>
    </div>
  );
};

export default MainTab;
