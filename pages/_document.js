import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static getInitialProps ({ renderPage }) {
        // create instance of ServerStyleSheet
        const sheet = new ServerStyleSheet()
        // retrieve styles from components in the page
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
        // extract styles as <style> tags
        const styleTags = sheet.getStyleElement()
        // pass styleTags as a prop
        return { ...page, styleTags }
    }
    render() {
        return (
            <html>
                <Head>
                    <title>Setlife Next</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}