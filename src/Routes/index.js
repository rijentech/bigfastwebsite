import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Community from "../pages/community";
import Faq from "../pages/faqs";
import Introduction from "../pages/docs/intro";
import WorkingWithGet from "../pages/docs/workingWithGet";
import Auth from "../pages/docs/authdemo";
import Allapis from "../pages/docs/allApis";
import AuthDoc from "../pages/docs/auth";


const AllRoutes = ({isOpen}) => {


  return (
    <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/docs/:id" element={<AuthDoc sidebaropen={isOpen} />} />
          <Route path="/docs/:id/:id" element={<WorkingWithGet sidebaropen={isOpen} />} />
          <Route path="/docs/faqs" element={<Faq sidebaropen={isOpen} />} />
          <Route path="/docs/apis" element={<Allapis sidebaropen={isOpen} />} />
          <Route path="/docs/introduction" element={<Introduction sidebaropen={isOpen} />}/>
          <Route path="/docs/working-with-get" element={<WorkingWithGet sidebaropen={isOpen} />}/>
          <Route path="/docs/auth/demo" element={<Auth />} />
    </Routes>
  )
}

export default AllRoutes