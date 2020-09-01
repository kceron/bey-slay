import React, { Component } from "react";
import BeyCard from "./BeyCard"

export default class Favorites extends Component {

  render() {
    let filteredBeysArr = this.props.filteredBeys.map(beyonce => {
      return <BeyCard key={beyonce.id} beyonce={beyonce} updatingBeys={this.props.updatingBeys} />
    })

    return (
      <div className="favorites">
        <h1>BEYVORITES</h1>
        {filteredBeysArr}
      </div>
    );
  }
}
