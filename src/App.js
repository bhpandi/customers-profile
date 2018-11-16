import React, { Component } from "react";
import Home from "./components/home";
import searchApi from "./utils/Api";
import { Icon } from "antd";
import "./css/App.scss";

class App extends Component {
  state = {
    orderDetails: {}
  };

  componentDidMount() {
    searchApi()
      .then(searchResults =>
        this.setState({
          orderDetails: searchResults
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    return Object.keys(this.state.orderDetails).length ? (
      <Home {...this.state} />
    ) : (
      <div>
        <Icon type="sync" spin />
      </div>
    );
  }
}

export default App;
