import React from 'react'
import SectionWraper from './../universal/SectionWraper';
import ContentWraper from '../universal/ContentWraper';
import SectionContent from '../universal/SectionContent';
import PopupVideo from './PopupVideo';

export default function VideoSection() {
  return (
    <SectionWraper className="video-sec-area section-gap" id="about">
        <ContentWraper rowClass="justify-content-center align-items-center">
            <SectionContent
                ClassName="col-lg-6 video-left"
                topTitle="Brand new app to blow your mind"
                title="We've made a life <br /> that will change you"
                subTitle="We are here to listen from you deliver excellence"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
                btnClass="primary-btn"
                btnText="Get Started now"
                link="#"
            />
            <PopupVideo 
              videoUrl="https://www.youtube.com/watch?v=1DVuWGSJz5Y"
            />
        </ContentWraper>
    </SectionWraper>
  )
}
