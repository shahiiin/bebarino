import { NavLink } from "react-router-dom";
import Card from "../../Card";
import "./requests.scss";

const Requests = () => {
  return (
    <section className="requests">
      <div className="container">
        <div className="row align-items-center mb-5">
          <h2>جدیدترین درخواست‌ها</h2>
          <NavLink to="#" className="mr-auto requests__see-all">
            <span className="ml-4">مشاهده همه</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.414"
              height="16.828"
              viewBox="0 0 20.414 16.828"
            >
              <path
                fill="none"
                stroke="#003d66"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.414 15.414l-7-7m0 0l7-7m-7 7h18"
                data-name="Path 1"
              ></path>
            </svg>
          </NavLink>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Requests;
