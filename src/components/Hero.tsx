"use client"

import React from 'react';
import Slider from 'react-slick';
import Slide from './slide';

const Hero = () => {
    var setting = {
        dots: true,
        infinite: true,
        slidesToshow:1,
        slidesToscroll: 1,
        autoplay: true,
        pauseOnHover: false,

    }

    const slideData = [
       
    {
        id: 0,
        img:"/banner12.jpg",
        // title:"Trending Item",
        // mainTitle:"MEN'S LATEST FASHION SALE",
        // price:"$15",
    },

    {
        id: 0,
        img:"/banner8.jpg",
        // title:"Trending Item",
        // mainTitle:"MEN'S LATEST FASHION SALE",
        // price:"$10",
    },
    ]

  return (
    <div>
        <div className='container pt-6 lg:pt-0'>

        <Slider {...setting}>

            {slideData.map((item) => (
            <Slide 
            key={item.id}
            img={item.img}
            // title={item.title}
            // mainTitle={item.mainTitle}
            // price={item.price}
            />
            ))}
        </Slider>

        </div>
    </div>
  )
}

export default Hero
