import React from 'react'
import { storiesOf } from '@storybook/react'
import { Card, Text, Box, Flex } from '../src/components'
import { ThemeProvider, GlobalStyle, theme } from '../src/styles'
import ThemeProviderInfo from './info/ThemeProvider.md'
import GlobalStyleInfo from './info/GlobalStyle.md'

const Color = ({ name, color }) => (
    <Card m='1rem' depth={1}>
        <Box bg={color} flex={1} width={120} height={120} />
        <Text variant='h4' align='center'>{name}</Text>
        <Text align='center'>{color}</Text>
    </Card>
)

storiesOf('Theming|ThemeProvider', module)
    .addParameters({
        info: {
            propTablesExclude: [Card, Text, Flex, Box],
            inline: true
        },
        options: {
            showAddonPanel: false
        }
    })
    .add(
        'Usage',
        () => (
            <ThemeProvider theme={theme}>
                <Text>Example theme</Text>
            </ThemeProvider>
        ),
        {
            info: {
                text: ThemeProviderInfo
            }
        }
    )
    .add(
        'GlobalStyle',
        () => (
            <ThemeProvider>
                <divdiv>
                    <div className='App'></div>
                    <GlobalStyle />
                </divdiv>
            </ThemeProvider>
        ),
        {
            info: {
                text: GlobalStyleInfo
            }
        }
    )
    .add(
        'Colors',
        () => {
            const { colors } = theme
            return (
                <Flex direction='row' wrap>
                    {Object.keys(colors).map(key => (
                        <Color name={key} color={colors[key]} />
                    ))}
                </Flex>
            )
        },
        {
            info: {
                inline: false
            }
        }
    )