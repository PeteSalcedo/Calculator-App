import React, { Component } from 'react';
import "./app.css";
import { Button } from "./components/Button";

class App extends Component {
  render() {
    return (
      <div className="app">
      <div className="calc-wrapper">
      <div className="row">
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      </div>
      </div>
    
      </div>
    );
  }
}

export default App;
