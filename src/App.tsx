import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Count} from "./component/count";
import {Button} from "./component/button";

function App() {
  return (
    <div className="App">
      <div><Button /></div>
      <div>
        <Count />
      </div>
    </div>
  );
}

export default App;
