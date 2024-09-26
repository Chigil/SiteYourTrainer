import {makeAutoObservable} from "mobx";

export default class SnackbarStore {
    constructor() {
        this._snackName = "";
        this._snackState = false;
        makeAutoObservable(this)
    }

    openSnackBar(alertName,message) {
        this._snackState = true;
        this._snackAlertName = alertName;
        this._snackMessage = message;
    };

    closeSnackBar() {
        this._snackState = false;
    };

    get snackBar() {
        return this._snackState;
    }
}
