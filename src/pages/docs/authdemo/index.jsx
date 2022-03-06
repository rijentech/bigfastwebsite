import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.scss";

import authsourcecode from "../../../assets/svgs/authsourcecode.svg";

const Auth = () => {
    const navigate = useNavigate();

  return (
    <div className="auth_container">
      <div className="heading">
        <span className="title">Auth</span>
        <span className="description">Sample Source Code</span>
      </div>
      <div className="demo_container">
        <div className="codeblock_container">
          <div className="title">Backend</div>
          <div className="img_container">
            <img src={authsourcecode} alt="" />
          </div>
        </div>
        <div className="codeblock_container">
          <div className="title">UI Code</div>
          <div className="img_container">
            <img src={authsourcecode} alt="" />
          </div>
        </div>
      </div>
      <div className="button_container">
        <button onClick={() => navigate(-1)} class="button">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Auth;
