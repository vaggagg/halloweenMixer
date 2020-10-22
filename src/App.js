import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mixer from './Mixer';
import Pumpkin from './Pumpkin';

class App extends React.Component{
  render(){
    return (
      <div><Mixer /><Pumpkin />
        </div>
      );
  }
}

export default App;
