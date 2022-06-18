import { Link } from "react-router-dom";
// style
import "./SignIn.scss";
// assets
import AppInput from "../../common/AppInput";
import appleLogo from "./../../../assets/images/group-184.png";
import googleLogo from "./../../../assets/images/group-183.png";
import facebookLogo from "./../../../assets/images/group-185.png";

const SignIn = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
	};
	return (
		<>
			<h1 className="mb-3">ورود</h1>
			<form onSubmit={handleSubmit} className="pt-5">
				<AppInput
					id="email"
					name="email"
					label="ایمیل/شماره تلفن"
					placeholder="لطفا ایمیل یا شماره تلفن همراه خود را وارد کنید"
				/>
				<div className="d-flex justify-content-end pt-4">
					<button className="btn primary-button">دریافت کد</button>
				</div>
				<div className="pt-5 text-center">
					<div className="text-center d-flex justify-content-center align-items-center">
						<span className="sign-in__divider_text">یا</span>
					</div>
					<div className="d-flex align-items-center justify-content-center mt-4 mb-5">
						<Link to="">
							<img
								className="sign-in__login-icon"
								src={appleLogo}
								alt="login with Apple"
							/>
						</Link>
						<Link to="" className="mx-md-5">
							<img
								className="sign-in__login-icon"
								src={googleLogo}
								alt="login with Google"
							/>
						</Link>
						<Link to="">
							<img
								className="sign-in__login-icon "
								src={facebookLogo}
								alt="login with Facebook"
							/>
						</Link>
					</div>
				</div>
				<label
					className="sign-in__checkbox-input mt-2 pr-3"
					htmlFor="exampleCheck1"
				>
					<input type="checkbox" id="exampleCheck1" />
					<span className="sign-in__checkbox-input__checkmark"></span>
					<Link
						to="/term-of-use"
						className="sign-in__checkbox-input__terms-link"
						target="_blank"
					>
						{" "}
						قوانین و مقررات
					</Link>
					<span className="sign-in__checkbox-input__text">
						{" "}
						را مطالعه کرده و قبول دارم
					</span>
				</label>
			</form>
		</>
	);
};

export default SignIn;
