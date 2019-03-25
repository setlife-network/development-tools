import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Flex, Button, Text, Modal, Toggle } from '..';
import Readme from '../readme/Modal.md';

storiesOf('Components|Modal', module)
  .addParameters({
    readme: {
      content: Readme
    }
  })
  .add('Modal Component', () => (
    <Toggle>
      {({ toggled, onToggle }) => (
        <Fragment>
          <Button onClick={onToggle}>Open the Modal</Button>
          <Modal open={toggled} onClose={onToggle}>
            <Flex direction="column" alignItems="center">
              <Text variant="h1" mb="1rem">
                Hey, I'm a modal!
              </Text>
              <Text mb="2rem">
                Click the button or anywhere outside the modal to close me.
              </Text>
              <Button fullWidth onClick={onToggle}>
                Close
              </Button>
            </Flex>
          </Modal>
        </Fragment>
      )}
    </Toggle>
  ));
