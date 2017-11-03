import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Div, ImageBox, Icon, Button } from './../GlobalStyles/GlobalStyles';
import { HeaderStyled } from './styles/styles';
import { BaseballCloudImages } from '../../assets/svg/svg';

class Header extends React.PureComponent {

  render() {
    return (
      <HeaderStyled>
        <Grid>
          <Row>
            <Col md={12}>
              <Div justifyBetween>
                <ImageBox>
                  <Icon dangerouslySetInnerHTML={{ __html: BaseballCloudImages.logo }}></Icon>
                </ImageBox>
                <Div btnGroup>
                  <Button primary>Sign In</Button>
                  <Button secondary>Sign Up</Button>
                </Div>
              </Div>
            </Col>
          </Row>
        </Grid>
      </HeaderStyled>
      );
    }
  }

export default Header
