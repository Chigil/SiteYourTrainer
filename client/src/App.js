import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {observer} from "mobx-react-lite";
import AppRouter from "./components/AppRouter";
import MyModal from "./components/Modal/MyModal";
import CustomizedSnackbars from "./components/Snackbar";
import {ScaleLoader} from "react-spinners";


const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <ScaleLoader/>
    }
    return (
        <BrowserRouter>
            <MyModal/>
            <CustomizedSnackbars/>
            <AppRouter/>
        </BrowserRouter>
    );
});

export default App;
