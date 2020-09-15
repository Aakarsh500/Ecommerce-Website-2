import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-list.styles.scss";
const MenuItem = ({ title, imgUrl, size, id, linkUrl, match, history }) => {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
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
export default withRouter(MenuItem);
