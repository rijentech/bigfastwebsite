import React from 'react';
import './faqs.scss'

import Docsidebar from '../../components/docSidebar';
import Faqreply from "../../components/Faqreply";

import faqicon from '../../assets/svgs/faqicon.svg'

const Faq = ({ sidebaropen }) => {
  return (
    <div className="faq_container">
      <Docsidebar sidebaropen={sidebaropen} />
      <div className="faq_content">
        <div className="heading_container">
          <img src={faqicon} alt="" />
          <div className="title">Frequently Asked Questions</div>
        </div>

        <Faqreply
          question="Why is BigFast Important?"
          answer="You may not know what an API does. You may not know what it stands
            for. But everyday APIs are working behind the scenes to provide you
            richer digital experiences. The movie ticket you bought online, the
            blogger’s recipe you shared on Facebook, and the cheap flight you
            booked on Expedia are all thanks to APIs."
        />
        <Faqreply
          question="Why is BigFast Important?"
          answer="You may not know what an API does. You may not know what it stands
            for. But everyday APIs are working behind the scenes to provide you
            richer digital experiences. The movie ticket you bought online, the
            blogger’s recipe you shared on Facebook, and the cheap flight you
            booked on Expedia are all thanks to APIs."
        />
        <Faqreply
          question="Why is BigFast Important?"
          answer="You may not know what an API does. You may not know what it stands
            for. But everyday APIs are working behind the scenes to provide you
            richer digital experiences. The movie ticket you bought online, the
            blogger’s recipe you shared on Facebook, and the cheap flight you
            booked on Expedia are all thanks to APIs."
        />
        <Faqreply
          question="Why is BigFast Important?"
          answer="You may not know what an API does. You may not know what it stands
            for. But everyday APIs are working behind the scenes to provide you
            richer digital experiences. The movie ticket you bought online, the
            blogger’s recipe you shared on Facebook, and the cheap flight you
            booked on Expedia are all thanks to APIs."
        />
      </div>
    </div>
  );
};

export default Faq;
