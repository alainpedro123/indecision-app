import React from 'react';
import Modal from 'react-modal';
import './styles/modal.scss'

//creating a modal that hides and shows based on a value.
const OptionModal = (props) => {
    return(
        <Modal
            isOpen={!!props.selectedOptions} //real boolean
            onRequestClose={props.clearSelectedOption}
            contentLabel="Selected option"
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal-title">Selected Option</h3>
            {props.selectedOptions &&<p className="modal-boday">{props.selectedOptions}</p>}
            <button className="button" onClick={props.clearSelectedOption}>okay</button>
       </Modal>
    )
}

export default OptionModal;