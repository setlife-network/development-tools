import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc, withDocs } from 'storybook-readme';
import { Card, Text, Box, Flex, ThemeProvider, theme } from '..';
import ThemeProviderReadme from '../readme/ThemeProvider.md';
import GlobalStyleReadme from '../readme/GlobalStyle.md';
import ComponentThemingReadme from '../readme/ComponentTheming.md';
import OverviewReadme from '../readme/Overview.md';

const Color = ({ name, color }) => (
  <Card m="1rem" depth={1}>
    <Box bg={color} flex={1} width={120} height={120} />
    <Text variant="h4" align="center">
      {name}
    </Text>
    <Text mb="1rem" align="center">
      {color}
    </Text>
  </Card>
);

const params = {
  options: {
    showAddonPanel: false
  }
};

storiesOf('Docs|Overview', module)
  .addParameters(params)
  .add('General Usage', doc(OverviewReadme));

storiesOf('Docs|Theming', module)
  .addParameters(params)
  .add('ThemeProvider', doc(ThemeProviderReadme))
  .add(
    'Component Theming',
    withDocs(ComponentThemingReadme, () => {
      const theme = {
        Text: {
          letterSpacing: '1px',
          color: '#9b59b6'
        },
        Card: {
          padding: '2rem',
          backgroundColor: 'white',
          borderRadius: '4px',
          boxShadow: '0px 2px 11px rgba(0,0,0,0.10)'
        }
      };

      return (
        <ThemeProvider theme={theme}>
          <Card>
            <Text>Custom Text inside a custom Card</Text>
          </Card>
        </ThemeProvider>
      );
    })
  );

storiesOf('Docs|GlobalStyle', module)
  .addParameters(params)
  .add('Component', doc(GlobalStyleReadme));

storiesOf('Docs|Colors', module)
  .addParameters(params)
  .add('Color Palette', () => {
    const { colors } = theme;
    return (
      <Flex direction="row" wrap>
        {Object.keys(colors).map(key => (
          <Color name={key} color={colors[key]} />
        ))}
      </Flex>
    );
  });
