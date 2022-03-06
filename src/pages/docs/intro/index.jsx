import React from 'react';

import Docsidebar from '../../../components/docSidebar'
import './intro.scss'

import code1 from '../../../assets/svgs/code1.svg'
import code2 from "../../../assets/svgs/code2.svg";


const Introduction = ({ sidebaropen }) => {
  return (
    <div className="introduction_container">
    <Docsidebar sidebaropen={sidebaropen} />
      <div className="introduction_contents">
        <section className="section">
          <div className="heading_title">Introduction</div>
          <div className="content_container">
            <p>
              The Authentication API enables you to manage all aspects of user
              identity when you use Auth0. It offers endpoints so your users can
              log in, sign up, log out, access APIs, and more.
            </p>
            <p>
              The API supports various identity protocols, like OpenID Connect,
              OAuth 2.0, and SAML.
            </p>
          </div>
        </section>
        <section className="base_url_container">
          <div className="title">Base URL</div>
          <div className="content_container">
            Bigfast is a library that is designed{" "}
            <span className="github_link">
              {" "}
              git clone https://github.com/fly-apps/go-example
            </span>{" "}
            <br />
            <br />
            <span className="github_link"> git clone https </span>
            Healio is a self-help app designed
          </div>
          <div className="code_img">
            <img src={code1} alt="" />
          </div>
          <div className="content_container">
            You may not know what an API does. You may not know what it stands
            for. But everyday APIs are working behind the scenes to provide you
            richer digital experiences. The movie ticket you bought online, the
            blogger’s recipe you shared on Facebook, and the cheap flight you
            booked on Expedia are all thanks to APIs.
          </div>
          <div className="code_img">
            <img src={code2} alt="" />
          </div>
          <div className="section_sub_topic">
            <div className="title">Authentication Method</div>
            <div className="content_container">
              Install{" "}
              <span className="github_link">
                {" "}
                git clone https://github.com/fly-apps/go-example
              </span>{" "}
              <span className="github_link"> git clone https </span>
              Healio is a self-help app designed
            </div>
          </div>
          <div className="section_sub_topic">
            <div className="title">Parameters</div>
            <div className="content_container">
              For GET requests, any parameters not specified as a segment in the
              path can be passed as an HTTP query string parameter:
              <br /> <br />
              <span className="github_link">
                GET https://YOUR_DOMAIN/some-endpoint?param=value&param=value
              </span>
              <br /> <br />
            </div>
            <div className="content_container">
              For POST requests, parameters not included in the URL should be
              encoded as JSON with a Content-Type of{" "}
              <span className="github_link">application/json:</span>
            </div>
            <div className="content_container">
              <span className="github_link">
                curl --request POST --url 'https://YOUR_DOMAIN/some-endpoint'
                --header 'content-type: application/json' --data{" "}
                {'{"param": "value", "param": "value"}'}
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Introduction;
