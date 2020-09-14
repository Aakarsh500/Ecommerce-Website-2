import React from "react";
import { useHistory } from "react-router-dom";
import "./menu-list.styles.scss";
export const MenuList = ({ title, imgUrl, size, id, linkUrl, match }) => {
  const history = useHistory();
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`/${linkUrl}`)}
    >
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
