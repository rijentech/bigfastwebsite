import React from 'react'
import Docsidebar from '../../../components/docSidebar';
import "./workingwithget.scss";


import vplayer from "../../../assets/svgs/defaultvideoplayer.svg";

const WorkingWithGet = ({sidebaropen}) => {
  return (
    <div className="workingwithget_container">
      <Docsidebar sidebaropen={sidebaropen} />
      <div className="contents">
        <div className="heading_container">
          <div className="label">GET</div>
          <div className="title">Working with GET</div>
        </div>
        <div className="mb-30">
          You may not know what an API does. You may not know what it stands
          for. But everyday APIs are working behind the scenes to provide you
          richer digital experiences. The movie ticket you bought online, the
          blogger’s recipe you shared on Facebook, and the cheap flight you
          booked on Expedia are all thanks to APIs.
        </div>
        <div className="subtitle">How to get started</div>
        <div className="vplayer_container mb-30">
          <img src={vplayer} alt="" />
        </div>
        <div className="mb-30">
          The Authentication API enables you to manage all aspects of user
          identity when you use Auth0. It offers endpoints so your users can log
          in, sign up, log out, access APIs, and more. Learn more on how to
          perform Authentication with the
        </div>
      </div>
    </div>
  );
}

export default WorkingWithGet;