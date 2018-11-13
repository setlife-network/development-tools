import React from 'react'
import { storiesOf } from '@storybook/react'
import { Text } from '../src/components'

storiesOf('Components|Text', module)
    .add(
        'Text Component',
        () => (
            <>
                <Text>Hello, I am a text component!</Text>
                <Text
                    size={24}
                    weight='bold'
                    my='1rem'
                    color='purple'
                    lineHeight={2}
                >
                    I can be customized in all sorts of ways.
                </Text>
            </>
        ),
        {
            info: {
                text: 'Low level component for all your typographical concerns. Extends <Box />',
                inline: true
            }
        }
    )
    .add(
        'Text Align',
        () => (
            <>
                <Text align='left'>Left align</Text>
                <Text align='center'>Center align</Text>
                <Text align='right'>Right align</Text>
            </>
        )
    )
    .add(
        'Headings',
        () => (
            <>
                <Text variant='display1'>Display1</Text>
                <Text variant='display2'>Display2</Text>
                <Text variant='display3'>Display3</Text>
                <Text variant='display4'>Display4</Text>
                <Text variant='h1'>H1</Text>
                <Text variant='h2'>H2</Text>
                <Text variant='h3'>H3</Text>
                <Text variant='h4'>H4</Text>
                <Text variant='h5'>H5</Text>
                <Text variant='h6'>H6</Text>
            </>
        ),
        {
            notes: {
                markdown: 'Pass a `variant` prop to apply preset text styles defined in `theme.fontVariants`'
            }
        }
    )