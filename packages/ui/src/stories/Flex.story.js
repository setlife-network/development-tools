import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Readme from '../readme/Flex.md';
import { Box, Flex, Text } from '..';

storiesOf('Components|Flex', module)
  .addParameters({
    readme: {
      content: Readme,
      DocPreview: ({ children }) => <Box padding={20}>{children}</Box>
    }
  })
  .add('Flex Component', () => (
    <Flex direction="row" alignItems="center">
      <Box backgroundColor="purple" flex={1} padding={2}>
        <Text color="white">Flex</Text>
      </Box>
      <Box backgroundColor="blue" flex={1} padding={1}>
        <Text color="white">Flex</Text>
      </Box>
    </Flex>
  ))
  .add('Align', () => (
    <Fragment>
      <Flex direction="row" marginBottom={2}>
        <Flex
          direction="row"
          alignItems="flex-start"
          backgroundColor="lightGrey"
          height={120}
          marginRight={2}
        >
          <Flex height={60} backgroundColor="grey" padding={1} center>
            <Text color="white">Flex Start (Row)</Text>
          </Flex>
        </Flex>
        <Flex
          direction="row"
          alignItems="flex-end"
          backgroundColor="lightGrey"
          height={120}
          marginRight={2}
        >
          <Flex height={60} backgroundColor="grey" padding={1} center>
            <Text color="white">Flex End (Row)</Text>
          </Flex>
        </Flex>
        <Flex
          direction="row"
          alignItems="center"
          backgroundColor="lightGrey"
          height={120}
          marginRight={2}
        >
          <Flex height={60} backgroundColor="grey" padding={1} center>
            <Text color="white">Center (Row)</Text>
          </Flex>
        </Flex>
      </Flex>
    </Fragment>
  ))
  .add('Justify', () => (
    <Fragment>
      <Flex
        direction="row"
        justifyContent="flex-start"
        backgroundColor="lightGrey"
        padding={2}
        marginBottom={2}
      >
        <Flex
          height={60}
          backgroundColor="grey"
          center
          padding={2}
          marginRight={2}
        >
          <Text color="white">Flex Start</Text>
        </Flex>
        <Flex
          height={60}
          backgroundColor="grey"
          center
          padding={2}
          marginRight={2}
        >
          <Text color="white">Flex Start</Text>
        </Flex>
        <Flex
          height={60}
          backgroundColor="grey"
          center
          padding={2}
          marginRight={2}
        >
          <Text color="white">Flex Start</Text>
        </Flex>
      </Flex>
      <Flex
        direction="row"
        justifyContent="flex-end"
        backgroundColor="lightGrey"
        padding={2}
        marginBottom={2}
      >
        <Flex
          height={60}
          backgroundColor="grey"
          center
          padding={2}
          marginRight={2}
        >
          <Text color="white">Flex End</Text>
        </Flex>
        <Flex
          height={60}
          backgroundColor="grey"
          center
          padding={2}
          marginRight={2}
        >
          <Text color="white">Flex End</Text>
        </Flex>
        <Flex
          height={60}
          backgroundColor="grey"
          center
          padding={2}
          marginRight={2}
        >
          <Text color="white">Flex End</Text>
        </Flex>
      </Flex>
      <Flex
        direction="row"
        justifyContent="space-around"
        backgroundColor="lightGrey"
        padding={2}
        marginBottom={2}
      >
        <Flex
          height={60}
          backgroundColor="grey"
          center
          padding={2}
          marginRight={2}
        >
          <Text color="white">Space Around</Text>
        </Flex>
        <Flex
          height={60}
          backgroundColor="grey"
          center
          padding={2}
          marginRight={2}
        >
          <Text color="white">Space Around</Text>
        </Flex>
        <Flex
          height={60}
          backgroundColor="grey"
          center
          padding={2}
          marginRight={2}
        >
          <Text color="white">Space Around</Text>
        </Flex>
      </Flex>
      <Flex
        direction="row"
        justifyContent="space-between"
        backgroundColor="lightGrey"
        padding={2}
        marginBottom={2}
      >
        <Flex
          height={60}
          backgroundColor="grey"
          center
          padding={2}
          marginRight={2}
        >
          <Text color="white">Space Between</Text>
        </Flex>
        <Flex
          height={60}
          backgroundColor="grey"
          center
          padding={2}
          marginRight={2}
        >
          <Text color="white">Space Between</Text>
        </Flex>
        <Flex
          height={60}
          backgroundColor="grey"
          center
          padding={2}
          marginRight={2}
        >
          <Text color="white">Space Between</Text>
        </Flex>
      </Flex>
      <Flex
        direction="row"
        justifyContent="center"
        backgroundColor="lightGrey"
        padding={2}
        marginBottom={2}
      >
        <Flex
          height={60}
          backgroundColor="grey"
          center
          padding={2}
          marginRight={2}
        >
          <Text color="white">Center</Text>
        </Flex>
        <Flex
          height={60}
          backgroundColor="grey"
          center
          padding={2}
          marginRight={2}
        >
          <Text color="white">Center</Text>
        </Flex>
        <Flex
          height={60}
          backgroundColor="grey"
          center
          padding={2}
          marginRight={2}
        >
          <Text color="white">Center</Text>
        </Flex>
      </Flex>
    </Fragment>
  ))
  .add('Absolute Centering', () => (
    <Flex backgroundColor="lightGrey" center height={200}>
      <Text>Absolute centering can be this easy!</Text>
    </Flex>
  ))
  .add('Grid', () => (
    <Flex direction="row" flexWrapadding="wrap" margin={-2} width="100vw">
      <Box padding={1} width={1 / 2}>
        <Text color="white" backgroundColor="blue" textAlign="center">
          1/2
        </Text>
      </Box>
      <Box padding={1} width={1 / 2}>
        <Text color="white" backgroundColor="blue" textAlign="center">
          1/2
        </Text>
      </Box>
      <Box padding={1} width={1 / 3}>
        <Text color="white" backgroundColor="blue" textAlign="center">
          1/3
        </Text>
      </Box>
      <Box padding={1} width={1 / 3}>
        <Text color="white" backgroundColor="blue" textAlign="center">
          1/3
        </Text>
      </Box>
      <Box padding={1} width={1 / 3}>
        <Text color="white" backgroundColor="blue" textAlign="center">
          1/3
        </Text>
      </Box>
      <Box padding={1} width={1 / 4}>
        <Text color="white" backgroundColor="blue" textAlign="center">
          1/4
        </Text>
      </Box>
      <Box padding={1} width={1 / 4}>
        <Text color="white" backgroundColor="blue" textAlign="center">
          1/4
        </Text>
      </Box>
      <Box padding={1} width={1 / 4}>
        <Text color="white" backgroundColor="blue" textAlign="center">
          1/4
        </Text>
      </Box>
      <Box padding={1} width={1 / 4}>
        <Text color="white" backgroundColor="blue" textAlign="center">
          1/4
        </Text>
      </Box>
    </Flex>
  ));
