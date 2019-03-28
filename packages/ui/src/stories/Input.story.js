import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input, Box } from '..';
import Readme from '../readme/Input.md';

storiesOf('Components|Input', module)
  .addParameters({
    readme: {
      content: Readme,
      DocPreview: ({ children }) => <Box padding={20}>{children}</Box>
    }
  })
  .add('Input Component', () => (
    <div>
      <Input marginRight={1} placeholder="Placeholder" />
      <Input marginRight={1} value="Input with text" />
      <Input marginRight={1} placeholder="Blue border" borderColor="blue" />
      <Input marginRight={1} value="Green text" color="green" />
      <Input marginRight={1} placeholder="disabled" disabled />
    </div>
  ));
