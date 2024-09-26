import "./RecordPage.css"
import React, {useContext, useState} from "react"
import {observer} from "mobx-react-lite";
import DatePicker from "../../components/DatePicker";
import AddRecord from "../../components/AddRecord";
import {createRecord, getRecord} from "../../http/recordApi";
import {Context} from "../../index";
import jwt_decode from "jwt-decode";


const RecordPage = observer(() => {
    const {training, snackBar} = useContext(Context)
    const [weight, setWeight] = useState('')
    const [exercise, setExercise] = useState('')
    const [num, setNum] = useState('')
    const [date, setDate] = useState('')
    const addRecord = () => {
        createRecord({date: date, weight: weight, exercise_name: exercise, num: num, userId: jwt_decode(localStorage.token).id}).then(data => {
            snackBar.openSnackBar("success", "Created")
            getRecord().then(data => training.setRecord(data))
            setDate('')
            setWeight('')
            setExercise('')
            setNum('')
        }).catch(()=>snackBar.openSnackBar("error","Enter all input please!"))
    }
    return (
        <div className="record-page">
            <div className="record-page__content">
                <div className="record-page__container">
                    <div className="record-page__fill">
                        <h1>My Record</h1>
                        <div className="record-page__form">
                            <h3>Exercise:</h3>
                            <input
                                value={exercise}
                                onChange={e => setExercise(e.target.value)}
                            />
                            <div className="weight__form_grid">
                                <div className="weight__fill_kg">
                                    <h3>Weight :</h3>
                                    <input
                                        value={weight}
                                        onChange={e => setWeight(e.target.value)}
                                    />
                                </div>
                                <div className="weight__fill_number">
                                    <h3>min/kg :</h3>
                                    <input className="weight__fill_number__num"
                                           value={num}
                                           onChange={e => setNum(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="record-date__form">
                                <h3 className="form__header">Date:</h3>
                                <div className="form__input">
                                    <DatePicker
                                        date={date}
                                        setDate={setDate}
                                    />
                                </div>
                            </div>
                            <button
                                className="form__button_save"
                                onClick={addRecord}
                            >Add
                            </button>
                        </div>
                    </div>
                    <div className="table-record">
                        <h1>Statistics</h1>
                        <div className="table-record__review">
                            <div className="record-review__header">
                                <div className="record-review__header_name">Exercise</div>
                                <div className="record-review__header_weight">Weight</div>
                                <div className="record-review__header_date">Num/min</div>
                                <div className="record-review__header_num/min">Date</div>
                                <div className="record-review__header_del">Trash</div>
                            </div>
                            <div>
                                <AddRecord/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default RecordPage