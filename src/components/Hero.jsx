import React from 'react'

export default function Hero() {
    const bgImage = { 
        backgroundImage: "url('../src/assets/img/header-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    };

  return (
    <section className="banner-area" id="home" style={bgImage}>	
        <div className="container">
            <div className="row fullscreen d-flex align-items-center justify-content-center">
                <div className="banner-content">
                    <h5 className="text-white text-uppercase">Now you can feel the Heat</h5>
                    <h1>Smart New Future</h1>
                    <a href="#" className="primary-btn text-uppercase">Buy Now</a>
                </div>											
            </div>
        </div>
    </section>
  )
}
