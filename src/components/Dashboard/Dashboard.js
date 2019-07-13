import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";
// import "./Dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      houseList: []
    };
  }

  componentDidMount() {
    console.log(this.state.houseList);
    this.getHouses();
  }

  getHouses = () => {
    axios.get(`/api/houselist`).then(res => {
      console.log(res.data);

      this.setState({
        houseList: res.data
      });
    });
  };

  deleteHouse = (id) => {
    axios
        .delete(`/api/property/${id}`)
        .then(() => {
            this.getHouses()
        })
}

  render() {
    console.log(this.state.houseList);

    let houses = this.state.houseList.map(val => (
      <div key={val.id}>
        <House
          key={val.id}
          id={val.id}
          image= {val.image}
          name={val.name}
          address={val.address}
          city={val.city}
          propertystate={val.state}
          zip={val.zip}
          mortgage = {val.mortgage}
          rent = {val.rent}
          deleteHouse = {this.deleteHouse}
        />
      </div>
    ));

    return (
      <div>
        <div className="houses-container">{houses}</div>
        <button>
          <Link to="/wizard/step1">Add New Property</Link>
        </button>
      </div>
    );
  }
}

export default Dashboard;
