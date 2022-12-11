import React, { useContext } from 'react';
import { themeContext } from '../../../Context';

const PersonalInfo = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;


    return (
        <div className='lg:p-4 mt-4 lg:mt-[-15px] mx-auto text-center'

        >
            <div className='bg-[#c9eef7] p-3 rounded-lg'
                style={{
                    background: darkMode ? '#313b3e' : '#6c9da8db',
                    color: darkMode ? 'white' : 'black'
                }}
            >
                <h2 className='text-lg font-bold'>Personal Information</h2>

                <div className='text-left'>
                    <div>
                        <p className='text-sm font-bold mt-2'>Education:</p>
                        <p className='text-xs font-semibold'>BBA (Hon's in management)</p>
                        <p className='text-xs font-semibold'>MBA running (Masters in management)</p>


                        <p className='text-sm font-bold mt-3'>Info:</p>
                        <div className='flex mt-1'>

                            <div className='text-xs mr-5'>
                                <p className='text-xs font-bold'>Date of Birth</p>
                                <p className='text-xs font-bold'>Nationality:</p>
                                <p className='text-xs font-bold'>Gender</p>
                                <p className='text-xs font-bold'>Marital Status</p>
                                <p className='text-xs font-bold'>Religion</p>
                            </div>

                            <div className='text-xs mr-3'>
                                <p className='text-xs font-bold'>:</p>
                                <p className='text-xs font-bold'>:</p>
                                <p className='text-xs font-bold'>:</p>
                                <p className='text-xs font-bold'>:</p>
                                <p className='text-xs font-bold'>:</p>
                            </div>

                            <div className=''>
                                <p className='text-xs font-semibold'>23-08-1998</p>
                                <p className='text-xs font-semibold'>Bangladeshi</p>
                                <p className='text-xs font-semibold'>Male</p>
                                <p className='text-xs font-semibold'>Unmarried</p>
                                <p className='text-xs font-semibold'>Islam</p>
                            </div>
                        </div>

                        <p className='text-sm font-bold mt-3'>Address:</p>
                        <p className='text-xs font-semibold'>Kishoreganj, Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PersonalInfo;