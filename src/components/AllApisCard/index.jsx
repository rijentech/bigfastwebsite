import React from "react";
import { Link, useLocation } from "react-router-dom";
import './allApiscard.scss'

const ApiCardLink = ({ icon, title, description, to }) => {
  return (
    <div className="api_card_link_container">
      <div className="img_container">
        <img src={icon} alt="" />
      </div>
      <div className="info_container">
        <div className="title">
          <Link to="/docs/auth" className="link">
            {title}
          </Link>
        </div>
        <div className="description">
          <span className="text_desc">{description}</span>{" "}
          <span className="">
            <Link to={to} className="link read_more">
              Read More
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ApiCardLink;
