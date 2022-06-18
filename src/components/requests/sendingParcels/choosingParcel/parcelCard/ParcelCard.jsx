import React from "react";
import { NavLink } from "react-router-dom";
// style
import "./ParcelCard.scss";
// assets
import Baggage from "../../../../../assets/content/Baggage.png";
import Messages from "../../../../../assets/content/Messages.png";
import Star from "../../../../../assets/content/Star.png";
import RequestAvatar from "../../../../../assets/content/request-avatar.png";

const ParcelCard = () => {
	return (
		<div className="requests-parcel-card">
			<div className="row align-items-center">
				<h4>تورنتو - تهران</h4>
				<NavLink to="#" className="requests-parcel-card__send-box">
					<img src={Baggage} alt="baggage icon" />
					<span className="mr-1">ارسال بسته</span>
				</NavLink>
			</div>
			<div className="row mt-2 align-items-center">
				<img
					className="ml-3 requests-parcel-card__avatar"
					src={RequestAvatar}
					alt="avatar"
				/>
				<span className="ml-3 requests-parcel-card__name">آریو برزن</span>
				<span className="ml-2">
					۴<img src={Star} alt="star" />
				</span>
				<span>
					۴<img src={Messages} alt="message" />
				</span>
			</div>
			<div className="row align-items-center mt-2">
				<span className="requests-parcel-card__parcel-name">
					بسته سوغاتی‌های خوراکی
				</span>
			</div>
			<div className="row mt-2">
				<span className="requests-parcel-card__tag ml-2">مواد خوراکی</span>
			</div>
			<div className="row d-flex align-items-center mt-4">
				<span className="requests-parcel-card__value ml-1">۵</span>
				<span> کیلوگرم </span>
				<span className="requests-parcel-card__value mr-3 ml-1">۵۰</span>
				<span> یورو </span>
			</div>
		</div>
	);
};

export default ParcelCard;
