import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { Box, Text } from '..';
import Readme from './readme/Box.md';

storiesOf('Components|Box', module)
  .addDecorator(withDocs(Readme))
  .add('Layout', () => (
    <Box height={200} width={200} position="relative" left="5rem" bg="blue" />
  ))
  .add('Responsive Props', () => (
    <Box height={200} bg="green" width={['100%', '75%', '50%']} />
  ))
  .add('Spacing', () => (
    <>
      <Box minHeight={100} bg="purple" my="2rem" mr="50%" p="2rem">
        <Text color="white">Spacing is easy!</Text>
      </Box>
      <Box minHeight={100} bg="blue" my="2rem" ml="25%" p="4rem">
        <Text color="white">Seriously dude... so easy</Text>
      </Box>
    </>
  ))
  .add('Overrides', () => (
    <Box
      height={200}
      width={200}
      bg="purple"
      css="cursor: pointer; transform: skewX(3deg);"
    />
  ));
