import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { Button } from '../'
// import { Button } from '../../build'
import Readme from './readme/Button.md'

storiesOf('Components|Button', module)
    .addDecorator(withDocs(Readme))
    .add(
        'Button Component',
        () => (
            <Button onClick={() => console.log('Clicked')}>Hello! I'm a Button</Button>
        )
    )
    .add(
        'Colors',
        () => (
            <>
                <Button bg='blue' mr='2rem'>Blue Button</Button>
                <Button bg='green' mr='2rem'>Green Button</Button>
                <Button transparent color='purple' mr='2rem'>Purple Button</Button>
            </>
        )
    )
    .add(
        'Disabled',
        () => (
            <Button disabled>Disabled Button</Button>
        )
    )