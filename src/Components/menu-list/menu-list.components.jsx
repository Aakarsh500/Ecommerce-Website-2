import React from "react";
import "./menu-list.styles.scss";
export const MenuList = ({ title, imgUrl, size, id }) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">ORDER NOW</span>
      </div>
    </div>
  );
};
