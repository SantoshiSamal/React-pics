import React, {useState} from 'react';

import Carousel from 'react-bootstrap/Carousel'
import  { carouselData } from './carouselData'
export default function SlideCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
           {carouselData.map((slide)=>(
        <Carousel.Item key={slide.id}>
          <img
            className="d-block w-100"
            src={slide.imgPath} height="545" 
            alt="First slide"
          />
          <Carousel.Caption>
            {slide.label}
          </Carousel.Caption>
        </Carousel.Item>))
 }
 </Carousel>
    )
}
           
  
