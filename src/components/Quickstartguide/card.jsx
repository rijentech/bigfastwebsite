import React from 'react';
import './card.scss'

const Card = ({title, body}) => {
  return (
    <div className="card">
      <div className="heading_small">{title}</div>
      <div className="body">
        {body}
      </div>
    </div>
  );
};

export default Card;
