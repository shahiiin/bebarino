import Sidebar from "./sidebar";
import RequestCard from "./requestCard";
import "./sendingRequests.scss";
const SendingRequests = () => {
  return (
    <div className="sending-requests">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-8 offset-md-1">
            <section className="sending-requests__left-contents mt-md-0">
              <div>
                <RequestCard />
                <RequestCard />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendingRequests;
