import styled, { css } from 'styled-components';

export const GroupStyled = styled.div`
    display: flex;
    ${(props) => props.widthFluid && css`
      width: 100%;
      flex: 0 0 100%;
    `}
     ${(props) => props.btnGroup && css`
       ${Button}{
        margin-bottom: 6px;
        &:last-child{
          margin-bottom: 0;
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
    padding: 0;
    box-shadow: none;
    border: none;
    background: transparent;
    font-size: 14px;
    line-height: 1;
    font-weight: 700;
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

