import './user-profile.scss'
import Star from './../../assets/content/Star.png'
import RequestAvatar from "../../assets/content/request-avatar.png";
import Messages from './../../assets/content/Messages.png'
import Euro from './../../assets/content/Euro.png'


const UserProfile = () => {
  return (
    <section className='min-vh-100 user-profile'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 mt-5'>
            <div className="requests-card">
              <div className="row mt-2 align-items-center">
                <img
                  className="ml-3 requests-card__avatar"
                  src={RequestAvatar}
                  alt="avatar"
                />
                <span className="ml-3 requests-card__name">آریو برزن</span>
                <span className="ml-2">
                  4<img src={Star} alt="star" />
                </span>
                <span>
                  4<img src={Messages} alt="message" />
                </span>

              </div>
              <div className='riport'>  <span >عضو شده در ۲۰۲۱.۰۸.۰۹</span></div>
              <div className="row d-flex align-items-center riport">
                <span>ارسال</span>
                <span>دریافت</span>
                <span>هزینه</span>
                <span>درآمد</span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={0}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="row  riport">
                <span className=" ml-2">مواد خوراکی</span>
                <span className=" ml-2">مدارک</span>
                <span className=" ml-2">سایر اقلام</span>
              </div>
              <div className="row">
                <span className=" ml-2">۳۰</span>
                <span className=" ml-2">۳</span>
                <img className=" ml-2" style={{ height: 10, marginTop: 15 }} src={Euro} alt='Euro' />
                <span className=" ml-2">۴۰۰</span>
                <img className=" ml-2" style={{ height: 10, marginTop: 15 }} src={Euro} alt='Euro' />
                <span className=" ml-2">۱۵۰</span>
              </div>
            </div>

          </div>

          <div className='col-md-8 mt-5 bg-white p-3' style={{ borderRadius: '12px' }}>


            <div className="mb-2">
              <div class="d-flex justify-content-between ">

                <div className="d-flex">
                  <img
                    className="ml-3 requests-card__avatar"
                    src={RequestAvatar}
                    alt="avatar"
                  />
                  <h6>اریوبرزن</h6>
                  <span>4</span>
                  <img className='user-star' src={Star} alt='Star' />
                  <span>4</span>
                  <img className='user-message' src={Messages} alt='Message' />
                </div>
                <div>
                  <span>۲۰۲۱.۰۱.۰۳</span>
                </div>
              </div>

              <div className="d-flex">
                <img className='user-star' src={Star} alt='Star' />
                <img className='user-star' src={Star} alt='Star' />
                <img className='user-star' src={Star} alt='Star' />
                <img className='user-star' src={Star} alt='Star' />
                <span className=" ml-2">۴ از ۵</span>
              </div>

              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان</p>


            </div>



            <div className="mb-2">
              <div class="d-flex justify-content-between ">

                <div className="d-flex">
                  <img
                    className="ml-3 requests-card__avatar"
                    src={RequestAvatar}
                    alt="avatar"
                  />
                  <h6>اریوبرزن</h6>
                  <span>4</span>
                  <img className='user-star' src={Star} alt='Star' />
                  <span>4</span>
                  <img className='user-message' src={Messages} alt='Message' />
                </div>
                <div>
                  <span>۲۰۲۱.۰۱.۰۳</span>
                </div>
              </div>

              <div className="d-flex">
                <img className='user-star' src={Star} alt='Star' />
                <img className='user-star' src={Star} alt='Star' />
                <img className='user-star' src={Star} alt='Star' />
                <img className='user-star' src={Star} alt='Star' />
                <span className=" ml-2">۴ از ۵</span>
              </div>

              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان</p>


            </div>




          </div>
        </div>
      </div>
    </section>
  )
}
export default UserProfile