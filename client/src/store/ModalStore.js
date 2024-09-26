import {makeAutoObservable} from "mobx";

export default class ModalStore {
    constructor() {
        this._modalName = "";
        this._modalState = false;
        this._modalValues = {};
        makeAutoObservable(this)
    }

    openModal(name,value) {
        this._modalValues = value;
        this._modalState = true;
        this._modalName = name;
    };

    closeModal() {
        this._modalState = false;
        this._modalValues = '';
    };

    get modal() {
        return this._modalState;
    }
}
