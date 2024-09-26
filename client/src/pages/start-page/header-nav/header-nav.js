import React, {Component, useContext} from 'react';
import classnames from 'classnames'

import {HeaderItem} from './header-item'

import './header-nav.css';
import LoginModal from "../../../components/Modal/LoginModal/LoginModal";
import {Context} from "../../../index";



const HeaderNav = (props) => {
    const {modal} = useContext(Context)
    return (
        <nav className={classnames("header_nav", {"_active": props.clicked})}>
            <ul className="header_list ">
                {HeaderItem.map((item, index) => {
                    return (
                        <li className="header_item" key={index}>
                            <a
                                data-goto={".page__section_" + index}
                                className={item.cName}
                                onClick={()=>props.sectionClick(index)}
                            >
                                {item.title}
                            </a>
                        </li>
                    )
                })}
                    <li className="header_item" key="login-modal">
                        <a className="header_link"
                            onClick={()=>modal.openModal("LoginModal")}
                        >Login
                        </a>
                    </li>
            </ul>
        </nav>
    )
}
export default HeaderNav;