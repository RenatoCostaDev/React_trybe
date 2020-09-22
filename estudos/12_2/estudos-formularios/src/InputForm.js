import React from 'react';
import { Form, FormGroup, Label, Input} from 'reactstrap';


class InputForm extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <input name='nome' 
      value={value}
      onChange={handleChange}
      />
    )
  }
}

export default InputForm;
