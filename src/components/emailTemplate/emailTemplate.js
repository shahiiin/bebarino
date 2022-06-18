import "./emailTemplate.scss";
import Infornation from "./../../assets/images/Infornation.png";

const EmailTemplate = () => {
  return (
    <main>
      <section className="mt-2">
        <div className="container">
          <div className="row">
            <div className="col p-5">
              <h5 className="mb-3">آریوبرزن عزیز،</h5>
              <h3>پرداخت شما به ببرینو موفقیت انجام شد</h3>
              <div className="mt-5 d-flex justify-content-start">
                <h4 className="ml-3 tracker-title">شماره پیگیری </h4>
                <h4 className="marine-blue">B-34u9880</h4>
              </div>
            </div>

            <div className="col">
              <div className="text-left">
                <h2>Bebarino</h2>
                <h6>.post by people</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-2">
        <div className="container">
          <div className="row">
            <div className="col">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">تاریخ</th>
                    <th scope="col">نوع فرآیند</th>
                    <th scope="col">نام صاحب حساب</th>
                    <th scope="col">مبلغ پرداختی</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">۲۰۲۱.۰۱.۰۳</th>
                    <td>قبول درخواست دریافت</td>
                    <td>سید محمدرضا صادقی</td>
                    <td>۴۰یورو</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="d-flex">
                <img
                  src={Infornation}
                  className="m-1"
                  style={{ height: "30px" }}
                  alt=""
                />
                <p className="ml-3 tracker-title">
                  هزینه پرداختی نزد ببرینو محفوظ بوده و تنها پس از تایید تحویل
                  به
                  <br /> حساب برنده واریز می‌شود
                </p>
              </div>
              <h5 className="pt-5 invoice-title">جزییات پرداخت انجام شده</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th colSpan={3}>درخواست دریافت</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>مسیر</th>
                    <td colSpan={2}>تورنتو - تهران</td>
                  </tr>
                  <tr>
                    <th>برنده</th>
                    <td colSpan={2}>سورنا</td>
                  </tr>
                  <tr>
                    <th>میزان بار</th>
                    <td colSpan={2}>۱۴کیلوگرم</td>
                  </tr>
                  <tr>
                    <th>دسته‌بندی</th>
                    <td colSpan={2}>مواد خوراکی، مدارک</td>
                  </tr>
                  <tr>
                    <th>زمان سفر</th>

                    <td colSpan={2}>۲۰۲۱.۰۱.۰۳</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="col-md-6">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th colSpan={3}>بسته شما: بسته سوغاتی‌های خوراکی</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>مسیر</th>
                    <td colSpan={2}>تورنتو - تهران</td>
                  </tr>
                  <tr>
                    <th>برنده</th>
                    <td colSpan={2}>آریوبرزن</td>
                  </tr>
                  <tr>
                    <th>میزان بار</th>
                    <td colSpan={2}>۵کیلوگرم</td>
                  </tr>
                  <tr>
                    <th>دسته‌بندی</th>
                    <td colSpan={2}>مواد خوراکی</td>
                  </tr>
                  <tr>
                    <th>زمان سفر</th>

                    <td colSpan={2}>۴۰یورو</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col mt-5 d-flex justify-content-center ">
              <button className="btn primary-action-outline-button">
                چاپ فاکتور
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <hr />
              <div className="mt-5 d-flex flex-wrap justify-content-around align-items-center">
                <h6>
                  در صورت تمایل و یا مشاهده مقایرت می‌توانید پرداخت انجام شده را
                  لغو کنید
                </h6>
                <button className="btn danger-outline-button m-1">
                  لغو پرداخت
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmailTemplate;
