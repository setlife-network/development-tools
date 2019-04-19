import React from 'react';
import { storiesOf } from '@storybook/react';
import { Link } from '..';

storiesOf('Components|Link', module).add('Link', () => (
  <Link target="_blank" href="https://google.com">
    I am a link
  </Link>
));
