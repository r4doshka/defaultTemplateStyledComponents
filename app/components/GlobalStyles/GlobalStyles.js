import styled, { css } from 'styled-components';

export const Div = styled.div`
    display: flex;
    ${(props) => props.widthFluid && css`
      width: 100%;
      flex: 0 0 100%;
    `}
     ${(props) => props.heightFluid && css`
      height: 100%;
    `}
     ${(props) => props.btnGroup && css`
       ${Button}{
       margin-right: 12px;
        &:last-child{
          margin-right: 0;
        }
      }
    `}
    ${(props) => props.mobileHide && css`
      @media (max-width: 600px) {
        display: none;
      }
    `}
    ${(props) => props.mobileShow && css`
       display: none;
       @media (max-width: 768px) {
        display: flex;
       }
   `}
    ${(props) => props.flexwrap && css`
      flex-wrap: wrap;
    `}
    ${(props) => props.directionColumn && css`
      flex-direction: column;
    `}
    ${(props) => props.alignCenter && css`
      align-items: center;
    `}
    ${(props) => props.alignStart && css`
      align-items: flex-start;
    `}
    ${(props) => props.justifyEnd && css`
      justify-content: flex-end;
    `}
    ${(props) => props.justifyCenter && css`
      justify-content: center;
    `}
    ${(props) => props.justifyBetween && css`
      justify-content: space-between;
    `}
    ${(props) => props.justifyStart && css`
      justify-content: flex-start;
    `}
    ${(props) => props.formGroup && css `
       position: relative;
    `}
     ${(props) => props.indentBottomBig && css `
       margin-bottom: 48px;
    `}
`;

export const GroupElement = styled.div`
  display: inline-flex;
  margin-left: 20px;
  &:first-child{
    margin-left: 0;
  }
`;

export const DefaultButton = styled.button`
    display: block;
    padding: 7px 19px 10px 18px;
    border-radius: 4px;
    box-shadow: none;
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    &:hover,
    &:focus,
    &:active,
    &:active:focus{
        outline:none;
        box-shadow: none;
        border:none;
    }
`;

export const Button = DefaultButton.extend`
  ${(props) => props.primary && css`
    border: solid 1px #d1d7db;
    background-color: #ffffff;
    box-shadow: 0 2px 25px 0 rgba(0, 0, 0, 0);
    transition: box-shadow 0.2s;
    &:hover{
      color: #48bbff;
      box-shadow: 0 0 4px 0 rgba(72, 187, 255, 0.8);
      border: solid 1px #48bbff;
    }
    &:active:focus,
    &:focus,
    &:active{
      box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.3);
      border: solid 1px #48bbff;
      color: #48bbff;
    }
  
  `}
  
   ${(props) => props.secondary && css`
      color: #ffffff;
      font-weight: 300;
      border: solid 1px transparent;
      box-shadow: 0 0 4px 0 rgba(72, 187, 255, 0);
      background-color: #48bbff;
       &:hover{
         color: #ffffff;
         box-shadow: 0 0 4px 0 rgba(72, 187, 255, 0.8);
         border: solid 1px transparent;
         background-color: #48bbff;
       }
        &:active:focus,
        &:focus,
        &:active{
          color: #ffffff;
          box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.25);
          border: solid 1px transparent;
          background-color: #48bbff;
      }
  `}
  
  ${(props) => props.withIcon && css`
      white-space: nowrap;
      display: flex;
      align-items: center;
  `}
  ${(props) => props.widthFluid && css`
    width: 100%;
  `}
`;

export const ImageBox = styled.div`
   display:block;
`;

export const Icon = styled.span`
   display:flex;
   ${(props) => props.iconRight && css`
    margin-left: 8px;
  `}
   ${(props) => props.iconLeft && css`
    margin-right: 8px;
  `}
`;

export const TextBox = styled.div`

`;
export const Paragraph = styled.p`
    margin: 0;
    line-height: 1.88;
`;

export const Heading = styled.div`
    font-size: 24px;
    line-height: 1.25;
    font-weight: 400;
    text-align: center;
    color: #667784;
    ${(props) => props.subTitle && css`
      font-size: 16px;
    `}
     ${(props) => props.indentBottom && css`
      margin-bottom: 8px;
    `}
`;


