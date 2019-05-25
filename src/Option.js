import React from 'react';

const Option = (props) => {
	return(
		<div className="single-option">
			<p className="option-font">{props.count}. {props.optionList}</p>
			<button
				className="button-remove" 
				onClick={(e) => {
					props.deleteSingleOption(props.optionList);
				}}
			>
				remove
			</button>
		</div>
	)
}
export default Option;