import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';

const Home = () => {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;

    return (
        <div>
            <div className='App p-0 m-0'
                style={{
                    background: darkMode ? 'black' : '#f6f6f6',
                    color: darkMode ? 'white' : 'black'
                }}
            >

                <div className=' lg:flex gap-10 lg:px-7 p-2'>
                    <div className='lg:w-3/6 lg:mb-0 mb-5'>
                        <LeftSide></LeftSide>
                    </div>

                    <div className='lg:w-full'>
                        <RightSide></RightSide>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;