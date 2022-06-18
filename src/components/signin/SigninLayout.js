import { Link } from "react-router-dom";
// style
import "./SigninLayout.scss";
// assets
import SignInImage from "./../../assets/images/bck.png";
import DisabledIcon from "../../assets/content/DeleteDisabled2.png";

const SigninLayout = ({ children }) => {
	return (
		<section id="sign-in">
			<div className="container-fluid">
				<div className="row">
					<div className="sign-in__info col-md-6">{children}</div>
					<div className="col-md-6 p-0">
						<div className="sign-in__image ">
							<Link to="/">
								<button type="button">بازگشت</button>
								<img src={DisabledIcon} alt="cancel icon" />
							</Link>
							<img src={SignInImage} className="img-fluid" alt="ورود به سایت" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SigninLayout;
