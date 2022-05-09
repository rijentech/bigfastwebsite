import React from 'react'
import Docsidebar from '../../../components/docSidebar'
import "./installation.scss"


const Installation = ({sidebaropen}) => {
  return (
    <div className="introduction_container">
    <Docsidebar sidebaropen={sidebaropen} />
      <div className="introduction_contents">
        <section className="section">
          <div className="heading_title">Installation</div>
          <div className="content_container">
            <p>
              The Authentication API enables you to manage all aspects of user
              identity when you use Auth0. It offers endpoints so your users can
              log in, sign up, log out, access APIs, and more.
            </p>
            <p>
              The API supports various identity protocols, like OpenID Connect,
              OAuth 2.0, and SAML.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Installation