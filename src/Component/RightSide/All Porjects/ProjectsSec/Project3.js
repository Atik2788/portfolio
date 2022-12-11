import React, { useContext } from 'react';
import { themeContext } from '../../../../Context';

const Project3 = () => {

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
                <div className='w-4/6 lg:mb-0 mb-5'>
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
                                    <p className='text-xs text-left font-semibold mt-2'>● Signup, Login, Google login.</p>
                                    <p className='text-xs text-left font-semibold mt-2'>● Get courses by category.</p>
                                    <p className='text-xs text-left font-semibold mt-2'>● Blog Section.</p>
                                    <p className='text-xs text-left font-semibold mt-2'>● Download Page.</p>
                                </div>
                            </div>

                            <div className='text-left mt-5'>
                                <a target='_blank' href="https://e-learn-5bc9e.web.app/"><span className='text-[12px] font-bold mr-3 text-left'>Live site</span></a>
                                <a target='_blank' href="https://github.com/Atik2788/E-learning10"><span className='text-[12px] font-bold mr-3 text-left'>Client side github</span></a>
                                <a target='_blank' href="https://github.com/Atik2788/E-learning10-server"> <span className='text-[12px] font-bold mr-3 text-left'>Server side github</span></a>
                            </div>

                        </div>

                    </div>
                </div>




                {/************ right side ************/}
                <div className='lg:w-full'>
                    <div className='p-4 rounded-lg w-5/6'>
                        <img className='' src="https://i.ibb.co/rHvXhNZ/screencapture-e-learn-5bc9e-web-app-2022-12-11-23-21-53.png" alt="" />
                        <img className='mt-5' src="https://i.ibb.co/5Fkb8Bg/screencapture-e-learn-5bc9e-web-app-courses-2022-12-11-23-28-22.png" alt="" />
                        <img className='mt-5' src="https://i.ibb.co/Wzqq2dB/screencapture-e-learn-5bc9e-web-app-blog-2022-12-11-23-29-08.png" alt="" />
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Project3;