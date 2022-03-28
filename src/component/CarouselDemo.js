import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bread from "../assets/bread.jpg";
import cookie from "../assets/cookie.jpg";
import croissant from "../assets/croissant.jpg";



function CarouselDemo() {

    
  return (
    <>
      <Carousel infiniteLoop={true} showThumbs={false} labels autoFocus useKeyboardArrows emulateTouch>
        <div>
          <img className="md:h-[600px]"   src={croissant} alt="bread" />
          <p className="legend bg-slate-700">Some delicious croissant </p>
        </div>
        <div>
          <img  className="md:h-[600px]"  src={cookie} alt="cookie" />
          <p className="legend bg-slate-700">Cookies better than grandma's</p>
        </div>
        <div>
          <img  className="md:h-[600px]" src={bread} alt="croissant" />
          <p className="legend text-slate-900 bg-slate-200">Freshly baked bread daily</p>
        </div>
      </Carousel>
    </>
  );
}

export default CarouselDemo;
