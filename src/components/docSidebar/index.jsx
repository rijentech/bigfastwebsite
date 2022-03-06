import React, { useState, useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";
import "./docsidebar.scss";
import { Link, useLocation } from "react-router-dom";

const Docsidebar = ({ sidebaropen }) => {
  const [staticSiteDropdown, setStaticSiteDropdown] = useState(false);
  const location = useLocation();
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // const toggleNav = () => {
  //   setToggleMenu(!toggleMenu);
  // };

  // useEffect(() => {
  //   const changeWidth = () => {
  //     setScreenWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", changeWidth);

  //   return () => {
  //     window.removeEventListener("resize", changeWidth);
  //   };
  // }, []);


 
  

  const toggleStaticSiteDropdown = () => {
    setStaticSiteDropdown(!staticSiteDropdown);
  };

  const navlink = [
    { id: 1, pagelink: "/docs/introduction", title: "Introduction" },
    { id: 2, pagelink: "/#", title: "Getting Started" },
    { id: 3, pagelink: "/docs/faqs", title: "FAQs" },
  ];

  const navlink2 = [
    { id: 1, pagelink: "/docs/installation", title: "Installation" },
    { id: 2, pagelink: "/docs/working-with-get", title: "Working with GET" },
    { id: 3, pagelink: "/docs/working-with-put", title: "Working with PUT" },
    { id: 4, pagelink: "/docs/working-with-post", title: "Working with POST" },
    {
      id: 5,
      pagelink: "/docs/working-with-delete",
      title: "Working with DELETE",
    },
    { id: 6, pagelink: "/docs/run-go-app", title: "Run a GO App" },
    { id: 7, pagelink: "/docs/run-node-app", title: "Run a Node App" },
    { id: 8, pagelink: "/docs/run-python-app", title: "Run a Python App" },
  ];

  const navlink3 = [
    { id: 1, pagelink: "/docs/auth", title: "Auth" },
    { id: 2, pagelink: "/#2", title: "Organization" },
    { id: 3, pagelink: "/#3", title: "Countries" },
    { id: 4, pagelink: "/#4", title: "FAQ & Support" },
    { id: 5, pagelink: "/#5", title: "Blog" },
    { id: 6, pagelink: "/#6", title: "Comments" },
    { id: 7, pagelink: "/#7", title: "Home" },
    { id: 8, pagelink: "/#8", title: "Test" },
  ];
  
  return (
    <React.Fragment>
      <div className={`${sidebaropen ? 'sidebar_container active':'sidebar_container'}`}>
        <div className="overview_container">
          <div className="title">Overview</div>
          <ul>
            {navlink.map((detail) => (
              <li
                key={detail.id}
                className={`${
                  location.pathname === detail.pagelink ? "active" : ""
                }`}
              >
                <Link to={detail.pagelink} className="sidebarlink">
                  {detail.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="overview_container">
          <div className="title">Tutorials</div>
          <ul>
            {navlink2.map((detail) => (
              <li
                key={detail.id}
                className={`${
                  location.pathname === detail.pagelink ? "active" : ""
                }`}
              >
                <Link to={detail.pagelink} className="sidebarlink">
                  {detail.title}
                </Link>
              </li>
            ))}
            <li className="" onClick={toggleStaticSiteDropdown}>
              <div className="dropdown_link">
                Deploy a static site <DownOutlined />
              </div>
              {staticSiteDropdown && (
                <ul className="sublist_container">
                  <li>Introduction</li>
                  <li>Run a GO App</li>
                  <li>Run a Node App</li>
                  <li>Run a Python App</li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className="overview_container">
          <div
            className={`title ${
              location.pathname === "/docs/apis" ? "active" : ""
            }`}
          >
            <Link to="/docs/apis" className="active_title_color">
              ALL APIs
            </Link>
          </div>
          <ul>
            {navlink3.map((detail) => (
              <li
                key={detail.id}
                className={`${
                  location.pathname === detail.pagelink ? "active" : ""
                }`}
              >
                <Link to={detail.pagelink} className="sidebarlink">
                  {detail.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Docsidebar;
