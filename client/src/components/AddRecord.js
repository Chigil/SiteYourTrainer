import trash from "../svg/trash-alt-solid.svg";
import React, {useContext} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {deleteRecord, getRecord} from "../http/recordApi";
import DeleteButton from "./Button/DeleteButton";


const AddRecord = observer(() => {
    const {training, snackBar} = useContext(Context)
    const delRecord = (id) => {
        deleteRecord({id: id}).then(data => {
            snackBar.openSnackBar("info", "Deleted")
            getRecord().then(data => training.removeRecord(id))

        })
    }
    return (<React.Fragment>
            {training.records.map(record =>
                <div className="record-review__container">
                    <div className="record-review__container_name">{record.exercise_name}</div>
                    <div className="record-review__container_weight">{record.weight}</div>
                    <div className="record-review__container_num/min">{record.num}</div>
                    <div className="record-review__container_date">{new Date(record.date).toLocaleDateString()}</div>
                    <DeleteButton onClick={() => delRecord(record.id)}/>
                </div>
            )}
        </React.Fragment>
    )

})
export default AddRecord