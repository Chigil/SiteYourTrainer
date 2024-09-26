import "./News.css"
import React, {useContext} from "react"
import {Context} from "../../index";

const News = () => {
    const {training} = useContext(Context)
    console.log(training.nutrition)
    const userInfo = {
        name: 'Andrei',
        fullName: 'Chigileychik',
        currentWeight: '99kg',
        lastTrainingDate: '12.01.2022',
        lastRecordDate: '02.12.2021',
        lastEatingDate: '12.01.2022',
    }
    return (
        <div className="news">
            <div className="news__content">
                <h1>{userInfo.name}</h1>
                <h1>{userInfo.fullName}</h1>
                <div className="news__container">
                    <div className="news-page__img">
                        <input id="photo_file" className="image-upload" type="file" accept=".jpg, .jpeg, .png"/>
                        <label className="image-upload-label" htmlFor="photo_file">Add your photo</label>
                    </div>
                    <div className="news-page__review">
                        <div className="review__name">
                            <div className="review__header_training">Total workouts:</div>
                            <div className="review__header_eating">Total calories:</div>
                            <div className="review__header_weight">Number of weight:</div>
                            <div className="review__header_record">Number of records:</div>
                        </div>
                        <div className="review__content">
                            <div className="review__header_training">Training: {userInfo.lastTrainingDate}</div>
                            <div className="review__header_eating">Eating: {userInfo.lastEatingDate}</div>
                            <div className="review__header_weight">Weight: {userInfo.currentWeight}</div>
                            <div className="review__header_record">Record: {userInfo.lastRecordDate}</div>
                        </div>
                    </div>
                    <div className="review__news">
                        Login
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News