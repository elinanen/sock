import React, { Component } from 'react';
import './Order.css';

class Order extends Component {

  renderItems = (key) => {
    const sock = this.props.socks[key];
    console.log(sock);
    const count = this.props.order[key];
    console.log(count);
    // const removeButton = <button onClick{() => this.props.removeFromOrder(key)}>&times;</button>

    if(!sock || sock.status === 'unavailable') {
      return <li key={key}>Sorry, {sock ? sock.name : 'sock'} is no longer available!</li>
    }

    return (
      <li className="order-item" key={key}>
          <span key={count}>{count} pairs of  {sock.name}, </span>
        <span className="price"> {  count * sock.price} euros</span>
      </li>
    )
  }

  render() {
    const orderIds = Object.keys(this.props.order)

    const total = orderIds.reduce((prevTotal, key) => {
      const sock = this.props.socks[key];
      const orderCount = this.props.order[key];
      const isAvailable = sock && sock.status === 'available';
      if(isAvailable) { return prevTotal + (orderCount * sock.price || 0) }
      return prevTotal;
    },0);

    return (
      <div className="order">
      <h2>Your order: </h2>
      {orderIds.map(this.renderItems)}
        <p>Total: {total} euros</p>
    </div>
    )
  }
}

export default Order;
