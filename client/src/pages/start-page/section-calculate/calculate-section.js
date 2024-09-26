import React, {Component, useRef, useState} from 'react';
import push from "../../../svg/push.svg";
import squat from "../../../svg/squat.svg";
import deadlift from "../../../svg/lift.svg";
import './calculate-section.css'

const images = [{
        cName:"calculate-button",
        name:"push",
        img:push
    },
    {
        cName:"calculate-button",
        name:"squat",
        img:squat
    },
    {
        cName:"calculate-button",
        name:"deadlift",
        img:deadlift
    }]

const CalculateSectionContent = () => {
    const [img, setImg] = useState(push);

    return (
        <React.Fragment>
            <h1>CALCULATE YOUR MAXIMUM</h1>
            <div className="calculate-description">
                <div className="calculate-panel">
                    <div className="calculate-card">
                        <img className="imgCalculate" src={img}/>
                        <ul className="calculate-card-list">
                            <li><p>Weight:</p></li>
                            <li><input className="weightCount"/></li>
                            <li><p>Number of repetitions:</p></li>
                            <li><input className="numberCount"/></li>
                            <li>
                                <button className="calculateResult">calculate</button>
                            </li>
                            <li><p>Weight for 1 rep:</p></li>
                            <li><input className="resultCount"/></li>
                        </ul>
                    </div>
                </div>
                <div className="calculate-choice">
                    <h2>Know your maximum with basic exercises</h2>
                    <div className="calculate-buttons">
                        {images.map((item,index) =>{
                            return (
                            <div className={item.cName} onClick={()=>setImg(item.img)} key={index}>
                            <img src={item.img}/>
                            <p>{item.name}</p>
                            </div>
                            )})
                        }
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}
export default CalculateSectionContent;
