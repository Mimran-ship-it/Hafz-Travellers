import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";  
import { Carousel } from 'react-responsive-carousel';
import Wrapper from './Wrapper';


export default function ProductDetailCrousel (img) {
     
    return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
        <Wrapper>
        <Carousel
                infiniteLoop={true}
                showIndicators={true}
                showStatus={true}
                autoPlay={true}
                thumbWidth={60}
                
                className="productCarousel"
            > 
                <img src={`/productIamages/${img.img}/thumbnail.jpg`} />
                <img src={`/productIamages/${img.img}/2.jpg`} />
                <img src={`/productIamages/${img.img}/3.jpg`} />
            </Carousel>
        </Wrapper>
    </div>
  )
}

