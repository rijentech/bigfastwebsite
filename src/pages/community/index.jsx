import React from 'react';
import "./community.scss";

import slacklogo from '../../assets/svgs/slacklogo.svg'
import discordlogo from "../../assets/svgs/discordlogo.svg";
import twitterlogo from "../../assets/svgs/twitterlogo.svg";


const Community = () => {
  return (
    <div className="container">
      <div className="heading">Join Our Community</div>
      <div className="details">
        Join our community of profesionals, ask questions, find mentors, bring
        your career to the next level, and contribute to the library.
      </div>
      <div className="community_links">
        <div className="community_link">
          <img src={slacklogo} alt="" />
        </div>
        <div className="community_link">
          <img src={discordlogo} alt="" />
        </div>
        <div className="community_link">
          <img src={twitterlogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Community;
