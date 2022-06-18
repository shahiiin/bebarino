import React from "react";
import { NavLink } from "react-router-dom";
// style
import "./TripCard.scss";
// assets
import Airplane from "../../../../../assets/content/airplane.png";
import Messages from "../../../../../assets/content/Messages.png";
import Star from "../../../../../assets/content/Star.png";
import RequestAvatar from "../../../../../assets/content/request-avatar.png";

const TripCard = () => {
	return (
		<div className="request-trip-card">
			<div className="row align-items-center">
				<h4>تورنتو - تهران</h4>
				<NavLink to="#" className="request-trip-card__get-box">
					<img src={Airplane} alt="airplane icon" />
					<span className="mr-1">دریافت بسته</span>
				</NavLink>
			</div>
			<div className="row mt-2 align-items-center">
				<img
					className="ml-3 request-trip-card__avatar"
					src={RequestAvatar}
					alt="avatar"
				/>
				<span className="ml-3 request-trip-card__name">آریو برزن</span>
				<span className="ml-2">
					۴<img src={Star} alt="star" />
				</span>
				<span>
					۴<img src={Messages} alt="message" />
				</span>
			</div>
			<div className="row d-flex align-items-center mt-2">
				<span className="request-trip-card__value"> ۱ </span>
				<span>از ۵ کیلوگرم باقیمانده</span>
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
			<div className="row mt-2">
				<span className="request-trip-card__tag ml-2">مواد خوراکی</span>
				<span className="request-trip-card__tag ml-2">مدارک</span>
				<span className="request-trip-card__tag ml-2">سایر اقلام</span>
			</div>
			<div className="row align-items-center mt-4">
				<span className="request-trip-card__day"> ۱۴ روز</span>
				<span className="mr-1 request-trip-card__until">
					{" "}
					تا سفر (۲۰۲۱.۰۱.۰۳){" "}
				</span>
			</div>
		</div>
	);
};

export default TripCard;
