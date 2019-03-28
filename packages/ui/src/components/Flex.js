import styled from 'styled-components';
import {
  alignItems,
  alignSelf,
  justifyContent,
  alignContent,
  style,
  order
} from 'styled-system';
import PropTypes from 'prop-types';

import Box from './Box';
import utils from '../styles/utils';

const flexDirection = style({
  prop: 'flexDirection',
  cssProperty: 'flexDirection',
  alias: 'direction'
});

const flexBasis = style({
  prop: 'flexBasis',
  cssProperty: 'flexBasis',
  alias: 'basis'
});

const flexWrap = style({
  prop: 'flexWrap',
  cssProperty: 'flexWrap',
  alias: 'wrap'
});

const Flex = styled(Box)`
  display: flex;
  ${flexDirection}
  ${flexWrap}
  ${flexBasis}
  ${alignItems}
  ${alignSelf}
  ${justifyContent}
  ${alignContent}
  ${order}
  ${utils.themed('Flex')}

  /* Misc */
  ${utils.is('center')`
    align-items: center;
    justify-content: center;
  `}
`;

Flex.displayName = 'Flex';

Flex.propTypes = {
  ...flexDirection.propTypes,
  ...flexBasis.propTypes,
  ...flexWrap.propTypes,
  ...alignItems.propTypes,
  ...alignSelf.propTypes,
  ...justifyContent.propTypes,
  ...alignContent.propTypes,
  ...order.propTypes,
  center: PropTypes.bool
};

Flex.defaultProps = {
  center: false
};

export default Flex;
