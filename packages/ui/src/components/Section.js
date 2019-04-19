import styled from 'styled-components';
import PropTypes from 'prop-types';
import { utils, theme } from '../styles';
import Box from './Box';

const Section = styled(Box).attrs({
  as: 'section',
  width: ['100%', '80%', '70%'],
  maxWidth: p => theme.breakpoints[p.maxSize],
  mx: 'auto'
})`
  ${utils.themed('Section')}
`;

Section.propTypes = {
  maxWidth: PropTypes.oneOf(Object.keys(theme.breakpoints))
};

export default Section;
