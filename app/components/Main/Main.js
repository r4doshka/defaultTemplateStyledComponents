import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {} from './../GlobalStyles/GlobalStyles';
import { MainContent } from './styles/styles';


class Main extends React.PureComponent {

  render() {
    return (
      <MainContent>
        <Grid>
          <Row>
            <Col md={12}>
              testas
            </Col>
          </Row>
        </Grid>
      </MainContent>
    );
  }
}

export default Main;
