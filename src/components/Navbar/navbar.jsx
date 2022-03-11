import React   from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import "./navbar.scss";

import logo from "../../assets/svgs/logo.svg";

const Navbar = ({ toggleSidebar }) => {
  const location = useLocation();

  // useEffect(() => {
  //   toggleSidebar()
  // },[location])

  
  // const [toggleMenu, setToggleMenu] = useState(false);
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

  return (
    <nav className="navbar_container">
      <div className="nav_desktop_container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        {location.pathname === '/' ? '':<MenuOutlined className="togglebtn" onClick={toggleSidebar} />}
        {/* {(toggleMenu || screenWidth > 647) && ( */}
        <ul className={`navlink_container ${location.pathname === '/' ? 'nav_right':''}`}>
          <li className="navlink_item">
            <Link to="/docs/introduction" className="item">
                Documentation
              </Link>
          </li>
          <li className={`navlink_item`}>
            <Link
              to="/community"
              className={`item ${
                location.pathname === "/community" ? "active_link" : ""
              }`}
            >
              Community
            </Link>
          </li>
        </ul>
        {/* )} */}
      </div>
    </nav>
  );
};

export default Navbar;
