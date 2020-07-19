import React from 'react';
import Modal from 'react-modal';

//creating a modal that hides and shows based on a value.
const DisplayOptions = ({ selectedOptions, clearSelectedOption }) => {
    return(
        <Modal
            isOpen={!!selectedOptions} //real boolean
            onRequestClose={clearSelectedOption}
            contentLabel="Selected option"
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">Selected Option</h3>
            {selectedOptions &&<p className="modal__body">{selectedOptions}</p>}
            <button className="button" onClick={clearSelectedOption}>okay</button>
       </Modal>
    )
}

export default DisplayOptions;