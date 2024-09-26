import React, {useState} from "react";
import "react-dates/initialize";
import {SingleDatePicker} from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import styled from "styled-components";

const StyledDatePickerWrapper = styled.div`
  & .SingleDatePicker,
  .SingleDatePickerInput {
    .DateInput {
      width: 280px;
      height: 55px;
      border: 2px solid #000000;
      border-radius: 20px;
      display: flex;

      :hover {
        border: 2px solid #740005;
      }

      .DateInput_input {
        width: 100%;
        height: 100%;
        font-size: 22px;
        box-sizing: border-box;
        border-radius: 20px;
        background-color: rgba(0, 0, 0, 0);
      }
    }

    .SingleDatePickerInput__withBorder {
      border-radius: 20px;
      border: none;
    }

    .DateInput_input__focused {
      border: 4px solid #740005;
    }

    .CalendarDay__selected {
      background: #740005;
      border: #000000;
    }
  }
`;

function DatePicker({date,setDate}) {
    const [focused, setFocused] = useState(false);
    const onFocusChange = () => setFocused(!focused);
    return (
        <StyledDatePickerWrapper>
            <SingleDatePicker
                date={date} // momentPropTypes.momentObj or null
                onDateChange={date => setDate(date)} // PropTypes.func.isRequired
                focused={focused} // PropTypes.bool
                onFocusChange={onFocusChange}// PropTypes.func.isRequired
                displayFormat = "DD MMMM, yyyy"
                id="your_unique_id" // PropTypes.string.isRequired,
            />
        </StyledDatePickerWrapper>
    );
}

export default DatePicker;