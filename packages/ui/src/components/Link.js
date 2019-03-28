import styled from 'styled-components';
import Text from './Text';
import utils from '../styles/utils';

const Link = styled(Text).attrs({
  as: 'a',
  color: 'blue'
})`
  ${utils.themed('Link')}
`;

export default Link;
