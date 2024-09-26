import React, {useContext} from "react";
import {observer} from "mobx-react-lite";


const parseExercise = (data) => {
    if(typeof(data) === "string") data = Object.values(JSON.parse(data))
    console.log(data)
    return (
        <div>
            {data.map((el,num)=>{
                return(
                <div>{num+1} - approach
                    <div>kg:{el.kg}</div>
                    <div>num:{el.num}</div>
                </div>
                )
            })}
        </div>
    )
}

const ProgramExercise = observer(({exercises}) => {
    console.log(exercises)
    return (
        <div style={{display:"flex",width:"100%",flexDirection:"column"}}>
            {exercises.map(ex => {
                    return (
                        <div>
                            Exercises: {ex.title}
                            <div>{parseExercise(ex.text)}
                            </div>
                        </div>
                    )
                }
            )}
        </div>
    )
})
export default ProgramExercise