import "./GoPage.css"
import React, {useContext, useEffect} from "react"
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import {BrowserRouter, Route} from "react-router-dom";
import NutritionPage from "../NutritionPage/NutritionPage";
import WeightPage from "../WeightPage/WeightPage";
import RecordPage from "../RecordPage/RecordPage";
import ProgramPage from "../ProgramPage/ProgramPage";
import News from "../News/News";
import History from "../HistoryPage/History";
import {observer} from "mobx-react-lite";
import {getWeight} from "../../http/weightAPI";
import {Context} from "../../index";
import {getNutrition} from "../../http/nutritionApi";
import {getRecord} from "../../http/recordApi";
import {getTraining} from "../../http/trainingApi";


const GoPage = observer(() => {
    const {training} = useContext(Context)
    useEffect(() => {
        getWeight().then(data => training.setWeight(data))
        getNutrition().then(data => training.setNutrition(data))
        getRecord().then(data => training.setRecord(data))
        getTraining().then(data => training.setTraining(data))
    }, [])
    return (
        <BrowserRouter>
            <div className="go-page">
                <NavigationBar/>
                <Route path='/go/nutrition' render={() => <NutritionPage/>}/>
                <Route path='/go/weight' render={() => <WeightPage/>}/>
                <Route path='/go/record' render={() => <RecordPage/>}/>
                <Route path='/go/program' render={() => <ProgramPage/>}/>
                <Route path='/go/news' render={() => <News/>}/>
                <Route path='/go/history' render={() => <History/>}/>
            </div>
        </BrowserRouter>
    )
})

export default GoPage
