import './App.css';
import React, {Component} from 'react';
import ClickCounter from './components/ClickCounter';
import Hover from './components/Hover';

class App extends Component {
  render(){
    return (
      <div className="App">
        <ClickCounter name="Iqra"/>
        <Hover/>
      </div>
    )
  }
}

export default App;
