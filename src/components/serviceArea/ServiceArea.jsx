import React from 'react'
import SectionWraper from './../universal/SectionWraper';
import HeadingWraper from './../universal/HeadingWraper';
import SectionTitle from './../universal/SectionTitle';
import ContentWraper from '../universal/ContentWraper';
import SingleService from '../serviceArea/SingleService';
import serviceDate from '../../assets/data/serviceData.json';

export default function ServiceArea() {
  return (
    <SectionWraper className="service-area section-gap" id="service">
        <HeadingWraper className="col-md-8 pb-40 header-text">
            <SectionTitle 
                title="Some Features that Made us Unique"
                subTitle="Who are in extremely love with eco friendly system."
            />
        </HeadingWraper>
        <ContentWraper>
            {serviceDate.map ((item, index)=>
                <SingleService
                    key={index}
                    iconClass={item.class}
                    title={item.serviceTitle}
                    text={item.serviceText}
                />
            )}
            
        </ContentWraper>
    </SectionWraper>
  )
}
