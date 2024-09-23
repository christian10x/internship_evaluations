import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; 

import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay

import './imageSlider.css';

function ImageSlider() {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}  // Add Autoplay module
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ 
                delay: 3000,  // 3 seconds delay between slides
                disableOnInteraction: false // Keeps autoplay running after interaction
            }}
            pagination={{ clickable: true }}
            loop={true}  // Enables looping of slides
        >
            <SwiperSlide>
                <div className="slide-content">
                    <img src="/img/banner1.png" alt="Slide 1" className="carousel-image" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="slide-content">
                    <img src="/img/banner2.jpg" alt="Slide 1" className="carousel-image" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide-content">
                    <img src="/img/banner3.jpg" alt="Slide 1" className="carousel-image" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide-content">
                    <img src="/img/banner4.jpg" alt="Slide 1" className="carousel-image" />
                </div>
            </SwiperSlide>

        </Swiper>
    );
}

export default ImageSlider;
