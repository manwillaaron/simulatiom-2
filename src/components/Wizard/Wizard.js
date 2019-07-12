import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
// import "./Wizard.css";

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    };
    // this.handleChange=this.handleChange(this)
  }


  clearInputs() {
    this.setState({
        name: '',
        address: '',
        city: '',
        state: '',
        zipcode: ''
    })
}

  addHouse() {
    axios.post("/api/property", {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode
    })
    // .then(()=> this.clearInputs())
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(value);
  };

  render() {
      const{name,address,city,state,zipcode} = this.state
    return (
      <div>
   
          
               <Route path='/wizard/step1' render={props => {
            return (
              <StepOne {...props} 
              name= {name}
              address= {address}
              city= {city}
              state= {state}
              zipcode= {zipcode}>
              </StepOne>
            );
          }}/>
               <Route path='/wizard/step2' render={props => {
            return (
              <StepTwo {...props} 
              name= {name}
              address= {address}
              city= {city}
              state= {state}
              zipcode= {zipcode}>
              </StepTwo>
               );
            }}/>
            
               <Route path='/wizard/step3' render={props => {
            return (
              <StepThree {...props} 
              name= {name}
              address= {address}
              city= {city}
              state= {state}
              zipcode= {zipcode}>
              </StepThree>
               );
            }}/>

        <button onClick={() => this.addHouse()}><Link to='/'>Complete</Link></button>
      </div>
    );
  }
}



export default Wizard;
