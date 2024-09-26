import React, {useContext} from 'react';
import info from "../svg/info-circle-solid.svg";

import {Context} from "../index";
import DeleteButton from "./Button/DeleteButton";
import {deleteTraining, getTraining, getTrainingById} from "../http/trainingApi";
import {observer} from "mobx-react-lite";
//Использовать get (Избивиться от фильтра)

const TrainingCard = observer(() => {
    const {modal, snackBar, training} = useContext(Context)
    const delTraining = (id) => {
        console.log(id)
        deleteTraining({id: id}).then(data => {
            snackBar.openSnackBar("success", "Deleted")
            getTraining().then(data => training.setTraining(data))

        })
    }

    const openTrainingInfo = (id) => {
        getTrainingById({id:id}).then(data => {
            modal.openModal("TrainingInfo",{data})
        })
    }

    return (
        <>{training.trainings.map(train =>
            <div className="training-card">
                <h3 className="training-card_title">{train.training_name}</h3>
                <h3 className="training-card_date">{train.date}</h3>
                <div className="training-card_buttons">
                    <div className="training-card_info">
                        <img onClick={() => openTrainingInfo(train.id)}
                             src={info}
                             alt="info"/>
                    </div>
                    <DeleteButton onClick={() => delTraining(train.id)}/>
                </div>
            </div>
        )}
        </>
    );
});

export default TrainingCard;