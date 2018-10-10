import React, { Fragment } from 'react'
import App, { Container } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Link from 'next/link'

import { theme } from 'styles'
// import Text from 'components/Text'

// Redux setup
import { Provider as ReduxProvider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import configureStore from 'scripts/configureStore'

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return {
            pageProps
        }
    }
    render() {
        const { Component, pageProps, store } = this.props
        return (
            <Container>
                <ReduxProvider store={store}>
                    <ThemeProvider theme={theme}>
                        <Fragment>
                            {/* <Text variant='display2'>Welcome to Setlife</Text>
                            <Flex row>
                                <Link href='/'>
                                    <Text padding='1rem'>Home</Text>
                                </Link>
                                <Link href='/redux'>
                                    <Text padding='1rem'>Redux</Text>
                                </Link>
                                <Link href='/apollo'>
                                    <Text padding='1rem'>Apollo</Text>
                                </Link>
                                <Link href='/rest'>
                                    <Text padding='1rem'>REST Data Source</Text>
                                </Link>
                            </Flex> */}
                            <Component {...pageProps} />
                        </Fragment>
                    </ThemeProvider>
                </ReduxProvider>
            </Container>
        )
    }
}

export default withRedux(configureStore)(MyApp)