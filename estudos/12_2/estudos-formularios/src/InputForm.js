import React from 'react';
// import { Form, FormGroup, Label, Input} from 'reactstrap';


class FormReact extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <Input name='nome' 
      value={value}
      onChange={handleChange}
      />
    )
  }
}

export default InputForm;
