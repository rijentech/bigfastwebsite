import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/navbar";
import "antd/dist/antd.css";

import "./App.scss";
import Footer from "./components/Footer";
import Community from "./pages/community";
import Faq from "./pages/faqs";
import Introduction from "./pages/docs/intro";
import WorkingWithGet from "./pages/docs/workingWithGet";
import Auth from "./pages/docs/authdemo";
import Allapis from "./pages/docs/allApis";
import AuthDoc from "./pages/docs/auth";
import {ApiContextProvider} from './context/ApiContextProvider'
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/docs/faqs" element={<Faq sidebaropen={isOpen} />} />
          <Route path="/docs/apis" element={<Allapis sidebaropen={isOpen} />} />
          <Route
            path="/docs/introduction"
            element={<Introduction sidebaropen={isOpen} />}
          />
          <Route
            path="/docs/working-with-get"
            element={<WorkingWithGet sidebaropen={isOpen} />}
          />
          <Route path="/docs/auth" element={<AuthDoc sidebaropen={isOpen} />} />
          <Route path="/docs/auth/demo" element={<Auth />} />
        </Routes>
      </div>
      <Footer bgcolor={location.pathname === "/" ? "" : "#F9F9F9"} />
    </div>
    </ApiContextProvider>

  );
};

export default App;
