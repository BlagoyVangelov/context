import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock'
import TimeSwitcher from './components/TimeSwitcher'
import { TimeContext } from './components/TimeContext'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { zone: 'Europe/Sofia' }
    this.setZone = this.setZone.bind(this);
  }

  setZone(newZone) {
    this.setState({ zone: newZone })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <TimeContext.Provider value={{ zone: this.state.zone, setZone: this.setZone }} >        
          <div><TimeSwitcher /></div>

          <div><Clock /></div>
        </TimeContext.Provider>
      </div>

    );
  }
}

export default App;
