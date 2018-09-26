import React, { Fragment } from 'react'
import App, { Container } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Link from 'next/link'

import { theme, Flex } from 'styles'
import Text from 'components/Text'

// global stylesheets
import 'assets/css/normalize.css'
import 'assets/css/fonts.css'

// Redux setup
import { Provider as ReduxProvider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import configureStore from 'scripts/configureStore'

class MyApp extends App {
    render() {
        const { Component, pageProps, store } = this.props
        return (
            <Container>
                <ReduxProvider store={store}>
                    <ThemeProvider theme={theme}>
                        <Fragment>
                            <Text variant='display2'>Welcome to Setlife</Text>
                            <Flex row>
                                <Link href='/'>
                                    <Text padding='1rem'>Home</Text>
                                </Link>
                                <Link href='/about'>
                                    <Text padding='1rem'>About</Text>
                                </Link>
                                <Link href='/contact'>
                                    <Text padding='1rem'>Contact</Text>
                                </Link>
                            </Flex>
                            <Component {...pageProps} />
                        </Fragment>
                    </ThemeProvider>
                </ReduxProvider>
            </Container>
        )
    }
}

export default withRedux(configureStore)(MyApp)