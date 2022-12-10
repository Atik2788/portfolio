import React, { useContext } from 'react';
import './Toggle.css'
import { BsFillSunFill} from "react-icons/bs";
import { CiDark } from "react-icons/ci";
import { themeContext } from '../../Context';


const Toggle = () => {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
    


    return (
        <div className='toggle w-[80px] flex justify-between rounded-full p-1 relative'>
          <BsFillSunFill/>
           <CiDark/>

           <div className="t-button"
           style={darkMode? {left: '5px'} : {right: '5px'}}
           >

           </div>
        </div>
    );
};

export default Toggle;