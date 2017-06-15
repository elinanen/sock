import React, { Component } from 'react';
import './App.css';
import sampleSocks from './sample-socks';
import Header from './Header';
import Sock from './Sock';
import Order from './Order';
var Rebase = require('re-base');
var firebase = require('firebase');

const app = firebase.initializeApp({
  apiKey: "AIzaSyAjvBL0ufpmqK4yw8SxZ6Rrxp1te4UlHak",
  authDomain: "socks-bf63f.firebaseapp.com",
  databaseURL: "https://socks-bf63f.firebaseio.com",
});
var base = Rebase.createClass(app.database());

class App extends Component {





  state = {
      socks: sampleSocks,
      allSocks: sampleSocks,
      filteredItems: {},
      order: {},
      categories: {
        first: 'all', second: 'seals', third: 'bunnies', fourth: 'pandas', fifth: 'koalas', sixth: 'penguins'
      }
    };



    // componentDidMount(){
    //   base.syncState(`results`, {
    //     context: this,
    //     state: 'results',
    //     asArray: true
    //   });
    // }

  addToOrder = (key) => {
    const order = {...this.state.order};
    order[key] = order[key] +1 || 1;
    this.setState({ order });
  };

  showAll = () => {
      const allSocks = {...this.state.allSocks};
      this.setState({ socks: allSocks });
      console.log(allSocks)
  };


  filterCategories = (category) => {
    const copySocks = {...this.state.allSocks};
    const socks = Object.keys(copySocks)
      .filter(key => copySocks[key].category === `${category}`)
      .map(key => copySocks[key]);
    this.setState({ socks: socks });
  };

  searchSocks = (query) => {
    const copySocks = {...this.state.allSocks};
    let socks = Object.keys(copySocks)
      .filter(key => copySocks[key].name
      .toLowerCase()
      .includes(query))
      .map(key => copySocks[key]);
    this.setState({socks: socks})
  };

  render() {
    return (
      <div>
        <Header categories={this.state.categories} showAll={this.showAll} filterCategories={this.filterCategories} searchSocks={this.searchSocks} />

        <div className="container">
          <ul>
            { Object
              .keys(this.state.socks)
              .map(key => <Sock key={key} index={key} info={this.state.socks[key]} addToOrder={this.addToOrder}></Sock>)
            }
          </ul>
          <Order
            socks={this.state.socks}
            order={this.state.order} />
        </div>
      </div>
    )
  }
}


export default App;
