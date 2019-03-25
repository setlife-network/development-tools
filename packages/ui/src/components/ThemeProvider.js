import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import defaultTheme from '../styles/theme';

const ThemeProvider = ({
  theme,
  customBreakpoints,
  customColors,
  children
}) => {
  const breakpoints = customBreakpoints || defaultTheme.breakpoints;
  const colors = customColors || defaultTheme.colors;

  const newTheme = theme || {
    ...defaultTheme,
    breakpoints,
    colors
  };

  return <StyledThemeProvider theme={newTheme}>{children}</StyledThemeProvider>;
};

ThemeProvider.propTypes = {
  theme: PropTypes.object,
  customBreakpoints: PropTypes.array,
  customColors: PropTypes.object,
  children: PropTypes.node.isRequired
};

export default ThemeProvider;
