import React from 'react';
import trash from "../../svg/trash-alt-solid.svg";

const DeleteButton = ({onClick}) => {
    return (
        <div  onClick={onClick} style={{width:'25px',height:'30px'}}>
            <img src={trash} alt="delete"/>
        </div>
    );
};

export default DeleteButton;