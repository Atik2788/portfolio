import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { themeContext } from '../../../../Context';


import { Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from "swiper";
import 'swiper/css';
import "swiper/css/free-mode";

const Project1 = () => {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;


    return (
        <div className=''
            style={{
                background: darkMode ? 'black' : '#f6f6f6',
                color: darkMode ? 'white' : 'black'
            }}>



            <div className='lg:flex lg:px- p-2'>

                {/**********  left side **********/}
                <div className='lg:w-4/6 lg:mb-0 mb-5'>
                    <div className='lg:p-4 mx-auto text-center'>
                        <div className='p-3 rounded-lg'
                            style={{
                                background: darkMode ? '#313b3e' : '#6c9da8db',
                                color: darkMode ? 'white' : 'black'
                            }}
                        >
                            <div>
                                <h2 className='text-left text-lg font-bold'>Features: </h2>
                                <div className=''>
                                    <p className='text-xs text-left font-semibold mt-2'>● Implement authentication system with email and password, and also google  (login as a buyer, seller, or admin).</p>
                                    <p className='text-xs text-left font-semibold mt-2'>● Buyer Can book products, report products, see his booking.</p>
                                    <p className='text-xs text-left font-semibold mt-2'>● Seller can add and delete products, see his added products, and book products.</p>
                                    <p className='text-xs text-left font-semibold mt-2'>● Admin can see all buyers, all sellers, reported products, delete sellers and buyers, and also reported products.</p>
                                    <p className='text-xs text-left font-semibold mt-2'></p>
                                </div>
                            </div>

                            <div className='text-left mt-5'>
                                <a target='_blank' href="https://crazy-bikers-b555f.web.app/"><span className='text-[12px] font-bold mr-3 text-left'>Live site</span></a>
                                <a target='_blank' href="https://github.com/Atik2788/Crazy-Bikers-Buy-Sell-Website-"><span className='text-[12px] font-bold mr-3 text-left'>Client side github</span></a>
                                <a target='_blank' href="https://github.com/Atik2788/-Crazy-Bikers-Server-site"> <span className='text-[12px] font-bold mr-3 text-left'>Server side github</span></a>
                            </div>

                        </div>

                    </div>
                </div>




                {/************ right side ************/}
                {/* <div className='lg:w-full'>
                    <div className='p-4 rounded-lg lg:w-5/6 mx-auto'>
                        <img className='' src="https://i.ibb.co/85v5tMZ/screencapture-crazy-bikers-b555f-web-app-2022-12-11-18-02-26.png" alt="" />
                        <img className='mt-5' src="https://i.ibb.co/5BXJsvM/screencapture-crazy-bikers-b555f-web-app-bikes-Off-Road-2022-12-11-18-06-19.png" alt="" />
                        <img className='mt-5' src="https://i.ibb.co/dGG0HxK/screencapture-crazy-bikers-b555f-web-app-dashboard-Layout-2022-12-11-18-07-08.png" alt="" />
                    </div>
                </div> */}

                <div className='lg:w-8/12 mx-auto'>

                    <Swiper
                    freeMode={true}
                    grabCursor={true}
                    modules={[FreeMode]}
                    className="mySwiper"
                    slidesPerView={5}
                    spaceBetween={30}
                    >
                        <SwiperSlide>
                            <h1>Slide 1</h1>
                        </SwiperSlide>

                        <SwiperSlide>
                            <h1>Slide 2</h1>
                        </SwiperSlide>

                        <SwiperSlide>
                            <h1>Slide 3</h1>
                        </SwiperSlide>

                        <SwiperSlide>
                            <h1>Slide 4</h1>
                        </SwiperSlide>

                        <SwiperSlide>
                            <h1>Slide 5</h1>
                        </SwiperSlide>

                    </Swiper>

                </div>

            </div>



        </div>
    );
};

export default Project1;