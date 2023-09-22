import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slider.css'

function Slider() {
  return (
    <div className="carousel-container">
      <Carousel autoPlay={true} interval={4000} transitionTime={1000} infiniteLoop={true} showThumbs={false} showStatus={false}>
        <div>
          <img src="src\assets\slide1.jpg" alt="Imagen 1" />
        </div>
        <div>
          <img src="src\assets\slide2.avif" alt="Imagen 2" />
        </div>
        <div>
          <img src="src\assets\slide3.png" alt="Imagen 3" />
        </div>
        <div>
          <img src="src\assets\slide4.webp" alt="Imagen 4" />
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
