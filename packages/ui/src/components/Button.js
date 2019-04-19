import styled from 'styled-components';
import { fontFamily, themeGet } from 'styled-system';
import { mixins, utils } from '../styles';
import Card from './Card';

const Button = styled(Card)`
  ${fontFamily}
  cursor: pointer;
  outline: 0;
  font-size: 1.5rem;
  display: inline-block;
  text-align: center;
  ${utils.themed('Button')}
  
  ${utils.is('transparent')`
    ${mixins.link};
    background-color: transparent;
    border: solid 1px;
  `}

  ${utils.isNot('transparent', 'disabled')`
    ${mixins.clickableBg};
    box-shadow: ${themeGet('shadows.1', '0px 1.5px 8px rgba(0,0,0,0.07)')};
  `}

  ${utils.is('disabled')`
    opacity: 0.5;
    color: white;
    cursor: default;
  `}
`;

Button.displanName = 'Button';

Button.propTypes = Card.propTypes;

Button.defaultProps = {
  as: 'button',
  bg: 'blue',
  color: '#ffffff',
  border: 'none',
  borderRadius: 3,
  py: '1rem',
  px: '2rem'
};

export default Button;
