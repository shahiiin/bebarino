import SouvenirBox from "../../../../../../assets/content/souvenir-box.png";
import "./box-content.scss";
const BoxContent = () => {
  return (
    <div className="souvenir-box d-flex align-items-center mb-3">
      <img src={SouvenirBox} alt="box image" />
      <div className="mr-2">
        <h6 className="souvenir-box__heading">امپاگلیفلوزین داروی دیابت</h6>
        <span className="sending-requests-aside__tag ml-2 mt-2">
          سایر اقلام
        </span>
      </div>
    </div>
  );
};

export default BoxContent;
