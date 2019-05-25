import React from 'react';
import Option from './Option';

const Options = (props) => {
  
    return (
      <div>
        <div className="header-options">
          <h3 className="options-title">Your options</h3>
          <button
            className="button-remove-all" 
            onClick={props.deleteOptions}
            >Remove All
          </button>
        </div>
        {
          //when not option was entered dispaly the <p> paragraph.
          props.options.length === 0 && <p className="option-message">Please add an option to get started</p>
        }
        {
          props.options.map((option, index) => (
            <Option 
              key={option} 
              optionList={option}
              count={index + 1}
              deleteSingleOption = {props.deleteSingleOption}
            />
          ))
        }
      </div>
    );
}
export default Options;