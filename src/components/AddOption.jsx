import React, { Component } from 'react';

class AddOption extends Component {
	state = {
		error: undefined //tracking an error, by default it's undefined, cause initially there's no error
	}

	addingOption = event => {
		event.preventDefault();
		const option = event.target.option.value.trim(); // grabbing the input element value property
		const error = this.props.formValidation(option); // if an error comes 

		// updating the error state when they submit a form with an error
		this.setState(() => ({ error })); //error: error

		//clearing the inputbox after entering an option with no erro;
		if (!error) {
			event.target.option.value = '';
		}
	}

	render() {
		const { error } = this.state;
		return (
			<div>
				{error && <p className="add-option-error">{error}</p>} {/*if any error is submitted so display it on the screen*/}
				<form className="add-option" onSubmit={this.addingOption}>
					<input className="add-option__input" type="text" name="option"></input>
					<button className="button">AddOption</button>
				</form>
			</div>
		);
	}
}

export default AddOption;