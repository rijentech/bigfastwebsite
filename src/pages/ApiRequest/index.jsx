import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Docsidebar from '../../components/docSidebar'
import "./apiRequest.scss"

const ApiRequest = ({sidebaropen}) => {

  const {id} = useParams()
  const [currPage, setCurrPage] = useState("")

  useEffect(()=>{
    const page = id?.split?.("-")?.join(" ")
    setCurrPage(page)
  },[id])


  return (
    <div className="introduction_container">
    <Docsidebar sidebaropen={sidebaropen} />
      <div className="introduction_contents">
        <section className="section">
          <div className="heading_title">{currPage}</div>
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

        <section className="section">
          <div className="heading_title">How it Works</div>
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

export default ApiRequest