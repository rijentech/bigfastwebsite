import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Community from "../pages/community";
import Faq from "../pages/faqs";
import Introduction from "../pages/docs/intro";
import Auth from "../pages/docs/authdemo";
import Allapis from "../pages/docs/allApis";
import ApiDoc from "../pages/docs/auth";
import SingleItem from '../pages/docs/singleItem';
import GettingStarted from '../pages/docs/GettingStarted';
import Installation from '../pages/docs/Installation';
import ApiRequest from '../pages/ApiRequest';
import RunApp from '../pages/docs/RunApp';


const AllRoutes = ({isOpen}) => {


  return (
    <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/docs/:id" element={<ApiDoc sidebaropen={isOpen} />} />
          <Route path="/docs/:id/:id" element={<SingleItem sidebaropen={isOpen} />} />
          <Route path="/docs/faqs" element={<Faq sidebaropen={isOpen} />} />
          <Route path="/docs/apis" element={<Allapis sidebaropen={isOpen} />} />
          <Route path="/docs/introduction" element={<Introduction sidebaropen={isOpen} />}/>
          <Route path="/docs/working-with-get" element={<SingleItem sidebaropen={isOpen} />}/>
          <Route path="/docs/auth/demo" element={<Auth />} />
          <Route path="/docs/getting-started" element={<GettingStarted sidebaropen={isOpen} />} />
          <Route path="/docs/installation" element={<Installation sidebaropen={isOpen} />} />
          <Route path="/api-request/:id" element={<ApiRequest sidebaropen={isOpen} />} />
          <Route path="/run-app/:id" element={<RunApp sidebaropen={isOpen} />} />

    </Routes>
  )
}

export default AllRoutes