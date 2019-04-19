import React from 'react';
import { storiesOf } from '@storybook/react';

import { Section, Flex, Text } from '..';

storiesOf('Components|Section', module).add('Section', () => (
  <Flex direction="column">
    <Section backgroundColor="border" py={2} mb={2}>
      <Text align="center">Section</Text>
    </Section>
    <Section backgroundColor="blue" maxSize="sm" py={2} mb={2}>
      <Text align="center" color="white">
        Section with maxSize small
      </Text>
    </Section>
    <Section backgroundColor="green" maxSize="md" py={2} mb={2}>
      <Text align="center" color="white">
        Section with maxSize medium
      </Text>
    </Section>
  </Flex>
));
