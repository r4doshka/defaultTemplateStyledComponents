import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {} from './../GlobalStyles/GlobalStyles';
import { HeaderStyled } from './styles/styles';
import { BaseballCloudImages } from '../../assets/svg/svg';

class Header extends React.PureComponent {

  render() {
    return (
      <HeaderStyled>
        <GroupStyled>
          <Icon dangerouslySetInnerHTML={{ __html: PUMImages.IconLogin }}></Icon>
        </GroupStyled>
      </HeaderStyled>
      );
    }
  }

export default Header
