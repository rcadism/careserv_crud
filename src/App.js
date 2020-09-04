import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cares from './components/Cares';

function App() {
  return (
    <div className ="row">
      <div classname = "col-md-8 offset-md-2">
        <Cares/>
      </div>
    </div>
  );
}

export default App;
