import {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import MinusButton from "./Button/MinusButton";


const ExerciseData = observer( ({setData,number,deleteData, data}) => {
    return(
    <div className="exercise-data_content">
        <div>
            <p>kg</p>
            <input className="input"
                   value = {data.kg}
                   onChange={e=>setData(number,{kg: e.target.value,num: data.num})}
            />
        </div>
        <div>
            <p>num</p>
            <input className="input"
                   value = {data.num}
                   onChange={e=>setData(number,{kg: data.kg,num: e.target.value})}
            />
        </div>
        <div style={{display:'flex',alignItems:'flex-end'}}>
            <MinusButton onClick={()=>deleteData(number)}/>
        </div>
    </div>
    )
})
export default ExerciseData