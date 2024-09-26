import React, {useContext, useState} from 'react';
import './LoginModal.css'
import {login, registration} from "../../../http/userAPI";
import {observer} from "mobx-react-lite"
import {Context} from "../../../index";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {APP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, START_ROUTE} from "../../../utils/consts";
import useInput from "../../Validator"

const LoginModal = observer(({onCloseModal}) => {
    const email = useInput('', {isEmpty: true, minLength: 3, isEmail: true})
    const password = useInput('', {isEmpty: true, minLength: 5, maxLength: 8})
    const location = useLocation()
    const {user, snackBar} = useContext(Context)
    const history = useHistory()
    const isLogin = location.pathname === START_ROUTE + LOGIN_ROUTE
    const handleCloseModal = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email.value, password.value)
                console.log(data)
            } else {
                data = await registration(email.value, password.value)
                console.log(data)
            }
            onCloseModal()
            user.setUser(user)
            user.setIsAuth(true)
            history.push(APP_ROUTE)
        } catch (e) {
            snackBar.openSnackBar("error", (e.response.data.message))
        }
    }
    return (

        <React.Fragment>
            <h3>{isLogin ? "Login Your Account" : "Register Your Account"}</h3>
            <p>Enter Your Email</p>

                <input
                    value={email.value}
                    onChange={email.onChange}
                    onBlur={e => email.onBlur(e)}
                />
                {(email.isDirty && email.isEmpty) && email.messageError("Input value")}
                {(email.isDirty && email.minLengthError) && email.messageError("It's too short")}
                {(email.isDirty && email.emailError) && email.messageError("It's not email")}
                <p>Enter Your Password</p>

                <input
                    value={password.value}
                    onChange={password.onChange}
                    onBlur={e => password.onBlur(e)}
                    type="password"
                />
                {(password.isDirty && password.isEmpty) && password.messageError("Input value")}
                {(password.isDirty && password.maxLengthError) && password.messageError("It's too long")}
                {(password.isDirty && password.minLengthError) && password.messageError("It's too short")}
                {isLogin ?
                    <div>
                        Don't have an account? <NavLink to={START_ROUTE + REGISTRATION_ROUTE}> Register now! </NavLink>
                    </div>
                    :
                    <div>
                        Have an account? <NavLink to={START_ROUTE + LOGIN_ROUTE}> Login! </NavLink>
                    </div>
                }
                <button className="register" disabled={!email.inputValid || !password.inputValid} onClick={handleCloseModal}>{isLogin ? "Login" : "Register"}</button>
        </React.Fragment>
    )
})

export default LoginModal;



