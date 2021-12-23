import React, { Component } from 'react';
import ItemContainer from '../containers/index';
class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
          <h1>danh sach item</h1>
          <ItemContainer />
      </div>
    );
  }
}

export default HomePage;
