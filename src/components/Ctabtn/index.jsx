import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'

const Ctabtn = ({ title, linkto }) => {
  return (
    <div className="cta_button">
      <Link to={linkto} className="cta_link">
        {title}
      </Link>
    </div>
  );
};

export default Ctabtn;
