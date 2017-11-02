import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {} from './../GlobalStyles/GlobalStyles';
import { HeaderStyled } from './styles/styles';

class Header extends React.PureComponent {

  render() {
    return (
      <HeaderStyled>
        <Grid>
          <Row>
            <Col md={12}>opa</Col>
          </Row>
        </Grid>
      </HeaderStyled>
      );
    }
  }

export default Header
