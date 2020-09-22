import React from 'react';

class DadJokes extends React.Component {
  constructor() {//1a chamada
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);
    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    };
  }

  async fetchJoke() {
    this.setState({ loading: true },
    async () => {
      const requestHeaders = { headers: { Accept: 'application/json' } };
      const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders);
      const requestObject = await requestReturn.json();
      this.setState({
        loading: false,
        jokeObj: requestObject
      })
    })
  }

  componentDidMount() {//3a chamada...q chama um setState//renderiza => (jokeObj.joke = true)
    this.fetchJoke();
  }
  //   componentWillUnmount() {}
  saveJoke() {
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj]
    }))
    this.fetchJoke();
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type='button' onClick={this.saveJoke}>
          Salvar piada
        </button>
      </div>
    )
  }

  render() {//2a chamada(jokeObj.joke = undefined)
    const { storedJokes, loading } = this.state //jokeObj, 
    const loadingElement = <span>Loading...</span>
    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>
        {/* <span>jokeObj.joke</span> */}
        {/* <span>{jokeObj ? jokeObj.joke : loadingElement}</span> */}
        {/* <span>{jokeObj ? this.renderJokeElement() : loadingElement}</span> */}
        <span>{ loading ? loadingElement : this.renderJokeElement() }</span>

      </div>
    );
  }
}
export default DadJokes;