import { css } from 'styled-components';

const breakpoints = {
  mobile: 599,
  tabletPortrait: 600,
  tabletLandscape: 900,
  desktop: 1200,
  desktopBig: 1800
};

const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`@media (${
    label === 'mobile' ? 'max' : 'min'
  }-width: ${breakpoints[label]}px) {
      ${css(...args)};
  }
`;

  return acc;
}, {});

export default media;
