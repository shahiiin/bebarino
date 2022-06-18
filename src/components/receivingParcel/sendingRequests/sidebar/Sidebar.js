import EditImage from "../../../../assets/content/edit.png";
import DeleteImage from "../../../../assets/content/delete.png";
import "./sidebar.scss";
const Sidebar = () => {
  return (
    <aside className="sending-requests-aside">
      <div className="sending-requests-aside__info d-md-block ">
        <h5 className="mb-3">تورنتو - تهران</h5>
        <div className="sending-requests-aside__value d-flex align-items-center">
          <span className="ml-1"> ۱ </span>
          <span> از ۵ کیلوگرم باقیمانده </span>
        </div>
        <div className="sending-requests-aside__day d-flex align-items-center">
          <span>۱۴ روز</span>
          <span className="mr-2">تا سفر (۲۰۲۱.۰۱.۰۳)</span>
        </div>
        <div className="d-flex align-items-center mt-4">
          <span className="sending-requests-aside__tag ml-2">مواد خوراکی</span>
          <span className="sending-requests-aside__tag ml-2">مدارک</span>
          <span className="sending-requests-aside__tag ml-2">سایر اقلام</span>
        </div>
      </div>
      <hr />
      <div className="sending-requests-aside__boxes d-flex align-items-center">
        <span>بسته‌ها</span>
        <span className="mr-auto">(۰)</span>
      </div>
      <hr />
      <div className="sending-requests-aside__buttons d-md-block">
        <div>
          <div>
            <button type="button">
              <img src={EditImage} alt="edit" />
              <span className="mr-2 text-button-edit">ویرایش</span>
            </button>
          </div>
          <button type="button" className="mt-3">
            <img src={DeleteImage} alt="delete" />
            <span className="mr-2 text-button-delete">لغو سفر</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
