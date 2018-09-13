import React, { Component, Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles'
import Text from './Text'

export default class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Fragment>
                    <Text variant='display1'>Welcome to Setlife</Text>
                </Fragment>
            </ThemeProvider>
        )
    }
}