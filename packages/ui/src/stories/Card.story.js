import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { Card, Text } from '../'
import Readme from './readme/Card.md'

storiesOf('Components|Card', module)
    .addDecorator(withDocs(Readme))
    .add(
        'Card Component',
        () => (
            <Card
                bg='white'
                border='solid 1px'
                borderColor='blue'
                borderRadius={4}
                height={140}
                width={140}
            />
        )
    )
    .add(
        'Background Images',
        () => (
            <Card
                backgroundImage='url(https://i.imgflip.com/1qnbjv.jpg)'
                backgroundRepeat='no-repeat'
                height={400}
            />
        )
    )
    .add(
        'Box Shadows',
        () => (
            <div>
                <Card mb='4rem' p='2rem' bg='white' depth={1}>
                    <Text>Shadow 1</Text>
                </Card>
                <Card mb='4rem' p='2rem' bg='white' depth={2}>
                    <Text>Shadow 2</Text>
                </Card>
                <Card mb='4rem' p='2rem' bg='white' depth={3}>
                    <Text>Shadow 3</Text>
                </Card>
                <Card mb='4rem' p='2rem' bg='white' depth={4}>
                    <Text>Shadow 4</Text>
                </Card>
                <Card mb='4rem' p='2rem' bg='white' depth={5}>
                    <Text>Shadow 5</Text>
                </Card>
            </div>
        )
    )