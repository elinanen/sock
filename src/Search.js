import React, { Component } from 'react';

class Search extends Component {

  handleSearch = (event) => {
      this.props.searchSocks(event.target.value)
}

  render() {
    return (
        <div className="input-field">
          <label>Search</label>
          <input type="text" onKeyUp={this.handleSearch}/>
        </div>
    );
  }
}

export default Search;
