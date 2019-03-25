import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from '..';
import Readme from '../readme/Text.md';

storiesOf('Components|Text', module)
  .addParameters({
    readme: {
      content: Readme
    }
  })
  .add('Text Component', () => (
    <>
      <Text>Hello, I am a text component!</Text>
      <Text
        fontSize={24}
        fontWeight="bold"
        marginY="1rem"
        color="purple"
        lineHeight={2}
        css="cursor: pointer;"
      >
        Text with a lot of custom styling
      </Text>
    </>
  ))
  .add('Text Align', () => (
    <>
      <Text textAlign="left">Left align</Text>
      <Text textAlign="center">Center align</Text>
      <Text textAlign="right">Right align</Text>
    </>
  ))
  .add('Headings', () => (
    <>
      <Text variant="h1">H1</Text>
      <Text variant="h2">H2</Text>
      <Text variant="h3">H3</Text>
      <Text variant="h4">H4</Text>
      <Text variant="h5">H5</Text>
      <Text variant="h6">H6</Text>
    </>
  ));
