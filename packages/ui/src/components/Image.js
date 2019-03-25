import styled from 'styled-components';
import { borderRadius, borderWidth, borderColor } from 'styled-system';
import Box from './Box';
import utils from '../styles/utils';

const Image = styled(Box)(
  {
    maxWidth: '100%'
  },
  borderColor,
  borderRadius,
  borderWidth,
  utils.themed('Image')
);

Image.displayName = 'Image';

Image.propTypes = {
  ...borderRadius.propTypes,
  ...borderWidth.propTypes,
  ...borderColor.propTypes
};

Image.defaultProps = {
  as: 'img',
  height: 'auto'
};

export default Image;
