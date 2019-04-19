import styled from 'styled-components';
import {
  lineHeight,
  letterSpacing,
  fontFamily,
  variant,
  style,
  getPx
} from 'styled-system';

import Box from './Box';
import { utils } from '../styles';

const tags = {
  p: 'p',
  a: 'a',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6'
};

const textStyle = variant({
  key: 'fontVariants'
});

const textAlign = style({
  prop: 'textAlign',
  alias: 'align'
});

const fontWeight = style({
  prop: 'fontWeight',
  key: 'fontWeights',
  alias: 'weight'
});

const fontSize = style({
  prop: 'fontSize',
  key: 'fontSizes',
  transformValue: getPx,
  scale: [12, 14, 16, 20, 24, 32, 48, 64, 72]
});

const Text = styled(Box).attrs({
  as: p => tags[p.variant]
})`
  ${fontFamily}
  ${textAlign}
  ${fontWeight}
  ${fontSize}
  ${lineHeight}
  ${letterSpacing}
  ${textStyle}
  ${utils.themed('Text')}
`;

Text.displayName = 'Text';

Text.defaultProps = {
  variant: 'p',
  color: 'darkGrey',
  fontSize: '1.6em',
  letterSpacing: '0.02em',
  lineHeight: 1.6
};

export default Text;
