import styled from 'styled-components';
import {
  width,
  height,
  space,
  color,
  flex,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  display,
  position,
  top,
  right,
  bottom,
  left,
  opacity,
  zIndex
} from 'styled-system';
import utils from '../styles/utils';

const Box = styled('div')(
  color,
  space,
  width,
  height,
  flex,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  display,
  position,
  top,
  right,
  bottom,
  left,
  opacity,
  zIndex,
  utils.themed('Box')
);

Box.displayName = 'Box';

Box.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...flex.propTypes,
  ...minWidth.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...maxHeight.propTypes,
  ...display.propTypes,
  ...position.propTypes,
  ...top.propTypes,
  ...right.propTypes,
  ...bottom.propTypes,
  ...left.propTypes,
  ...opacity.propTypes,
  ...zIndex.propTypes
};

export default Box;
