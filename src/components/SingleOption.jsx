import React from 'react';

const SingleOption = ({ count, removeSingleOption, optionList }) => {
	return(
		<div className="option">
			<p className="option__text">{count}. {optionList}</p>
			<button
				className="button button--link" 
				onClick={(e) =>  removeSingleOption(optionList) }
			>
				remove
			</button>
		</div>
	)
}
export default SingleOption;