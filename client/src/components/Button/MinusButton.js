import React, {useState} from 'react';
import minus from "../../svg/minus-circle-solid.svg";

const MinusButton = ({onClick}) => {
    return (
        <div onClick={onClick} style={{width:'40px',height:'40px'}}>
            <img src={minus} alt="image"/>
        </div>
    );
};

export default MinusButton;
