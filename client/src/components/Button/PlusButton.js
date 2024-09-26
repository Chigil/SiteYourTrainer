import React from 'react';
import plus from "../../svg/plus-circle-solid.svg";

const PlusButton = ({onClick}) => {
    return (
        <div onClick={onClick} style={{width:'40px',height:'40px'}}>
            <img src={plus} alt="image"/>
        </div>
    );
};

export default PlusButton;