import React from 'react';
import moduleName from './FlotingDiv.css';

const FlotingDiv = ({image, text1, text2}) => {
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