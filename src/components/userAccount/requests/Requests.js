import "./requests.scss";
import Sidebar from "./sidebar";
import Content from "./content";
const Requests = () => {
  return (
    <div className="requests-page">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-8 offset-md-1">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requests;
