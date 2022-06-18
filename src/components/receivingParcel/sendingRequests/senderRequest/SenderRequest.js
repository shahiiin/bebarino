import "./senderRequest.scss";
import Sidebar from "./sidebar";
import SouvenirPackages from "./souvenirPackages";
const SenderRequest = () => {
  return (
    <>
      <div className="sender-request">
        <div className="sender-request__content">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <Sidebar />
              </div>
              <div className="col-md-8 offset-md-1">
                <SouvenirPackages />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SenderRequest;
