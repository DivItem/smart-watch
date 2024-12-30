import React from 'react'
import SectionWraper from '../universal/SectionWraper';
import HeadingWraper from '../universal/HeadingWraper';
import SectionTitle from '../universal/SectionTitle';
import ContentWraper from '../universal/ContentWraper';
import SingleProduct from '../featureArea/SingleProduct';
import productsData from '../../assets/data/productsData.json';

export default function FeatureArea() {
  return (
    <SectionWraper className="unique-feature-area section-gap" id="service">
        <HeadingWraper className="menu-content pb-60 col-lg-10">
            <SectionTitle 
                className="mb-10 text-white"
                title="Some Features that Made us Unique"
                subTitle="Who are in extremely love with eco friendly system."
            />
        </HeadingWraper>

        <ContentWraper>
            {productsData.map((item, index) =>
            <SingleProduct
                key={index}
                image={item.productImage}
                title={item.productTitle}
                price={item.price}
            />)}
        </ContentWraper>
    </SectionWraper>
  )
}
