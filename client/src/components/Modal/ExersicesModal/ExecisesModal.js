import React, {useContext, useEffect, useState} from 'react';
import './ExercisesModal.css'
import {observer} from "mobx-react-lite";
import ExerciseData from "../../ExerciseData";
import {Context} from "../../../index";
import PlusButton from "../../Button/PlusButton";


const ExercisesModal = observer(({onCloseModal}) => {
    const {training, snackBar} = useContext(Context)
    const [title, setTitle] = useState('')
    const [text, setText] = useState([])

    const handleSetData = (number, currentData) => {
        setText(text.map((data, index) => {
            if (index === number) {
                return currentData;
            }
            return data;
        }))
    }

    const deleteExercise = (num) => {
        setText(text.filter((i, index) => index !== num))

    }

    const addExercise = () => {
        setText([...text, {kg: 0, num: 0}])
    }

    console.log(text)


    const handleCloseModal = async () => {
        console.log({title, text})
        training.exercises.push({title, text})
        snackBar.openSnackBar("success", "Added")
        onCloseModal()
    }
    return (
        <React.Fragment>
            <h3>Create you Exercise</h3>
            <div className="wrapper-exercise">
                <div className="wrapper-exercise_name">
                    <div>
                        <p>Exercise name</p>
                        <input className="exercise-name_input"
                               value={title}
                               onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <p>num</p>
                        <PlusButton onClick={() => addExercise()}/>
                    </div>
                </div>
                <div className="exercise-data">
                    {text.map((data, index) => {
                        return (
                            <ExerciseData setData={handleSetData} deleteData={deleteExercise} key={index} number={index}
                                          data={data}/>
                        );
                    })}
                </div>
            </div>
            <button className="exercise__button_add" onClick={handleCloseModal}>Add</button>
        </React.Fragment>
    )
})
export default ExercisesModal;



