import React from 'react'
import SectionWraper from './../universal/SectionWraper';
import HeadingWraper from './../universal/HeadingWraper';
import SectionTitle from './../universal/SectionTitle';
import ContentWraper from '../universal/ContentWraper';
import reviewData from '../../assets/data/reviewData.json';
import SingleReview from './SingleReview';

export default function FeaturesReviewArea() {
  return (
    <SectionWraper className="review-area section-gap" id="review">
        <HeadingWraper className="menu-content pb-60 col-lg-10">
            <SectionTitle 
                className="mb-10"
                title="Some Features that Made us Unique"
                subTitle="Who are in extremely love with eco friendly system."
            />
        </HeadingWraper>
        <ContentWraper>
            {reviewData.map((item, index)=>
                <SingleReview 
                    key={index}
                    name={item.reviewerName}
                    review={item.review}
                    ratings={item.rating}
                />
            )}
        </ContentWraper>
    </SectionWraper>
  )
}
