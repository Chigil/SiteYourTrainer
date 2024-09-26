import React, {useContext} from 'react';
import {Context} from "../../../index";
import ProgramExercise from "../../../pages/ProgramPage/ProgramExercise";


const TrainingInfo = () => {
    const {training, modal} = useContext(Context)
        return (
            <div>
               <div>Training: {modal._modalValues.data.training_name}</div>
                <div>Date: {modal._modalValues.data.date}</div>
                <ProgramExercise exercises={modal._modalValues.data.exercise_names}/>
            </div>
        );
};

export default TrainingInfo;