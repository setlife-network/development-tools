import React from 'react';
import { storiesOf } from '@storybook/react';
import Readme from '../readme/Image.md';
import { Image } from '..';

storiesOf('Components|Image', module)
  .addParameters({
    readme: {
      content: Readme
    }
  })
  .add('Image Component', () => (
    <Image src="https://i.imgflip.com/1qnbjv.jpg" width={200} />
  ));
