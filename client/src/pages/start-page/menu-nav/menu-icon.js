import React from 'react';
import './menu-icon.css';
import classnames from "classnames"


const MenuIcon = (props) => {
    {
        return (
            <div
                onClick={props.onActive}
                className={classnames("menu_icon", {'_active': props.clicked})}>
                <span/>
            </div>
        )
    }
}
export default MenuIcon
