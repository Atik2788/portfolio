import React from 'react';
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Slider from '../../img/sidebar.png';
import Ecomers from '../../img/ecommerce.png';
import Hoc from '../../img/hoc.png';
import 'swiper/css'

const Portfolio = () => {
    return (
        <div className="portfolio">
            {/* heading */}
            <span>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
        <Swiper>
            <SwiperSlide>
                <img src={Slider} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Ecomers} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Hoc} alt="" />
            </SwiperSlide>

        </Swiper>

        </div>
    );
};

export default Portfolio;