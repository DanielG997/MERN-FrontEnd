import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import theme from '../../styles/theme/theme';


export const ButtonAddComida = styled(Button)((props) => (`
&.MuiButtonBase-root {
        background-color: ${props.bg || theme.palette.blue1 };
        color: ${props.color || theme.palette.common.white};
        margin-top: ${props.mtop || "0"};
        display: ${props.display || 'block'};
        text-transform: capitalize;
&:hover {
            background-color: transparent;
            color:${props.bg || theme.palette.blue1};
            border: 1px solid ${props.bg || theme.palette.blue1};
          };
&:disabled {
            background-color: ${theme.palette.grey2};
            color: ${theme.palette.common.white};
          };
    }
`));

export const LinkButton = styled(Button)((props) => (`
  &.MuiButtonBase-root {
    background-color: transparent;
    color: ${theme.palette.blue1};
    text-decoration: ${props.decoration ? props.decoration : 'underline'};
    box-shadow: none;
    text-transform: none;
    font-weight: bold;
    padding-top:0;
    padding-left: 2px;
    &:hover {
      background-color: transparent;
    }
  }
`));


