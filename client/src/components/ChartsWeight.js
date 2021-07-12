import React, {useContext} from 'react'
import {Line} from 'react-chartjs-2'
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const ChartsWeight = observer(() =>{
    const {training} = useContext(Context)
    let labelDate = []
    let labelWeight = []
    training.weights.forEach((el)=>{
        let date = new Date(el.date)
        labelDate.push(date.toLocaleDateString())
        labelWeight.push(el.weight)
    })
    return(<div>
        <div style={
            {   backgroundColor:'rgba(255, 255, 255, 0.5)',
                height:600,
                width: 700,
                borderRadius:'15px'
            }
        }>
            <Line

                data = {{
                    labels:labelDate,
                    datasets:[
                        {
                            label:"Weight",
                            data:labelWeight,
                            backgroundColor:'red'
                        },
                    ]
                }}
                height = {600}
                width = {700}
            />
        </div>
        </div>
    )
})
export default ChartsWeight