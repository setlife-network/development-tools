import { createGlobalStyle } from 'styled-components'
import { themeGet } from 'styled-system'

const GlobalStyle = createGlobalStyle`
    html {
        font-size: ${themeGet('baseRem', 8)}px;
        font-family: ${themeGet('fonts', 'inherit')};
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
    }

    body {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    * {
        box-sizing: border-box;
    }

    a {
        color: inherit;
        background-color: transparent;
        text-decoration:none;
        cursor: pointer;
    }

    a:hover, a:active {
        color: inherit;
        outline: 0;
    }

    img {
        border: 0;
        border-style: none;
    }

    p, h1, h2, h3, h4, h5, h6 {
        -webkit-margin-before: 0px;
        -webkit-margin-after: 0px;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
        font: inherit;
    }
`

export default GlobalStyle