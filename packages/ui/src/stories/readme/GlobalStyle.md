`<GlobalStyle />` is a wrapper around `createGlobalStyle` from styled-components which is used as a css reset.


Using this component is completely optional and you are free to define global styles in any way.

```css
html {
    font-size: ${themeGet('baseRem')}px;
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
```