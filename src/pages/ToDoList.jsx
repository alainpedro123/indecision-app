import React, { Component } from 'react';
import Header from '../components/Header';
import Action from '../components/Action';
import OptionsContainer from '../components/OptionsContainer';
import AddOption from '../components/AddOption';
import DisplayOptions from '../components/DisplayOptions';


class ToDoList extends Component {
  state = {
    options: [],
    selectedOptions: undefined
  };

  formValidation = option => {
    if (!option) {
      return 'Enter a valid value to add item';
    }
    else if (this.state.options.indexOf(option) > -1) { // if this option already exists in the array
      return 'This option already exists';
    }

    const options = [...this.state.options];
    options.push(option);
    this.setState({ options });
    // this.setState((prevState => ({ options: prevState.options.concat(option) })));
  }

  removeAllOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  removeSingleOption = optionToRemove => {
    this.setState((prevState) => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  }

  clearSelectedOption = () => {
    this.setState(() => ({ selectedOptions: undefined }))
  }

  handlePick = () => {
    //picking a random number to be alerted with the random function
    const randomNum = Math.floor(Math.random() * this.state.options.length); //Math.floor()=> Round a number downward to its nearest integer, Math.floor(1.6) = 1
    const option = this.state.options[randomNum];                          //Math.random(); => Return a random number between 0 and 1
    this.setState(() => ({ selectedOptions: option }));                      // Math.floor((Math.random() * 10) + 1); => Return a random number between 1 and 10
  }

  componentDidMount() {
    try {  //trying some code and catching if there're errors
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) //if options were entered, so update them
        this.setState(() => ({ options }));

    } catch (e) {  //catching if a bad data was entered and then do nothing at all

    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  render() {
    const { options, selectedOptions } = this.state;
    return (
      <div>
        <Header />
        <div className="container">
          <Action
            handlePick={this.handlePick}
            hasOptions={options.length > 0}
          />
          <div className="widget">
            <OptionsContainer
              options={options}
              removeAllOptions={this.removeAllOptions}
              removeSingleOption={this.removeSingleOption}
            />
            <AddOption formValidation={this.formValidation} />
          </div>
        </div>

        <DisplayOptions
          selectedOptions={selectedOptions}
          clearSelectedOption={this.clearSelectedOption}
        />
      </div>
    )
  }
}

export default ToDoList;