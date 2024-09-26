import "./NutritionPage.css"
import React, {useContext, useState} from "react"
import DatePicker from "../../components/DatePicker";
import {observer} from "mobx-react-lite";
import NutritionCalories from "../../components/NutritionCalories";
import {createNutrition, getNutrition} from "../../http/nutritionApi";
import {Context} from "../../index";
import useInput from "../../components/Validator"
import jwt_decode from "jwt-decode";

const NutritionPage = observer(() => {
    const {training, snackBar} = useContext(Context)
    const [date, setDate] = useState('')
    const [name, setName] = useState('')
    const calories = useInput('0', {isEmpty: true, isNumber: true})
    const calorieTotal = Object.values(training.nutrition).reduce((totalCalories, nutrition) => totalCalories + nutrition.calories, 0);
    const request = {
        date: date,
        name_nutrition: name,
        calories: calories.value,
        userId: jwt_decode(localStorage.token).id
    };

    const addNutrition = () => {
        createNutrition(request).then(() => {
            getNutrition().then(data => training.setNutrition(data));
            snackBar.openSnackBar("success", "Created");
            setDate('');
            setName('');
            calories.setValue('0');
        }).catch(() => snackBar.openSnackBar("error", "Enter all input please!"));
    }

    return (
        <React.Fragment>
            <div className="nutrition-page">
                <div className="nutrition-page__content">
                    <h1>Nutrition</h1>
                    <div className="nutrition-page__container">
                        <div className="nutrition-page__fill">
                            <h3 className="fill-date__header">Date:</h3>
                            <div className="fill-date__container">
                                <DatePicker
                                    date={date}
                                    setDate={setDate}
                                />
                            </div>
                            <div className="calories__form">
                                <ul className="calories__items">
                                    <li className="calories__item">
                                        <h3>Name eating:</h3>
                                        <input
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                        />
                                    </li>
                                    <li className="calories__item">
                                        <h3>Calories:</h3>
                                        <input
                                            value={calories.value}
                                            onChange={calories.onChange}
                                            onBlur={e => calories.onBlur(e)}
                                        />
                                        {(calories.isDirty && calories.isEmpty) && calories.messageError("Input value")}
                                        {(calories.isDirty && calories.numberError) && calories.messageError("Only numbers")}
                                    </li>
                                </ul>
                                <button
                                    className="calories__button_save"
                                    onClick={addNutrition}
                                >Add
                                </button>
                            </div>
                        </div>
                        <div className="nutrition-page__review">
                            <div className="nutrition-review__name">
                                <div className="nutrition-review__header_food-name">
                                    Food name:
                                </div>
                                <div className="nutrition-review__header_calories">
                                    calories:
                                </div>
                            </div>
                            <div className="nutrition-review__content">
                                <NutritionCalories/>
                            </div>
                            <div className="nutrition-review__result">
                                <div className="nutrition-review__header_total">
                                    Total Calories:
                                </div>
                                <div className="nutrition-review__number_total">
                                    {calorieTotal}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
})
export default NutritionPage