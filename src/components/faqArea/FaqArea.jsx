import React from 'react'
import SectionWraper from './../universal/SectionWraper';
import HeadingWraper from './../universal/HeadingWraper';
import SectionTitle from './../universal/SectionTitle';
import ContentWraper from '../universal/ContentWraper';
import FaqWraper from '../faqArea/FaqWraper';
import SingleFaq from '../faqArea/SingleFaq';
import faqData from '../../assets/data/faqData.json';
export default function FaqArea() {
  return (
    <SectionWraper className="faq-area section-gap" id="faq">
      <HeadingWraper className="menu-content pb-60 col-lg-10">
        <SectionTitle 
          className="mb-10"
          title="Frequently Asked Questions"
          subTitle="Who are in extremely love with eco friendly system."
        />
      </HeadingWraper>
          <ContentWraper rowClass="justify-content-start">
            <FaqWraper>

              {faqData.map((item, index)=>
                <SingleFaq key={index} {...item} />
              )}
            </FaqWraper>
          </ContentWraper>
    </SectionWraper>
  )
}
