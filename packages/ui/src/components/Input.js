import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Card from './Card';
import utils from '../styles/utils';

const Input = styled(Card).attrs({
  as: 'input',
  type: 'text'
})`
  font-size: 1.4em;
  font-family: inherit;
  outline: 0;
  &::placeholder {
    color: ${themeGet('colors.lightGrey')};
  }

  ${utils.themed('Input')}
  ${utils.is('disabled')`
    opacity: 0.5;
  `}
`;

Input.defaultProps = {
  p: '1rem',
  bg: 'white',
  color: 'darkGrey',
  border: 'solid 1px',
  borderColor: 'lightGrey',
  borderRadius: '4px'
};

export default Input;
