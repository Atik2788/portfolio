import React, { useContext } from 'react';
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Slider from '../../img/sidebar.png';
import Ecomers from '../../img/ecommerce.png';
import Hoc from '../../img/hoc.png';
import 'swiper/css'
import { themeContext } from '../../Context';
import { Link } from 'react-router-dom';



const Portfolio = () => {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;


    return (
        <div className="portfolio" 
        style={{
            color: darkMode? 'white' : '#202527'
          }}
        >

            <span>Recent Projects</span>

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            
                <a href="https://daisyui.com/docs/install/">
                <SwiperSlide>
                    <img src={Slider} alt=""/>
                    <p>this is </p>
                </SwiperSlide>
                </a>
          

            <Link>
            <SwiperSlide>
                <img src='https://i.ibb.co/M5TDX1L/UGEY-1.gif' alt="" />
            </SwiperSlide>
            </Link>

            <SwiperSlide>
                <img src={Hoc} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Hoc} alt="" />
            </SwiperSlide>

        </Swiper>

        </div>
    );
};

export default Portfolio;