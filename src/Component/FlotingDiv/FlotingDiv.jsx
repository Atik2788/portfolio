import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import moduleName from './FlotingDiv.css';

const FlotingDiv = ({image, text1, text2}) => {

    // const theme = useContext(themeContext)
    // const darkMode = theme.state.darkMode;
    // // style={{color: darkMode? 'white': '' }}


    return (
        <div className="flotingdiv">
            <img src={image} alt="" />
            <span>
                {text1}
                <br />
                {text2}
            </span>
        </div>
    );
};

export default FlotingDiv;