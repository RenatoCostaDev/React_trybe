import React from 'react';

class MyJokeComponent extends React.Component {
  constructor(props) {
    super();
    this.state = { piada: 'Minha piada' };
  }
  componentDidMount(){//chamado na construção liberando p/ o  update
   
  }
  
  //demontando componente...1o passo...tem q ir no pai!
//   componentWillUnmount() {}

  render() {
    //aqui o render será chamado sucessivas vezes...errado!(loop)
    // setInterval(() => this.setState({ date : new Date() }), 1000)
    return (
      <div>
          <span>{this.state.piada}</span>
      </div>
    );
  }
}
export default MyJokeComponent;