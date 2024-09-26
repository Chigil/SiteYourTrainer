import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App';
import UserStore from "./store/UserStore";
import TrainingStore from "./store/TrainingStore";
import ModalStore from "./store/ModalStore";
import SnackbarStore from "./store/SnackbarStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        training: new TrainingStore(),
        modal: new ModalStore(),
        snackBar: new SnackbarStore()
    }}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);

