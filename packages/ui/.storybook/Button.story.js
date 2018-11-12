import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '../src/components'

storiesOf('Button', module)
    .add(
        'Button Component',
        () => (
            <Button onClick={() => console.log('Clicked')}>Hello</Button>
        ),
        {
            info: {
                text: `Use the <Button /> component to render a button. Extends <Card />`,
                inline: true
            }
        }
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