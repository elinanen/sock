import React, { Component } from 'react';
import './header.css';
import Search from './Search';

class Header extends Component {

  render() {
    return (
      <div className="header">
      <div className="logo">LOGO</div>
      <div className="nav">
        <a onClick={() => this.props.showAll()} className="nav__item">{this.props.categories.first}</a>
        <a onClick={() => this.props.filterCategories(this.props.categories.second)} className="nav__item">{this.props.categories.second}</a>
        <a onClick={() => this.props.filterCategories(this.props.categories.third)} className="nav__item">{this.props.categories.third}</a>
        <a onClick={() => this.props.filterCategories(this.props.categories.fourth)} className="nav__item">{this.props.categories.fourth}</a>
        <a onClick={() => this.props.filterCategories(this.props.categories.fifth)} className="nav__item">{this.props.categories.fifth}</a>
        <a onClick={() => this.props.filterCategories(this.props.categories.sixth)} className="nav__item">{this.props.categories.sixth}</a>
      </div>
      <Search searchSocks={this.props.searchSocks} />




      </div>
    );
  }
}

export default Header;
