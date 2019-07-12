import React, {Component} from "react";

// import "./House.css";



class House extends Component {
    render (props) {
        return (
           <div>
             <p>Property Name: {this.props.name}</p>
             {/* <img src= {this.props.image}/> */}
            <p>Address: {this.props.address}</p>
            <p>City: {this.props.city}</p>
            <p>State: {this.props.propertystate}</p>
            <p>Zipcode: {this.props.zipcode}</p>
            <button onClick = {(id) => this.props.deleteHouse(this.props.id)}>Delete</button>
            
            </div>
        )
    }
}


export default House;
