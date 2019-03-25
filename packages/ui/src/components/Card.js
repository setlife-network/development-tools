import styled from 'styled-components';
import {
  borders,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  style
} from 'styled-system';
import Box from './Box';
import utils from '../styles/utils';

const depth = style({
  prop: 'depth',
  cssProperty: 'boxShadow',
  key: 'shadows'
});

const Card = styled(Box)(
  borders,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  depth,
  utils.themed('Card')
);

Card.displayName = 'Card';

Card.propTypes = {
  ...borders.propTypes,
  ...backgroundImage.propTypes,
  ...backgroundSize.propTypes,
  ...backgroundPosition.propTypes,
  ...backgroundRepeat.propTypes,
  ...depth.propTypes
};

export default Card;
