import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Link, Box } from '..';

storiesOf('Components|Link', module)
  // .addParameters({
  //   readme: {
  //     content: Readme,
  //     DocPreview: ({ children }) => <Box padding={20}>{children}</Box>
  //   }
  // })
  .add('Link', () => {
    <Link>I am a link</Link>;
  });
