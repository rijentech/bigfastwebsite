import React, { useState, useEffect } from "react";
import {useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import "antd/dist/antd.css";
import "./App.scss";
import Footer from "./components/Footer";
import {ApiContextProvider} from './context/ApiContextProvider'
import AllRoutes from "./Routes";
// import { TRUE } from "node-sass";

const App = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <ApiContextProvider>
    <div className="body">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="desktop_container">
        <AllRoutes isOpen={isOpen} />
      </div>
      <Footer bgcolor={location.pathname === "/" ? "" : "#F9F9F9"} />
    </div>
    </ApiContextProvider>

  );
};

export default App;
