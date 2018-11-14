import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Text } from '../'

storiesOf('Components|Box', module)
    .addParameters({
        info: {
            propTablesExclude: [Text]
        }
    })
    .add(
        'Layout',
        () => (
            <Box
                height={200}
                width={200}
                position='relative'
                left='5rem'
                bg='blue'
            />
        ),
        {
            info: {
                text: `
                    A low-level component for setting size, colors, margins, padding, and positioning
    
                    All props are powered by [styled-system](https://github.com/jxnblk/styled-system/blob/master/docs/table.md)
                `,
                inline: true
            }
        }
    )
    .add('Responsive Props',
        () => (
            <Box height={200} bg='green' width={['100%', '75%', '50%']} />
        ),
        {
            notes: {
                markdown: 'Pass an array for any styled-system prop to set mobile-first responsive styles through media queries defined in `theme.breakpoints`'
            }
        }
    )
    .add('Spacing', () => (
        <>
            <Box
                minHeight={100}
                bg='purple'
                my='2rem'
                mr='50%'
                p='2rem'
            >
                <Text color='white'>Spacing is easy!</Text>
            </Box>
            <Box
                minHeight={100}
                bg='blue'
                my='2rem'
                ml='25%'
                p='4rem'
            >
                <Text color='white'>Seriously dude... so easy</Text>
            </Box>
        </>
    ))
    .add(
        'Overrides',
        () => (
            <Box
                height={200}
                width={200}
                bg='purple'
                css='cursor: pointer; transform: skewX(3deg);'
            />
        ),
        {
            notes: {
                markdown: 'Use the `css` prop for edge case styling'
            }
        }
    )