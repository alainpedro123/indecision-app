import React, { Component } from 'react';

class AddOption extends Component {
	state = {
		error: undefined //tracking an error, by default no error is undefined
	}
	// this function was defined inside AddOption rather than in the Indecision componnent
	// the parent component, cause this below function is a behavior/methods that belongs to AddOption component
	
	addingOption = (e) => { // grabbing the event "e"
		e.preventDefault(); // preventing the default submission form

		const option = e.target.elements.option.value.trim(); // grabbing the input element value property
		const error = this.props.addingOption(option); // if an error comes 
		
		// updating the error state when they submit a form with an error
		this.setState(()=>({error})); //error: error

		//clearing the inputbox after enter an option;
		if(!error){
			e.target.elements.option.value='';
		}
	}

	// "  Alain   "  trim() - removing the empty spaces/characters before and after the string

  render() {
    return (
			//if an error is submited so display on the screen
      <div>
				{this.state.error && <p className="add-option-error">{this.state.error}</p>}
				<form className="add-option" onSubmit={this.addingOption}>
					<input className="add-option-input" type="text" name="option"></input>
					<button className="button">AddOption</button>
				</form>
      </div>
    );
  }
}

export default AddOption;