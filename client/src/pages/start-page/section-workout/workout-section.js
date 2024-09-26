import React, {Component} from 'react';
import strong from "../../../svg/dumbbell.svg";
import weight from "../../../svg/heart-rate.svg";
import stamina from "../../../svg/stationary-bike.svg";
import Tilt from 'react-vanilla-tilt'
import './workout-section.css'


const WorkoutSectionContent = () => {
    return (
        <React.Fragment>
            <h1 className="workouts__header">CHOOSE YOUR TRAINING PROGRAM</h1>
            <div className="card">
                <Tilt options={{ scale: 2, max: 25}} style={{}}>
                    <div className="card__container">
                        <div className="card__content">
                            <h1>STRONG</h1>
                            <h2>Strength training program

                                Define a training program if you want to increase your strength</h2>
                            <div className="card__img-circle">
                                <a/>
                                <img src={strong}/>
                            </div>
                        </div>
                    </div>
                </Tilt>
                <Tilt options={{ scale: 2, max: 25}} style={{}}>
                    <div className="card__container">
                        <div className="card__content">
                            <h1>WEIGHT</h1>
                            <h2>Weight loss or gain program

                                In order to get rid of excess weight, or vice versa, gain weight, define
                                your program</h2>
                            <div className="card__img-circle">
                                <a/>
                                <img src={weight}/>
                            </div>
                        </div>
                    </div>
                </Tilt>
                <Tilt options={{ scale: 2, max: 25}} style={{}}>
                    <div className="card__container">
                        <div className="card__content">
                            <h1>STAMINA</h1>
                            <h2>Endurance program

                                Develop your endurance with a dedicated training program</h2>
                            <div className="card__img-circle">
                                <a/>
                                <img src={stamina}/>
                            </div>
                        </div>
                    </div>
                </Tilt>
            </div>
        </React.Fragment>
    )
}
export default WorkoutSectionContent;
