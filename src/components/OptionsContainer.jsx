import React from 'react';
import SingleOption from './SingleOption';

const OptionsContainer = ({ options, removeSingleOption, removeAllOptions  }) => {
  
    return (
      <div>
        <div className="widget-header">
          <h3 className="widget-header__title">Your options</h3>
          <button
            className="button button--link" 
            onClick={removeAllOptions}
            >Remove All
          </button>
        </div>
        {
          //when not option was entered dispaly the <p> paragraph.
          options.length === 0 && <p className="widget__message">Please add an option to get started</p>
        }
        {
          options.map((option, index) => (
            <SingleOption 
              key={option} 
              optionList={option}
              count={index + 1}
              removeSingleOption = {removeSingleOption}
            />
          ))
        }
      </div>
    );
}
export default OptionsContainer;