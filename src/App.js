
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BeyContainer from "./BeyContainer"
import Favorites from "./Favorites"

class App extends React.Component {
  state={
    beys: []
  }

  componentDidMount(){
    fetch(" http://localhost:4000/beys")
    .then(r => r.json())
    .then((beyArray) => {
      this.setState({
        beys: beyArray
      })
    })
  }

  updatingBeys = (beyid) => {
    let updateBeys = this.state.beys.map(bey => {
      if (bey.id === beyid){
        bey.favorite = !bey.favorite
        return bey
      }else{
        return bey
      }
    })
    this.setState({
      beys: updateBeys
    })

  }

  render(){
    // console.log(this.state.beys)
    let filteredBeys = this.state.beys.filter(bey => {
      return bey.favorite
    })
    let filteredBeysFalse = this.state.beys.filter(bey => {
      return !bey.favorite
    })

    return (
      <div className="main-container">
        <BeyContainer beys={filteredBeysFalse}
        updatingBeys={this.updatingBeys}
        />
        <Favorites filteredBeys={filteredBeys} updatingBeys={this.updatingBeys} />
      </div>
    );
  }
};

export default App;
