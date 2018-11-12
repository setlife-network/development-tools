import { createGlobalStyle } from 'styled-components'
import { themeGet } from 'styled-system'

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 8px;
        font-family: ${themeGet('fonts')};
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

    a,
    button,
    input,
    optgroup,
    select,
    textarea {
        color: inherit;
        font-family: inherit;
        font-size: 100%;
        margin: 0;
        border: none;
        outline: 0;
    }
`

export default GlobalStyle