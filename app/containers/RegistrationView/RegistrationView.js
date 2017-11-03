import React from 'react';
import { Grid } from 'react-bootstrap';
import Form from '../../components/Form/Form';
import { Div } from '../../components/GlobalStyles/GlobalStyles';

class RegistrationView extends React.PureComponent {

  render() {
    return (
      <Div heightFluid>
        <Grid>
          <Div alignCenter justifyCenter heightFluid>
            <Form />
          </Div>
        </Grid>
      </Div>
    );
  }
}

export default RegistrationView;
