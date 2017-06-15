import React, { Component } from 'react';
import './Sock.css';

class Sock extends Component {

  render() {
    const { info, index } = this.props;
    const isAvailable = info.status === 'available';
    return (
      <div className="sock">
        <img className="sock-image" src={info.image} alt={info.name} />
      <p className="sock-info"> {info.name}, {info.price} €</p>
      <button className="order-btn" onClick={() => this.props.addToOrder(index)} disabled={!isAvailable}> Order us</button>
    </div>
    );
  }
}

export default Sock;
