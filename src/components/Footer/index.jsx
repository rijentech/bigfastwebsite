import React from 'react';
import './footer.scss'

import logo from '../../assets/svgs/logo.svg'
import twittersocial from "../../assets/svgs/twittersocial.svg";
import { Link } from 'react-router-dom';

const Footer = ({bgcolor}) => {
  return (
    <footer className="" style={{ backgroundColor: bgcolor }}>
      <div className="footer_desktop_container">
        <div className="footer_container">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="company_links">
            <span className="title">Company</span>
            <ul>
              <li>
                <Link to="/" className="footer_link">
                  What Is BigFast?
                </Link>
              </li>
              <li>
                <Link to="/" className="footer_link">
                  API Repository
                </Link>
              </li>
              <li>
                <Link to="/" className="footer_link">
                  Tools
                </Link>
              </li>
            </ul>
          </div>
          <div className="form_container">
            <form>
              <div className="form_group">
                <label htmlFor="email" className="form_label">
                  Stay Connected
                </label>
                <div className="form_input_container">
                  <input
                    type="email"
                    id="email"
                    className="input_form"
                    placeholder="Your Email"
                  />
                  <button type="submit" className="submit_form_btn">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="footer_note">
          <div className="footer_credit">
            ©️ 2022, BigFastAPI. All rights reserved.
          </div>
          <div className="social">
            <img src={twittersocial} alt="Twitter" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
