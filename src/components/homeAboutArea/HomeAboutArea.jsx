import React from 'react'
import FluidSectionWraper from './../universal/FluidSectionWraper';
import ContentWraper from '../universal/ContentWraper';
import SectionContent from '../universal/SectionContent';
import SectionImage from '../homeAboutArea/SectionImage';

export default function HomeAboutArea() {
  return (
    <FluidSectionWraper className="home-about-area">
        <ContentWraper rowClass="justify-content-center align-items-center">
            <SectionImage />
            <SectionContent
                ClassName="col-lg-6 no-padding home-about-right"
                title="Globally Connected <br />by Large Network"
                subTitle="We are here to listen from you deliver excellence"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor."
                btnClass="text-uppercase primary-btn"
                btnText="get details"
                link="#"
            />
        </ContentWraper>
    </FluidSectionWraper>
  )
}
