import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'


export default class StepTwo extends Component {
    
    constructor(props){
        super(props)
    
        this.state={
            
        // name: props.location.name,
        // address: props.location.address,
        // city: props.location.city,
        // state: props.location.state,
        // zipcode: props.location.zipcode,
        // image:props.location.image,
        mortgage: props.location.mortgage,
        rent: props.location.rent
            
        }
    }
handleChange = e => {
  console.log('hit2')

let { name, value } = e.target
this.setState({ [name]: value });
//   console.log(value);
console.log(this.props.location.name);
};

addHouse = () => {
       const {name,address,city,state,zipcode,image} = this.props.location
    axios.post("/api/property", {
      name: name,
      address:address,
      city: city,
      state: state,
      zip: zipcode,
      image: image,
      mortgage:this.state.mortgage,
      rent: this.state.rent
    })
    // .then(()=> this.clearInputs())
  }

render() {
console.log(this.props);
let {name,address,city,state,zip,image,rent,mortgage} = this.state
return (
<div>
  
  <div className="input-boxes">
    <input
      onChange={this.handleChange}
      name="mortgage"
      value={mortgage}
      placeholder="mortgage"
    />
     <input
      onChange={this.handleChange}
      name="rent"
      value={rent}
      placeholder="rent"
    />

  </div>
  <button>
    <Link to="/"> Cancel</Link>
  </button>
  
  <button onClick={() => this.addHouse()}>
      <Link to='/'>Complete</Link>
      </button>
</div>
);
}
}