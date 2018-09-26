import React, { Fragment } from 'react'
import App, {Container} from 'next/app'
import styled, { ThemeProvider } from 'styled-components'
import Link from 'next/link'

import { theme, Flex } from 'styles'
import Text from 'components/Text'

// global stylesheets
import 'assets/css/normalize.css'
import 'assets/css/fonts.css'

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <Container>
                <ThemeProvider theme={theme}>
                    <Fragment>
                        <Text variant='display1'>Welcome to Setlife</Text>
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
            </Container>
        )
    }
}