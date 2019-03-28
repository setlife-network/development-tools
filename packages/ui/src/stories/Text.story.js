import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Text, Box } from '..';
import Readme from '../readme/Text.md';

storiesOf('Components|Text', module)
  .addParameters({
    readme: {
      content: Readme,
      DocPreview: ({ children }) => <Box padding={20}>{children}</Box>
    }
  })
  .add('Text Component', () => (
    <Fragment>
      <Text>Hello, I am a text component!</Text>
      <Text fontSize={24} fontWeight="bold" lineHeight={2} color="purple">
        Text with a lot of custom styling
      </Text>
    </Fragment>
  ))
  .add('Text Align', () => (
    <Fragment>
      <Text textAlign="left">Left align</Text>
      <Text textAlign="center">Center align</Text>
      <Text textAlign="right">Right align</Text>
    </Fragment>
  ))
  .add('Headings', () => (
    <Fragment>
      <Text variant="h1">H1</Text>
      <Text variant="h2">H2</Text>
      <Text variant="h3">H3</Text>
      <Text variant="h4">H4</Text>
      <Text variant="h5">H5</Text>
      <Text variant="h6">H6</Text>
    </Fragment>
  ));
