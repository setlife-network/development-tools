import React from 'react'
import App, { Container } from 'next/app'
import { ThemeProvider, GlobalStyle } from '@setlife/ui'

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
                    <ThemeProvider>
                        <>
                            <Component {...pageProps} />
                            <GlobalStyle />
                        </>
                    </ThemeProvider>
                </ReduxProvider>
            </Container>
        )
    }
}

export default withRedux(configureStore)(MyApp)