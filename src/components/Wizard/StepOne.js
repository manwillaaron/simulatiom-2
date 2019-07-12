import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class StepOne extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <button>
          <Link to="/"> Cancel</Link>
        </button>
        <div className="input-boxes">
          <input
            onChange={this.handleChange}
            name="name"
            value={this.state.name}
            placeholder="name"
          />
          <input
            onChange={this.handleChange}
            name="address"
            value={this.state.address}
            placeholder="address"
          />
          <input
            onChange={this.handleChange}
            name="city"
            value={this.state.city}
            placeholder="city"
          />
          <input
            onChange={this.handleChange}
            name="state"
            value={this.state.state}
            placeholder="state"
          />
          <input
            onChange={this.handleChange}
            name="zipcode"
            value={this.state.zipcode}
            placeholder="zipcode"
          />
        </div>
        <button>
          <Link to="/"> Cancel</Link>
        </button>
      </div>
    );
  }
}
