import {observer} from "mobx-react-lite";
import Modal from "react-modal";
import React, {useContext} from "react";
import {Context} from "../../index";
import LoginModal from "./LoginModal/LoginModal";
import ExercisesModal from "./ExersicesModal/ExecisesModal";
import TrainingInfo from "./TrainingInfo/TrainingInfo";
import * as ModalTypes from "./ModalTypes";
import close from "../../svg/times-circle-solid.svg"



const mapTypeToModal = {
    [ModalTypes.ADD_LOGIN_MODAL]: LoginModal,
    [ModalTypes.ADD_EXERCISES_MODAL]: ExercisesModal,
    [ModalTypes.TRAINING_INFO]: TrainingInfo,
};

const MyModal = observer(() => {
    const customStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.25)'
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '20px',
            width: '315px',
            minHeight: '470px',
            borderRadius: '15px'
        }
    }

    const {modal} = useContext(Context)
    if (modal._modalState === false) return null
    const name = modal._modalName
    const data = modal._modalValues
    const CurrentModal = mapTypeToModal[name]
    const handleCloseModal = () => {
        modal.closeModal()
    }
    return (
        <>
            {CurrentModal && (
                <Modal
                    isOpen
                    onRequestClose={() => modal.closeModal()}
                    style={customStyles}
                    ariaHideApp={false}
                >
                    <div>
                        <div className="close" style={{width: '30px', height: '30px'}}
                             onClick={handleCloseModal}>
                            <img src={close} style={{width: '100%', height: '100%'}} alt="close"/>
                        </div>
                        <div className="modal-body" style={{padding: '15px'}}>
                            <CurrentModal onCloseModal={handleCloseModal}/>
                        </div>
                    </div>
                </Modal>
            )}
        </>

    );
});

export default MyModal

/*
<div className="modal-content">
                        <div className="modal-header">
                            Описание
                        </div>

 <div className="modal-footer">
                            <button onClick={()=>modal.closeModal()}>
                                Закрыть
                            </button>
                        </div>
 */