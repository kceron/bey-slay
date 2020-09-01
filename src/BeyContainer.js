import React from "react";
import BeyCard from "./BeyCard"

export default class BeyContainer extends React.Component {

  render() {
    // console.log("container", this.props)
    let beysArr = this.props.beys.map(beyonce => {
      return <BeyCard key={beyonce.id} beyonce={beyonce} updatingBeys={this.props.updatingBeys} />
    })
    return (
      <div className="bey-container">
        <h1>BEYDEX</h1>
        {beysArr}
      </div>
    );
  }
}
