import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super();
    this.state = {
      date: new Date()
    };
  }
  componentDidMount(){//chamado na construção liberando p/ o  update
    this.timerId = setInterval(() => this.setState({ date : new Date() }), 1000)
  }
  
  //demontando componente...1o passo...tem q ir no pai!
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    //aqui o render será chamado sucessivas vezes...errado!(loop)
    // setInterval(() => this.setState({ date : new Date() }), 1000)
    return (
      <div>
        <h1>Relógio</h1>
        <h2>Agora são {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={this.props.turnClockOff}>Desligar Relógio</button>
      </div>
    );
  }
}
export default Clock