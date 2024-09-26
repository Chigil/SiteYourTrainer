import {makeAutoObservable} from "mobx";

export default class TrainingStore {
    constructor() {
        this._trainings = []
        this._exercises = []
        this._nutrition = []
        this._weights = []
        this._records = []
        this._info = []
        makeAutoObservable(this)
    }


    setTraining(trainings) {
        this._trainings = trainings
    }

    setExercise(exercises) {
        this._exercises = exercises
    }

    setNutrition(nutrition) {
        this._nutrition = nutrition
    }

    removeNutrition(id) {
        return this._nutrition = this._nutrition.filter(nutrition => nutrition.id !== id)
    }

    removeRecord(id) {
        return this._records = this._records.filter(records => records.id !== id)
    }

    filterTraining(id) {
        return this._trainings = this._trainings.filter(trainings => trainings.id === id)
    }

    setInfo(info){
        this._info =  info
    }

    setWeight(weights) {
        this._weights = weights
    }

    setRecord(records) {
        this._records = records
    }

    get trainings() {
        return this._trainings
    }

    get exercises() {
        return this._exercises
    }

    get nutrition() {
        return this._nutrition
    }

    get weights() {
        return this._weights
    }

    get records() {
        return this._records
    }

    get info() {
        return this._info
    }

}