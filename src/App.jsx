import react from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/videoSection/VideoSection';
import TopCourseArea from './components/topCourseArea/TopCourseArea'; 
import HomeAboutArea from './components/homeAboutArea/HomeAboutArea';
import ServiceArea from './components/serviceArea/ServiceArea';
import FeatureArea from './components/featureArea/FeatureArea';
import ReviewArea from './components/reviewArea/ReviewArea';
import FaqArea from './components/faqArea/FaqArea';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <VideoSection />
      <TopCourseArea />
      <HomeAboutArea />
      <ServiceArea />
      <FeatureArea />
      <ReviewArea />
      <FaqArea />
      <Footer />
    </>
  )
}

export default App
