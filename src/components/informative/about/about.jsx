import aboutphoto from './../../../assets/images/about.png'
import abouthome from './../../../assets/images/home.png'
import aboutphone from './../../../assets/images/phone.png'
import aboutcalendar from './../../../assets/images/calendar.png'
import u1 from './../../../assets/images/u1.png'
import u2 from './../../../assets/images/u2.png'
import u3 from './../../../assets/images/u3.jpg'
import u4 from './../../../assets/images/u4.png'
const About = () => {
  return (
    <main>
      <section className="min-vh-30">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="p-5">
              <h6>درباره ما</h6>
              <h2>ببرینو</h2>
              </div>
              <p className="m-3">
                بسته‌های ارسالی خود را در اختیار برنده‌های مورد اعتماد ببرینو قرار دهید یا سفر بعدی خود را ثبت کرده و با بردن 
.بسته‌ها کسب درآمد کنید بسته‌های ارسالی خود را در اختیار برنده‌های مورد اعتماد ببرینو قرار دهید یا سفر بعدی خود را ثبت کرده و با بردن بسته‌ها کسب درآمد کنید بسته‌های ارسالی خود را در اختیار برنده‌های مورد اعتماد ببرینو قرار دهید یا سفر بعدی خود را ثبت کرده و با بردن 
.بسته‌ها کسب درآمد کنید بسته‌های ارسالی خود را در اختیار برنده‌های مورد اعتماد ببرینو قرار دهید
              </p>
            
            </div>
            <div className="col">
              <img src={aboutphoto} className="img-fluid" alt="" />
            </div>
          </div>
       </div>
      </section>
      <section className="min-vh-30 p-5" >
        <div className="container">
          <div className="row">

            <div className="col d-flex justify-content-center flex-column align-items-center mb-4">
              <h3>با ما در تماس باشید</h3>
               <p>.پشتیبانی آنلاین ببرینو در همه حال پاسخگوی شما خواهد بود
                <br />به علاوه می‌توانید از طریق این کانال‌ها ارتباطی با ما در تماس باشید</p>
            </div>

          </div>
          <div className="container">
          <div className="row">
                      
            <div className="col-4  d-flex flex-column justify-content-center align-items-center">
              <img src={abouthome} className="w-12" alt="" />
              <p className="m-2">تهران، خیابان شریعتی،<br />  خیابان میرزاپور ،کوچه باران، پلاک ۲</p>
            </div>
           <div className="col-4 d-flex flex-column justify-content-center align-items-center">
              <img src={aboutphone} className="w-12" alt="" />
            <p className="m-3">۰۲۱-۳۳۴۴۵۵۶</p>
            </div>
            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
               <img src={aboutcalendar} className="w-12" alt="" />
               <p className="m-3" >Send@Bebarino.com</p>
             </div>
            </div>
        </div>
        </div>
        </section>
          <section className="min-vh-40">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="row d-flex  justify-content-center  align-items-center">
                <img src={u1} className="w-25 p-2" alt="" />
              <img src={u2} className="w-25 p-2" alt="" />

              </div>
              <div className="row d-flex  justify-content-center align-items-center">
              <img src={u3} className="w-25 p-2" alt="" />
              <img src={u4} className="w-25 p-2" alt="" />
            </div>
            </div>
            
              <div className="col">
              <div className="p-5 d-flex  justify-content-start flex-column align-items-start">
              
                <h5>تیم ببرینو</h5>
                <p className="my-3">
              
از گوشه‌کنار دنیا گرد هم آمدیم تا بستری قابل اعتماد<br /> برای بهبود یک راه‌حل جمعی ارائه کنیم
            
          </p>
                
              </div>
   
          </div>
        
          
     </div>
     </div>
     </section>

      
</main>)





}

export default About