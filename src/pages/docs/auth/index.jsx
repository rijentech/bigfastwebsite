import React from "react";
import Docsidebar from "../../../components/docSidebar";
import "./auth.scss";

import authIcon from "../../../assets/svgs/authicon.svg";
import authflow from "../../../assets/svgs/authflow.svg";
import reactlogo from "../../../assets/svgs/reactlogo.svg";
import reactlogo2 from "../../../assets/svgs/reactlogo2.svg";
import pythonlogo from "../../../assets/svgs/pythonlogo.svg";
import phplogo from "../../../assets/svgs/phplogo.svg";
import htmllogo from "../../../assets/svgs/htmllogo.svg";
import csslogo from "../../../assets/svgs/csslogo.svg";
import vuelogo from "../../../assets/svgs/vuelogo.svg";
import authapiflow from "../../../assets/svgs/authapiflow.svg";
import Authtabledata from "../../../components/ApiEndpointsTable/authtabledata";

const AuthDoc = ({sidebaropen}) => {

    const endpoints = [
      {
        method: "POST",
        url: "/User",
        purposeheader: "Login User",
        purpose: "This is what allows you to create user accounts on a website",
        sourcecode: [reactlogo, pythonlogo, phplogo],
        uisample: [htmllogo, csslogo, reactlogo2, vuelogo],
      },
      {
        method: "POST",
        url: "/Login",
        purposeheader: "Login User",
        purpose: "This is what allows you to create user accounts on a website",
        sourcecode: [reactlogo, pythonlogo, phplogo],
        uisample: [htmllogo, csslogo, reactlogo2, vuelogo],
      },
      {
        method: "POST",
        url: "/Login/organization",
        purposeheader: "Login User",
        purpose: "This is what allows you to create user accounts on a website",
        sourcecode: [reactlogo, pythonlogo, phplogo],
        uisample: [htmllogo, csslogo, reactlogo2, vuelogo],
      },
      {
        method: "POST",
        url: "/Login",
        purposeheader: "Login User",
        purpose: "This is what allows you to create user accounts on a website",
        sourcecode: [reactlogo, pythonlogo, phplogo],
        uisample: [htmllogo, csslogo, reactlogo2, vuelogo],
      },
      {
        method: "POST",
        url: "/Logout",
        purposeheader: "Login User",
        purpose: "This is what allows you to create user accounts on a website",
        sourcecode: [reactlogo, pythonlogo, phplogo],
        uisample: [htmllogo, csslogo, reactlogo2, vuelogo],
      },
      {
        method: "GET",
        url: "/users/me",
        purposeheader: "Get user",
        purpose: "This is what allows you to create user accounts on a website",
        sourcecode: [reactlogo, pythonlogo, phplogo],
        uisample: [htmllogo, csslogo, reactlogo2, vuelogo],
      },
      {
        method: "PUT",
        url: "/users/me",
        purposeheader: "Update Users",
        purpose: "This is what allows you to create user accounts on a website",
        sourcecode: [reactlogo, pythonlogo, phplogo],
        uisample: [htmllogo, csslogo, reactlogo2, vuelogo],
      },
      {
        method: "POST",
        url: "/Users/resend-verification-code",
        purposeheader: "Resend Verification code",
        purpose: "This is what allows you to create user accounts on a website",
        sourcecode: [reactlogo, pythonlogo, phplogo],
        uisample: [htmllogo, csslogo, reactlogo2, vuelogo],
      },
      {
        method: "POST",
        url: "/user/verify/code/{code}",
        purposeheader: "verify user with code",
        purpose: "This is what allows you to create user accounts on a website",
        sourcecode: [reactlogo, pythonlogo, phplogo],
        uisample: [htmllogo, csslogo, reactlogo2, vuelogo],
      },
      {
        method: "POST",
        url: "/users/forgot-password/code",
        purposeheader: "password reset email",
        purpose: "This is what allows you to create user accounts on a website",
        sourcecode: [reactlogo, pythonlogo, phplogo],
        uisample: [htmllogo, csslogo, reactlogo2, vuelogo],
      },
      {
        method: "PUT",
        url: "/users/password-change/code/{code}",
        purposeheader: "Password change",
        purpose: "This is what allows you to create user accounts on a website",
        sourcecode: [reactlogo, pythonlogo, phplogo],
        uisample: [htmllogo, csslogo, reactlogo2, vuelogo],
      },
      {
        method: "POST",
        url: "/user/resend-verification/token",
        purposeheader: "Resend token",
        purpose: "This is what allows you to create user accounts on a website",
        sourcecode: [reactlogo, pythonlogo, phplogo],
        uisample: [htmllogo, csslogo, reactlogo2, vuelogo],
      },
      {
        method: "POST",
        url: "/user/verify/token/{token}",
        purposeheader: "Verify users",
        purpose: "This is what allows you to create user accounts on a website",
        sourcecode: [reactlogo, pythonlogo, phplogo],
        uisample: [htmllogo, csslogo, reactlogo2, vuelogo],
      },
      {
        method: "POST",
        url: "/user/forgot-password/token",
        purposeheader: "Send token password",
        purpose: "This is what allows you to create user accounts on a website",
        sourcecode: [reactlogo, pythonlogo, phplogo],
        uisample: [htmllogo, csslogo, reactlogo2, vuelogo],
      },
      {
        method: "PUT",
        url: "/users/password-change/token/{token}",
        purposeheader: "Password change",
        purpose: "This is what allows you to create user accounts on a website",
        sourcecode: [reactlogo, pythonlogo, phplogo],
        uisample: [htmllogo, csslogo, reactlogo2, vuelogo],
      },
    ];

    const whichmethod = (method) => {
        switch (method) {
          case "POST":
            return "post_bg";

          case "PUT":
            return "put_bg";

          default:
              return "get_bg";
        }
    }

  return (
    <div className="auth_doc_container">
      <Docsidebar sidebaropen={sidebaropen} />
      <div className="auth_doc_contents">
        <div className="heading">
          <div className="heading_img">
            <img src={authIcon} alt="" />
          </div>
          <div className="heading_title">Auth</div>
        </div>
        <div className="main_description">
          The Authentication API enables you to manage all aspects of user
          identity when you use Auth0. It offers endpoints so your users can log
          in, sign up, log out, access APIs, and more. Learn more on how to
          perform Authentication with the
        </div>
        <div className="auth_flow_img">
          <img src={authflow} alt="" />
        </div>
        <div className="auth_endpoints_container">
          <div className="title">API EndPoints</div>
          <div className="table_scroll">
            <table>
              <thead>
                <tr>
                  <td>Method type</td>
                  <td>Url</td>
                  <td>Purpose</td>
                  <td>Sample Source Code</td>
                  <td>UI Sample</td>
                </tr>
              </thead>
              <tbody>
                {endpoints.map((data, i) => (
                  <Authtabledata
                    key={i}
                    col1class={whichmethod(data.method)}
                    col1={data.method}
                    col2={data.url}
                    col3header={data.purposeheader}
                    col3body={data.purpose}
                    col4={data.sourcecode}
                    col5={data.uisample}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="api_flows_container">
          <div className="title">API EndPoints</div>
          <div className="flow_img">
            <img src={authapiflow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthDoc;
