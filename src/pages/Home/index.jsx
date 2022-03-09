import React from "react";
import "./home.scss";
import codesnippet from "../../assets/svgs/codesnippet1.svg";
import bigfastcli from "../../assets/svgs/bigfastcli.svg";
import buildboard from "../../assets/svgs/buildboard.svg";
import fivestars from "../../assets/svgs/fivestars.svg";
import reviewimage from "../../assets/svgs/reviewimage.svg";
import authIcon from "../../assets/svgs/auth.svg";
import boxIcon from "../../assets/svgs/box.svg";
import Card from "../../components/Quickstartguide/card";
import Ctabtn from "../../components/Ctabtn";
import ApiListCard from "../../components/ApiListCard/apiListCard";

const Home = () => {

  return (
    <React.Fragment>
      <section className="hero_container">
        <div className="hero_section">
          <div className="hero_text">Build Apps With Speed</div>
        </div>
        <div className="description">
          BigFastAPI is an an API Library designed for developers who want to
          speed up their workflow and skip the hard stuff.
        </div>
        <div className="code_snippet_img">
          <img src={codesnippet} alt="code snippet" />
        </div>
      </section>
      <section className="start_guide_container">
        <div className="title">QuickStart Guide</div>
        <div className="guide_container">
          <Card
            title="Sign up for free"
            body="The library is constantly being updated. The first step to get
              access to all our APIs for free is to sign up."
          />
          <Card
            title="Import the library"
            body="After signing up, you need to import the library. Using pip, you then have to to install bigfastapi."
          />
          <Card
            title="Access the endpoints"
            body="After the installation, You can now import a route. After that, you will be able to access the endpoints on your browser. "
          />
        </div>
      </section>
      <section className="why_bigfast_container">
        <div className="title">Why BigFast?</div>
        <div className="container1">
          <div className="bigfastcli_img_container">
            <img src={bigfastcli} alt="" />
          </div>
          <div className="description">
            <div className="title2">Built for developers</div>
            <div className="body">
              Developers have struggled with Deployment over the years. BigFast
              is built to be intuitive for developers. it's a library for coders
              that allows them very quickly build apps.
            </div>
            <div className="btn_container">
              <Ctabtn title="Get Started" linkto="/" />
            </div>
          </div>
        </div>
      </section>
      <section className="stuff_to_build">
        <div className="title">Stuff You Can Build</div>
        <div className="buildboard_container">
          <img src={buildboard} alt="" />
        </div>
        <div className="card_container">
          <ApiListCard
            icon={authIcon}
            title="Auth"
            description="The Authentication API enables you to manage all aspects of user identity when you use Auth0..."
          />
          <ApiListCard
            icon={boxIcon}
            title="Organization"
            description="This API helps you to get information about the particular organization, subscription details, etc."
          />
          <ApiListCard
            icon={authIcon}
            title="Countries"
            description="A country list API is a database of countries linked to a particular country code."
          />
          <ApiListCard
            icon={boxIcon}
            title="FAQs"
            description="A country list API is a database of countries linked to a particular country code. "
          />
        </div>
        <div className="btn_container">
          <Ctabtn title="See All" linkto="/" />
        </div>
      </section>
      <section className="testimonial_block">
        <div className="review">
          <div className="review_header">
            Trusted by 1,078,753 customers in all the world
          </div>
          <div className="reviewer">Christian Adegbayi</div>
          <div className="review_text">
            “BigFast is a real life saver, and their support is real fast and
            kind. I strongly recommend them!”
          </div>
          <div className="review_rating">
            <img src={fivestars} alt="rating" />
          </div>
        </div>
        <div className="review_img">
          <img src={reviewimage} alt="Review img" />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
