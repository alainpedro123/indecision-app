import React, {Component} from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';


class Indecision extends Component{
 state = {
   options: [],
   selectedOptions: undefined
 };

  //returning an empty array.
  deleteOptions = ()=>{
    this.setState(() => ({options: [] }));
  }

  clearSelectedOption = () =>{
    this.setState(()=>({selectedOptions: undefined})) 
  }

  //creating a method that is going to be responsible for taking in an option (the one we wanna delete "in the args")
  //and using setSate to actuatly remove it
    deleteSingleOption = (optionToRemove) => {
    this.setState((prevState)=>({
      options: prevState.options.filter((option)=> optionToRemove !== option)
        //return true -> if we wanna keep this option in the array
        //return false // -> if we don't wanna this option in the array
        //return if optionToRemove is different than actual option 
    }));
  }

  handlePick = () => {
    //picking a handle number to be alerted with the random function
    const randomNum = Math.floor(Math.random()*this.state.options.length);
    const option = this.state.options[randomNum];
   this.setState(()=>({
     selectedOptions: option
   }));
  }

  addingOption = (option) => {
    if(!option){ //if an empty string was put
      return 'Enter a valid value to add item';
    }
  else if(this.state.options.indexOf(option) > -1){// if the option already exists in the array
    return 'This option already exists';
  }
    //pushing the new option in the array using concat()
    this.setState((prevState => ({options: prevState.options.concat(option)})));
  }
  componentDidMount(){
    
    try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      //if options were entered
      if(options){
        this.setState(() => ({options}));
      }

    //catching if a bad data was entered, such as: JSON.parse('[12}') using try ... catch
    //trying some code and catching if there're errors

    }catch(e){
      // Do nothinh at all
    }
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
    const json = JSON.stringify(this.state.options);
    localStorage.setItem('options',json);
    }
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }


  render(){
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of computer';
    //const options = ['Thing one', 'Thing two', 'Thing three'];

    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <div className="container">
            <Action 
              handlePick={this.handlePick} 
              hasOptions={this.state.options.length > 0}
            />
          <div className="options-container">
            <Options 
              options={this.state.options}
              deleteOptions={this.deleteOptions}
              deleteSingleOption={this.deleteSingleOption}
            />
            <AddOption addingOption={this.addingOption}/>
          </div>
        </div>

        <OptionModal
          selectedOptions={this.state.selectedOptions}
          clearSelectedOption={this.clearSelectedOption}
        />
      </div>
    )
  }
}

export default Indecision;