import React, {useEffect, useState} from "react"

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [numberError,setNumberError] = useState(false)
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [inputValid, setInputValid] = useState(false)
    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case  'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case  'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case  'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
                    break;
                case  'isEmail':
                    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
                case 'isNumber':
                      /\D/.test(value) ? setNumberError(true) : setNumberError(false)
                    break;



            }
        }
    }, [value])
    useEffect(() => {
        if (isEmpty || minLengthError || maxLengthError || emailError || numberError) {
            setInputValid(false);
        } else {
            setInputValid(true);
        }
    }, [isEmpty, minLengthError, maxLengthError, emailError, numberError])
    const messageError = (message) => {
        return <div style={{color: "red"}}>{message}</div>
    }
    return {
        messageError,
        isEmpty,
        minLengthError,
        maxLengthError,
        emailError,
        numberError,
        inputValid
    }
}


const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(initialValue)
    const valid = useValidation(value, validations)
    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = (e) => {
        setDirty(true)
    }
    return {
        value,
        onChange,
        onBlur,
        isDirty,
        setValue,
        ...valid
    }
}

const Validator = () => {
    const email = useInput('', {isEmpty: true, minLength: 3, isEmail: true})
    const password = useInput('', {isEmpty: true, minLength: 5, maxLength: 8})
    return (
        <div>
            <form>
                {(email.isDirty && email.isEmpty) && <div style={{color: "red"}}>Поле не может быть пустым</div>}
                {(email.isDirty && email.minLengthError) && <div style={{color: "red"}}>Неккоректная длинна</div>}
                {(email.isDirty && email.emailError) && <div style={{color: "red"}}>Неккоректная эмайл</div>}
                <input
                    value={email.value}
                    onChange={email.onChange}
                    onBlur={e => email.onBlur(e)}
                />
                {(password.isDirty && password.isEmpty) && <div style={{color: "red"}}>Поле не может быть пустым</div>}
                {(password.isDirty && password.maxLengthError) && <div style={{color: "red"}}>Слишком длинный</div>}
                {(password.isDirty && password.minLengthError) && <div style={{color: "red"}}>Неккоректная длинна</div>}
                <input
                    value={password.value}
                    onChange={password.onChange}
                    onBlur={e => password.onBlur(e)}
                />
                <button disabled={!email.inputValid || !password.inputValid}>Register</button>
            </form>
        </div>
    )
}
export default useInput

