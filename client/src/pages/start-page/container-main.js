import React, {useState} from 'react';

import MenuIcon from "./menu-nav/menu-icon";
import HeaderNav from "./header-nav/header-nav";

import {SectionItem} from './SectionItem'
import './pages.css'

import classnames from 'classnames'

const StartPage = () => {
    const listRef = [];
    const [state, setState] = useState({clicked: false});

    const handleClick = () => {
        setState(state => ({
            clicked: !state.clicked
        }));
        document.body.style.overflow = state.clicked ? "unset" : "hidden"
    }

    const sectionClick = (index) => {
        setState(state => ({
            clicked: !state.clicked
        }))
        if (listRef[index] && listRef[index].current) {
            listRef[index].current.scrollIntoView({behavior: 'smooth'});
        }
    }

    const currentSection = SectionItem.map(
        (item) => {
            const ref = React.createRef()
            listRef.push(ref)
            return {
                ...item,
                ref,
            }
        }
    )


    return (
        <div className={classnames("wrapper", {"_lock": state.clicked})}>
            <MenuIcon onActive={handleClick} clicked={state.clicked}/>
            <HeaderNav clicked={state.clicked} sectionClick={sectionClick}/>
            {currentSection.map((item, index) => {
                return (
                    <section className={item.cName + "-section"} ref={item.ref} key={index}>
                        <div className={item.cName + "-section__content"}>
                            {item.componentSection}
                        </div>
                    </section>
                )
            })}
        </div>
    )
}
export default StartPage


