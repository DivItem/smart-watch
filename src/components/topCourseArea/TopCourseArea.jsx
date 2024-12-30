import React from 'react'
import SectionWraper from '../universal/SectionWraper';
import HeadingWraper from '../universal/HeadingWraper';
import SectionTitle from '../universal/SectionTitle';
import CourseWraper from '../topCourseArea/CourseWraper';
import CourseFrame from '../topCourseArea/CourseFrame';
import SingleCourse from '../topCourseArea/SingleCourse';
import Image from '../../assets/img/c1.png';

export default function TopCourseArea() {
  return (
    <SectionWraper id="feature" className="top-course-area section-gap">
        <HeadingWraper className="menu-content pb-60 col-lg-10">
            <SectionTitle 
                className="mb-10"
                title="Top Courses That are open for Students"
                subTitle="Who are in extremely love with eco friendly system."
            />
        </HeadingWraper>
        <CourseWraper>
            <CourseFrame className="col-lg-3 course-left">
                <SingleCourse 
                    icon="lnr-rocket"
                    link="#"
                    title="High Performance"
                    text="Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor incid.idunt ut labore et dolore magna aliqua."
                />
                <SingleCourse 
                    icon="lnr-cog"
                    link="#"
                    title="High Performance"
                    text="Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor incid.idunt ut labore et dolore magna aliqua."
                />
            </CourseFrame>
            <CourseFrame className="col-lg-6 course-middle">
                <img className="img-fluid mx-auto d-block" src={Image} alt="Image" />
            </CourseFrame>
            <CourseFrame className="col-lg-3 course-right">
                <SingleCourse 
                    icon="lnr-apartment"
                    link="#"
                    title="High Performance"
                    text="Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor incid.idunt ut labore et dolore magna aliqua."
                />
                <SingleCourse 
                    icon="lnr-phone"
                    link="#"
                    title="High Performance"
                    text="Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor incid.idunt ut labore et dolore magna aliqua."
                />							
            </CourseFrame>
        </CourseWraper>
    </SectionWraper>
  )
}
