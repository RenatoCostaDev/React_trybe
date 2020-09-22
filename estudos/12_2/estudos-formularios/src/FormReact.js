import React from 'react';
import { Form, FormGroup, Label} from 'reactstrap';
import InputForm from  './InputForm';


class FormReact extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      nome: ''
    }
  }
  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div>
        <h1>Formulário</h1>
        <Form>
          <FormGroup>
            <Label for="nome">Nome</Label>
            {/* <Input name='nome' type="text" onChange={this.handleChange} value={this.state.nome} /> */}
            <InputForm value={this.state.nome} 
            handleChange={this.handleChange}/>
          </FormGroup>
        </Form>
      </div>
    )
  }
}


export default FormReact;