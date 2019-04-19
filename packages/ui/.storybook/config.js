import React, { Fragment } from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import { addReadme, configureReadme } from 'storybook-readme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Flex, Box, theme } from '../src';

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
      <Box padding={2} width={1}>
        {story()}
      </Box>
      <GlobalStyle />
    </Fragment>
  </ThemeProvider>
));

configureReadme({
  StoryPreview: ({ children }) => <Box width={1}>{children}</Box>
});

addDecorator(addReadme);

const req = require.context('../src/stories', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
