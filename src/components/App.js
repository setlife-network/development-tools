import React, { Component, Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles'
import Input from './Input'
import Text from './Text'

export default class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Fragment>
                    <Text size='2rem'>Sample text</Text>
                    <Input as='textarea' />
                </Fragment>
            </ThemeProvider>
        )
    }
}