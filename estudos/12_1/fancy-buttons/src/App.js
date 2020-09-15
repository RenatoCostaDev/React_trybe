import React from 'react';
import './App.css';

const initialState = {
  numeroDeCliques: 0,
  cor: 'black'
}

class App extends React.Component {

  constructor() {
    super();
    this.handleClickBtn1 = this.handleClickBtn1.bind(this);
    this.handleClickBtn2 = this.handleClickBtn2.bind(this);
    this.handleClickBtn3 = this.handleClickBtn3.bind(this);
    this.state = {...initialState}
  }

  handleClickBtn1() {
    this.setState((estadoAnterior) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques +1,
      cor: 'blue'
    }))
  };  
  handleClickBtn2() {
    this.setState((estadoAnterior) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques -1,
      cor: 'red'
    }))
  };
  handleClickBtn3() {
    this.setState({...initialState});
  };

  render () {
    return (
      <div>
        <span className={this.state.cor}>{this.state.numeroDeCliques}</span><hr/>
        <button onClick={this.handleClickBtn1} >Botão + 1</button>
        <button onClick={this.handleClickBtn2} >Botão - 1</button>
        <button onClick={this.handleClickBtn3}>ZERAR</button>
      </div>
    );
  }
}

export default App;
