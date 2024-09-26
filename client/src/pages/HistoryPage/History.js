import "./History.css"
import React, {useContext, useState} from "react"
import arrow from "../../svg/arrow-circle-right-solid.svg"
import DatePicker from "../../components/DatePicker";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const History = observer(() => {
    const [date,setDate] = useState('')
    const {training} = useContext(Context)
    return (
        <div className="history">
            <div className="history__content">
                <h1>History</h1>
                <div className="history__container">
                    <div className="history__fill">
                        <h3 className="fill-date__header">Date:</h3>
                        <div className="fill-date__container">
                            <DatePicker
                                date={date}
                                setDate={setDate}
                            />
                        </div>
                    </div>
                    <div className="history-page__review">
                        <div className="history-review__name">
                            <div className="review__header header_training">Training:</div>
                            <div className="review__header header_eating">Eating:</div>
                            <div className="review__header header_weight">Weight:</div>
                            <div className="review__header header_record">Record:</div>
                        </div>
                        <div className="history-review__content">
                            <div className="history-review__container">
                                <div className="history-review__header_food-name">Жим лёжа</div>
                                <div className="history-review__button_delete"><img src={arrow}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default History