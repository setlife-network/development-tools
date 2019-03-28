import React, { Fragment } from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import { addReadme } from 'storybook-readme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Box, theme } from '../src';

addParameters({
  options: {
    name: 'Setlife UI Components',
    hierarchyRootSeparator: /\|/,
    theme: themes.light
  }
});

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Box padding={2}>{story()}</Box>
      <GlobalStyle />
    </Fragment>
  </ThemeProvider>
));

addDecorator(addReadme);

const req = require.context('../src/stories', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
