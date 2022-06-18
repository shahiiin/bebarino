import Rectanglepng from './../../../assets/images/Rectangle 62.png'
import ticketpng from './../../../assets/images/ticket.png'
import Rectangle63png from './../../../assets/images/Rectangle 63.png'
import trolleypng from './../../../assets/images/trolley.png'
import Rectangle79png from './../../../assets/images/Rectangle 79.png'
import distancepng from './../../../assets/images/distance.png'
import Rectangle80png from './../../../assets/images/Rectangle 80.png'
import profitpng from './../../../assets/images/profit.png'
import Bubble12png from './../../../assets/images/Bubble.12.png'
const HowWorks = () => {
    return (
        <main>
       <section className="min-vh-30">
      <div className="container mb-5">
        <div className="row">
          <div className="col-12  d-flex align-items-center flex-column">
            <div className="how-works__texts col-md-6">
              <h2>چطور کار می‌کند؟</h2>
              <p>
                در ببرینو فرستندگان ارسال‌های بین‌المللی با برنده‌های مسافر
                دارای فضای بار اضافی ارتباط می‌گیرند‌
              </p>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="how-works__button-group p-1">
                <button type="button">فرستنده</button>
                <button type="button" className="active">
                  برنده
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section className="min-vh-70">

                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-6 text-center ">
                            <img src={Rectanglepng} className="img-fluid" alt="pic 1"  />
                        </div>
                        <div className="col ">
                            <div className='d-flex flex-column justify-content-start align-items-start pt-5 pr-2'>
                                 <img src={ticketpng} className="mb-3" alt="" style={{ width:'2rem' }}  />
                            <h6>ثبت سفر و درخواست </h6>
                            <h6>دریافت بسته</h6>
                            <p className="my-4">
                                با ثبت مشخصات دقیق بسته ارسالی خود می‌تواند<br/> درخواست ارسال بسته توسط برندگان را داشته باشید
                            </p>

                           </div>

                        </div>
                    </div>

                       <div className="row mb-5">
                       
                        <div className="col ">
                            <div className='d-flex flex-column justify-content-start align-items-start pt-5 pr-2'>
                                   <img src={trolleypng} className="mb-3" alt="" style={{ width:'2rem' }} />
                            <h6> هماهنگی با فرستنده و </h6>
                            <h6>تحویل گرفتن بسته </h6>
                            <p className="my-4">
                                با ثبت مشخصات دقیق بسته ارسالی خود می‌تواند درخواست <br/>ارسال بسته توسط برندگان را داشته باشید
                            </p>

                           </div>

                        </div>
                    
                     <div className="col-md-6 text-center mb-5">
                            <img src={Rectangle63png} className="img-fluid" alt="pic 1"  />
                        </div>
                    </div>
                </div>
                         <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-6 text-center ">
                            <img src={Rectangle79png} className="img-fluid" alt="pic 1"  />
                        </div>
                        <div className="col ">
                            <div className='d-flex flex-column justify-content-start align-items-start pt-5 pr-2'>
                                 <img src={distancepng} className="mb-3" alt="" style={{ width:'2rem' }}  />
                            <h6>انجام سفر و تحویل</h6>
                            <h6>دادن بسته</h6>
                            <p className="my-4">
                                با ثبت مشخصات دقیق بسته ارسالی خود می‌تواند<br/> درخواست ارسال بسته توسط برندگان را داشته باشید
                            </p>

                           </div>

                        </div>
                    </div>

                       <div className="row  mb-5">
                       
                        <div className="col ">
                            <div className='d-flex flex-column justify-content-start align-items-start pt-5 pr-2'>
                                   <img src={profitpng} className="mb-3" alt="" style={{ width:'2rem' }} />
                            <h6> تایید تحویل و </h6>
                            <h6> دریافت هزینه </h6>
                            <p className="my-4">
                                با ثبت مشخصات دقیق سفر خود می‌تواند درخواست <br/>دریافت بسته از فرستندگان را داشته باشید
                            </p>

                           </div>

                        </div>
                    
                     <div className="col-md-6 text-center">
                            <img src={Rectangle80png} className="img-fluid" alt="pic 1"  />
                        </div>
                    </div>
                </div>
             
            
            </section>
        </main>
  
    )
}


export default HowWorks