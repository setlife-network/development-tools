import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '..';
// import { Button } from '../../build'
import Readme from '../readme/Button.md';

storiesOf('Components|Button', module)
  .addParameters({
    readme: {
      content: Readme
    }
  })
  .add('Button Component', () => (
    <Button onClick={() => console.log('Clicked')}>Hello! I'm a Button</Button>
  ))
  .add('Colors', () => (
    <Fragment>
      <Button backgroundColor="blue" marginRight="2rem">
        Blue Button
      </Button>
      <Button backgroundColor="green" marginRight="2rem">
        Green Button
      </Button>
      <Button transparent color="purple" marginRight="2rem">
        Purple Button
      </Button>
    </Fragment>
  ))
  .add('Disabled', () => <Button disabled>Disabled Button</Button>);
