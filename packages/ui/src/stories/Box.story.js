import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Text } from '..';
import Readme from '../readme/Box.md';

storiesOf('Components|Box', module)
  .addParameters({
    readme: {
      content: Readme
    }
  })
  .add('Layout', () => (
    <Box
      height={200}
      width={200}
      position="relative"
      left="5rem"
      backgroundColor="blue"
    />
  ))
  .add('Responsive Props', () => (
    <Box
      height={200}
      backgroundColor="green"
      width={{ d: '100%', sm: '75%' }}
    />
  ))
  .add('Spacing', () => (
    <Fragment>
      <Box minHeight={100} backgroundColor="purple" my="2rem" mr="50%" p="2rem">
        <Text color="white">Spacing is easy!</Text>
      </Box>
      <Box minHeight={100} backgroundColor="blue" my="2rem" ml="25%" p="4rem">
        <Text color="white">Seriously dude... so easy</Text>
      </Box>
    </Fragment>
  ))
  .add('Overrides', () => (
    <Box height={200} width={200} backgroundColor="purple" />
  ));
