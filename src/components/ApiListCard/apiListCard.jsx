import React from 'react';
import './index.scss'

const ApiListCard = ({icon, title, description}) => {
  return (
    <div className="api_listcard_container">
      <div className=''>
        <img src={icon} alt="icon" />
      </div>
      <div className="content">
        <div className="content_title">{title}</div>
        <div className="content_description">{description}</div>
      </div>
    </div>
  );
};

export default ApiListCard;
