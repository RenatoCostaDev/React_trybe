import React from 'react';
import './App.css';
import DadJokes from './DadJokes';
// import Clock from './Clock';
// import MyJokeComponent from './MyJokeComponent';

class App extends React.Component {//mudei de comp. funcional p/ class
  //demontando componente...2o passo
  // constructor(props) {
  //   super();
  //   this.state = { showClock: true};
  //   this.turnClockOff = this.turnClockOff.bind(this);
  // }

  // turnClockOff() {
  //   this.setState({ showClock: false });
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         {this.state.showClock && <Clock turnClockOff={this.turnClockOff}/>}
  //       </header>
  //     </div>
  //   );
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <MyJokeComponent/>
  //       </header>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DadJokes/>
        </header>
      </div>
    );
  }

}

export default App;
