import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import StepTwo from './StepTwo'

export default class StepOne extends Component {
  
    constructor(props){
        super(props)
    
        this.state={
            
        name: props.location.name,
        address: props.location.address,
        city: props.location.city,
        state: props.location.state,
        zipcode: props.location.zipcode  
        }
        this.handleChange= this.handleChange.bind(this)
    }
   
      
      handleChange(e) {
        console.log('hit2')

      let { name, value } = e.target
      this.setState({ [name]: value });
    //   console.log(value);
      console.log(this.props.location.name);
    };
    
  render() {
    console.log(this.props);
    let { name,address,city,state,zipcode} = this.state
    return (
      <div>
        
        <div className="input-boxes">
          <input
            onChange={this.handleChange}
            name="name"
            value={name}
            placeholder="name"
          />
          <input
            onChange={this.handleChange}
            name="address"
            value={address}
            placeholder="address"
          />
          <input
            onChange={this.handleChange}
            name="city"
            value={city}
            placeholder="city"
          />
          <input
            onChange={this.handleChange}
            name="state"
            value={state}
            placeholder="state"
          />
          <input
            onChange={this.handleChange}
            name="zipcode"
            value={zipcode}
            placeholder="zipcode"
          />
        </div>
        <button>
          <Link to="/"> Cancel</Link>
        </button>
        
        <button >
            <Link to='/wizard/step2' component={StepTwo}>next</Link>
            </button>
       
      </div>
    );
  }
}
