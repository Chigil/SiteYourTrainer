import {useContext} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {deleteNutrition, getNutrition} from "../http/nutritionApi";
import DeleteButton from "./Button/DeleteButton";
//Использовать get (Избивиться от фильтра)

const NutritionCalories = observer(() => {
    const {training,snackBar} = useContext(Context)
    const delNutrition = (id) =>{
        deleteNutrition({id:id}).then(data=>{
            snackBar.openSnackBar("success","Deleted")
            getNutrition().then(data => training.removeNutrition(id))
        })
    }

    return (<div>
            {training.nutrition.map(nutrition =>
                <div className="nutrition-review__container"
                key={nutrition.id}>
                <div className="nutrition-review__header_food-name">
                    {nutrition.name_nutrition}
                </div>
                <div className="nutrition-review__calories_number">
                    {nutrition.calories}
                </div>
               <DeleteButton  onClick={()=>delNutrition(nutrition.id)}/>
            </div>
        )}
    </div>)

})
export default NutritionCalories
