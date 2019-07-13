import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import StepThree from './StepThree'

export default class StepTwo extends Component {
    
    constructor(props){
        super(props)
    
        this.state={
            
      
        image:props.location.image
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
       
    axios.post("/api/property", {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zipcode,
      image: this.state.image
    })
    // .then(()=> this.clearInputs())
  }

render() {
console.log(this.props);
let {image} = this.state
return (
<div>
  
  <div className="input-boxes">
    <input
      onChange={this.handleChange}
      name="image"
      value={image}
      placeholder="image"
    />

  </div>
  <button>
    <Link to="/"> Cancel</Link>
  </button>
  
  <button >
      <Link to='/wizard/step3' component={StepThree}>next</Link>
      </button>
  <button onClick={(e) => this.addHouse()}><Link to='/'>Complete</Link></button>
</div>
);
}
}