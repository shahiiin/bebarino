// style
import "./Welcome.scss";
// assets
import AppInput from "../../common/AppInput";
import CameraImage from "./../../../assets/content/camera.png";

const Welcome = () => {
	return (
		<div className="sign-in__welcome">
			<div className="sign-in__welcome__texts">
				<h1 className="text-right">خوش آمدید!</h1>
				<h5 className="text-right mt-5">
					لطفا اطلاعات کاربری خود را تکمیل کنید
				</h5>
			</div>
			<form>
				<div className="file-select mt-5 d-flex align-items-center justify-content-center">
					<label
						htmlFor="fileSelect"
						className="sign-in__welcome__image-input d-flex align-items-center justify-content-center"
					>
						<img src={CameraImage} alt="camera" />
					</label>
					<input id="fileSelect" type="file" name="fileSelect" />
				</div>
				<div>
					<AppInput
						label="نام کاربری"
						name="username"
						id="username"
						type="text"
						placeholder="نام کاربری خود را وارد نمایید"
					/>
					<div className="d-flex sign-in__welcome__btn-group mt-4">
						<div className="col-md-6 pr-0">
							<button className="primary-outline-button w-100">
								بعدا انجام میدم
							</button>
						</div>
						<div className="col-md-6 pl-0">
							<button className="primary-button w-100">ثبت تغییرات</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Welcome;
