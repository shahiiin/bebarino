import React from "react";
import { NavLink } from "react-router-dom";
import Airplane from "../../assets/content/airplane.png";
import Messages from "../../assets/content/Messages.png";
import Star from "../../assets/content/Star.png";
import RequestAvatar from "../../assets/content/request-avatar.png";
import "./card.scss";
const Card = () => {
  return (
    <div className="requests-card">
      <div className="row align-items-center">
        <h4>تورنتو - تهران</h4>
        <NavLink to="#" className="requests-card__get-box">
          <img src={Airplane} alt="airplane icon" />
          <span className="mr-1">دریافت بسته</span>
        </NavLink>
      </div>
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
      <div className="row d-flex align-items-center mt-2">
        <span className="requests-card__value">5</span>
        <span>از 5 کیلوگرم باقی مانده</span>
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
        <span className="requests-card__tag ml-2">مواد خوراکی</span>
        <span className="requests-card__tag ml-2">مدارک</span>
        <span className="requests-card__tag ml-2">سایر اقلام</span>
      </div>
      <div className="row align-items-center mt-4">
        <span className="requests-card__day"> 14 روز</span>
        <span className="mr-1 requests-card__until"> تا سفر (۲۰۲۱.۰۱.۰۳) </span>
        <NavLink to="#" className="requests-card__link primary-button mr-auto">
          مشاهده سفر
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
