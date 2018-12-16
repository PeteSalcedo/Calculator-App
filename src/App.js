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
      <Button>/</Button>
      </div>
      
      <div className="row">
      <Button>6</Button>
      <Button>5</Button>
      <Button>4</Button>
      <Button>x</Button>
      </div>

      <div className="row">
      <Button>3</Button>
      <Button>2</Button>
      <Button>1</Button>
      <Button>+</Button>
      </div>

      <div className="row">
      <Button>.</Button>
      <Button>0</Button>
      <Button>=</Button>
      <Button>-</Button>
      </div>
      </div>
    
      </div>
    );
  }
}

export default App;
