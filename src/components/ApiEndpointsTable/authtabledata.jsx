import React from "react";
import {Link} from 'react-router-dom'
import "./authtabledata.scss";
import { DownOutlined } from "@ant-design/icons";

const Authtabledata = ({
  col1class, col1,
  col2,
  col3header,
  col3body,
  col4,
  col5,
  url
}) => {
  return (
    <tr className="table_data">
      <td className="post_column">
        <div className={`${col1class} method_css`}>{col1}</div>
      </td>
      <td className="col2_container">
        <span className="col2">
          <Link to={url} className="col2">{col2}</Link>
        </span>
      </td>
      <td>
        <div className="col3_container">
          <span className="">{col3header}</span>
          <span className="">{col3body}</span>
        </div>
      </td>
      <td>
        <div className="logo_container">
          {col4?.map((logo, i) => (
            <img key={i} src={logo} alt="" />
          ))}
        </div>
      </td>
      <td>
        <div className="dual_items">
          <div className="logo_container2">
            {col5?.map((logo, i) => (
              <img key={i} src={logo} alt="" />
            ))}
          </div>
          <div className="">
            <DownOutlined />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default Authtabledata;
