# GlobalStyle

A wrapper around `createGlobalStyle` from styled-components which creates a CSS reset. Using this component is completely optional and you are free to define global styles however you like. 

Whether you use `GlobalStyle`, `createClobalStyle`, or a pure css global stylesheet, here's a minimal recommended global styling

```css
html {
    /* Useful for scaling fonts and spacing */
    font-size: 8px;
    /* Can also be passed as a fontFamily prop or defined in a theme */
    font-family: 'Your Font';
}
```

## Usage

Use this component ONCE, preferably at the root level

```js
import { ThemeProvider, GlobalStyle } from '@setlife/ui'

render(
    <ThemeProvider>
        <>
            <App />
            <GlobalStyle />
        </>
    </ThemeProvider>,
    document.getElementById('app')
)
```

## Default Global Styling
```css
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

p, h1, h2, h3, h4, h5, h6 {
    -webkit-margin-before: 0px;
    -webkit-margin-after: 0px;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font: inherit;
}
```