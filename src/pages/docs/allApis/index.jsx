import React from "react";
import { Menu, Dropdown } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import Docsidebar from "../../../components/docSidebar";
import "./allApis.scss";

import searchicon from "../../../assets/svgs/searchicon.svg";
import ApiCardLink from "../../../components/AllApisCard";

import authIcon from "../../../assets/svgs/authicon.svg";
import organizationIcon from "../../../assets/svgs/organization.svg";
import countriesIcon from "../../../assets/svgs/countries.svg";
import faqIcon2 from "../../../assets/svgs/faqicon2.svg";
import blog from "../../../assets/svgs/blog.svg";



const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.aliyun.com">2nd menu item</a>
    </Menu.Item>
  </Menu>
);

const cardContents = [
  {
    icon: authIcon,
    title: "Auth",
    desc: "The Authentication API enables you to manage all aspects of user identity when you use Auth0. It offers endpoints so your users can log in, sign up, log out, access APIs, and more....",
    to: "/docs/auth",
  },
  {
    icon: organizationIcon,
    title: "Organization",
    desc: "The Organization APIs help you to get information about the particular organization, subscription details, number of users, number of groups, list of domains etc....",
    to: "/docs/auth",
  },
  {
    icon: countriesIcon,
    title: "Countries",
    desc: "A country list API is a database of countries linked to a particular country code. Country codes are all based on the ISO 3166-1 system created by the International Organization for Standardization....",
    to: "/docs/auth",
  },
  {
    icon: faqIcon2,
    title: "FAQ and Support",
    desc: "Embed codes of videos of the goals and highlights from a number of football leagues and tournaments including the Premier League, ...",
    to: "/docs/auth",
  },
  {
    icon: blog,
    title: "Blog",
    desc: "The Blogger API enables you to integrate Blogger content with your application by using the REST APIs. Before you begin, you will need to set up authorization....",
    to: "/docs/auth",
  },
];

const Allapis = ({sidebaropen}) => {
  return (
    <div className="all_apis_container">
      <Docsidebar sidebaropen={sidebaropen} />
      <div className="all_apis_contents">
        <div className="searchbar_container">
          <div className="searchicon">
            <img src={searchicon} className alt="" />
          </div>
          <div className="input_container">
            <input
              type="text"
              className=""
              placeholder="What are you building?"
            />
          </div>
          <div className="submit_container">
            <button className="submit_btn">Search</button>
          </div>
        </div>
        <div className="dropdown_container">
          <Dropdown className="dropdown" overlay={menu} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Last Updated <CaretDownOutlined className="dropdownicon" />
            </a>
          </Dropdown>
        </div>
        <div className="list_contents">
          {cardContents.map((content, index) => (
            <ApiCardLink
            key={index}
              icon={content.icon}
              title={content.title}
              description={content.desc}
              to={content.to}
            />
          ))}
        </div>
        <div className="button_container">
          <button className="">Load More</button>
        </div>
      </div>
    </div>
  );
};

export default Allapis;
