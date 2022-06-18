import userImg from "../../../assets/images/placeholder/user-image.jpg";
import Messages from "../../../assets/content/Messages.png";
import Star from "../../../assets/content/Star.png";

const UserInfo = () => {
	return (
		<div className="user-info d-none d-md-flex">
			<img src={userImg} className="user-image rounded-circle"></img>
			<div className="d-flex justify-content-between flex-column mr-3">
				<div className="">
					<p className=" d-inline-block user-name ml-2">آریو برزن</p>
					<span className="user-stat-text">۳</span>
					<img src={Star} className="ml-1"></img>
					<span className="user-stat-text">۴</span>
					<img src={Messages}></img>
				</div>
				<div>
					<p className="user-email mb-0">h.karami1996@gmail.com</p>
				</div>
			</div>
		</div>
	);
};

export default UserInfo;
