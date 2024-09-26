import "./ProgramPage.css"
import React, {useContext, useState} from "react"
import ExercisesModal from "../../components/Modal/ExersicesModal/ExecisesModal";
import {createTraining, getTraining} from "../../http/trainingApi";
import DatePicker from "../../components/DatePicker";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import ProgramExercise from "./ProgramExercise";
import PlusButton from "../../components/Button/PlusButton";
import MinusButton from "../../components/Button/MinusButton";
import TrainingCard from "../../components/TrainingCard";
import jwt_decode from "jwt-decode";


const ProgramPage = observer(() => {
    const {training, user, modal, snackBar} = useContext(Context)
    const [date, setDate] = useState('')
    const [name, setName] = useState('')
    const addTraining = () => {
        createTraining({
            date: date,
            training_name: name,
            exercise_names: training.exercises,
            userId: jwt_decode(localStorage.token).id
        }).then(data => {
            getTraining().then(data => training.setTraining(data))
            snackBar.openSnackBar("success", "Created")
            setDate('')
            setName('')
            training.setExercise([])
        }).catch(() => snackBar.openSnackBar("error", "Enter all input please!"))
    }
    console.log(JSON.stringify(training.trainings))
    return (
        <div className="program">
            <div className="program__content">
                <div className="program__container">
                    <div className="program__fill">
                        <h1>My Program</h1>
                        <div className="data__container">
                            <DatePicker
                                date={date}
                                setDate={setDate}
                            />
                        </div>
                        <div className="program__form">
                            <div className="program__name">
                                <h3>Name Training:</h3>
                                <input
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <ProgramExercise exercises={training.exercises}/>
                            <PlusButton onClick={() => modal.openModal('ExercisesModal')}/>
                            <MinusButton onClick={() => (training.exercises.pop())}/>
                            <button
                                className="form__button_save"
                                onClick={addTraining}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                    <div className="timetable">

                        <h1>Trainings</h1>
                        <div className="timetable__container">
                            <TrainingCard/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default ProgramPage