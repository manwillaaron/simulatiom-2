import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
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
      zipcode: "",
      image:"",
      mortgage: '',
      rent: ''
    };
    // this.handleChange=this.handleChange(this)
  
  }



  addHouse = () => {
       
    axios.post("/api/property", {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zipcode,
      image: this.state.image,
      mortgage:this.state.mortgage,
      rent: this.state.rent
    })
    
    // .then(()=> this.clearInputs())
  }




 

  render() {
      const{name,address,city,state,zip,image,rent,mortgage} = this.state
      console.log(this.state)
    return (
      <div>
       <Switch>
          
               <Route path='/wizard/step1' 
               render={props => {
            return (
              <StepOne {...props} 
              name= {name}
              address= {address}
              city= {city}
              state= {state}
              zipcode= {zip}
              image = {image}
              mortgage= {mortgage}
              rent={rent}
             
            
              
              >
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
              zipcode= {zip}
              handleChange = {this.handleChange}
              image = {image}
              mortgage= {mortgage}
              rent={rent}
              >
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
              zipcode= {zip}
              image = {image}
              mortgage= {mortgage}
                rent = {rent}
                addHouse={this.addHouse}
           
              >
              </StepThree>
               );
            }}/>
           

           </Switch>
      </div>
    );
  }
}



export default Wizard;
