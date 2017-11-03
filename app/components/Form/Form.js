import React from 'react';
import { Div, Heading } from './../GlobalStyles/GlobalStyles';
import { FormStyled } from './styles/styles';

class Form extends React.PureComponent {

  render() {
    return (
      <FormStyled>
        <Div indentBottomBig directionColumn>
          <Heading indentBottom>Good afternoon! Welcome back.</Heading>
          <Heading subTitle>Sign into your account here:</Heading>
        </Div>
      </FormStyled>
    );
  }
}

export default Form;
