import Sidebar from "./sidebar";
import PackageSpecification from "./packageSpecification";
import "./scheduling-hand-off.scss";
const SchedulingHandOff = () => {
  return (
    <div className="scheduling-hand-off">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-8 offset-md-1">
            <PackageSpecification />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulingHandOff;
