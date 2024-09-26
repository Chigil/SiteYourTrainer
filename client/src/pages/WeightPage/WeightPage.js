import "./WeightPage.css"
import React, {useContext, useState} from "react";
import DatePicker from "../../components/DatePicker";
import {observer} from "mobx-react-lite";
import ChartsWeight from "../../components/ChartsWeight";
import {createWeight, getWeight} from "../../http/weightAPI";
import {Context} from "../../index";
import jwt_decode from "jwt-decode";

const WeightPage = observer(() => {
    const {training, snackBar} = useContext(Context)
    const [date, setDate] = useState('')
    const [weight, setWeight] = useState('')
    const addWeight = () => {
        createWeight({date: date, weight: weight, userId: jwt_decode(localStorage.token).id}).then(data => {
            getWeight().then(data => training.setWeight(data))
            snackBar.openSnackBar("success", "Created")
            setDate('')
            setWeight('')
        }).catch(()=>snackBar.openSnackBar("error","Enter all input please!"))
    }

    return (
        <div className="weight-page">
            <div className="weight-page__content">
                <div className="weight-page__container">
                    <div className="weight-page__fill">
                        <h1>My Weight</h1>
                        <div className="weight-page__form">
                            <div className="wight-date__form">
                                <h3 className="form__header">Date:</h3>
                                <div className="form__input">
                                    <DatePicker
                                        date={date}
                                        setDate={setDate}
                                    />

                                </div>
                            </div>
                            <h3>Weight in kg:</h3>
                            <input
                                value={weight}
                                onChange={e => setWeight(e.target.value)}
                            />
                            <button
                                className="form__button_save"
                                onClick={addWeight}
                            >Save
                            </button>
                        </div>
                    </div>
                    <div className="weight-page__statistics">
                        <ChartsWeight/>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default WeightPage