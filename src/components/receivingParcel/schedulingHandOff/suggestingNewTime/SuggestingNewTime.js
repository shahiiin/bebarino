import "./suggesting-new-time.scss";
import Sidebar from "../sidebar";
import ParcelSpecification from "./parcelSpecification";
const SuggestingNewTime = () => {
  return (
    <div className="suggestin-new-time">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-8 offset-md-1">
            <ParcelSpecification />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestingNewTime;
