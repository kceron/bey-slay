import React from "react";

class BeyCard extends React.Component{

  handleClick = (id) => {
    return this.props.updatingBeys(this.props.beyonce.id)
  }

  render(){
    let {name, img, favorite, id} = this.props.beyonce
    return (
      <div className='bey-card' onClick={this.handleClick}>
        <h3>{name}</h3>
        <img alt={name} src={img} />
      </div>
    );
  }
};

export default BeyCard