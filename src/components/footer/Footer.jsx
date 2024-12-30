import React from 'react'
import FooterWraper from './FooterWraper';
import FooterWidget from './FooterWidget';
import FooterContent from './FooterContent';
import SignupForm from './SignupForm';
import SocialShare from './SocialShare';
export default function Footer() {
  return (
    <FooterWraper>
        <FooterWidget className="col-lg-5 col-md-6 col-sm-6">
            <FooterContent 
              title="About Us"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
              Copyright="Copyright 2024 All rights reserved."
            />
        </FooterWidget>
        <FooterWidget className="col-lg-5  col-md-6 col-sm-6">
            <FooterContent 
              title="Newsletter"
              text="Stay update with our latest"
            />
            <SignupForm placeholder="Enter Email"/>
        </FooterWidget>
        <FooterWidget className="col-lg-2 col-md-6 col-sm-6 social-widget">
            <FooterContent 
              title="Follow Us"
              text="Let us be social"
            />
            <SocialShare />
        </FooterWidget>
    </FooterWraper>
  )
}
