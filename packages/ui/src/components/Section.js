import styled from 'styled-components';
import { utils } from '../styles';
import Box from './Box';

const Section = styled(Box).attrs({
  as: 'section',
  width: ['100%', '80%', '70%'],
  marginX: 'auto'
})`
  ${utils.themed('Section')}
`;

export default Section;
