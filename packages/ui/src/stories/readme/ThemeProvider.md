A wrapper around `ThemeProvider` from `styled-components` for applying custom themes or the default theme defined in the `theme` module

```js
<ThemeProvider theme={theme}>
    <App />
</ThemeProvider>
```

In most cases, the default theme will suffice, although you may want to apply custom colors or breakpoints for the current project.

When defining your own color object, the only required keys are a `primary` and `overlay` color, which are used in the `Button` and `Modal` components, respectively.

```js
// defaut colors
const colors = {
    white: '#ffffff',
    background: '#F7F7F9',
    border: '#EEEFF2',
    lightGrey: '#CFD5DE',
    grey: '#718093',
    darkGrey: '#344768',
    purple: '#C15BEE',
    blue: '#00B2FF',
    green: '#02BE57',
    yellow: '#F4D163',
    red: '#CF242B',
    facebook: '#32529F',
    overlay: 'rgba(0,0,0,0.5)',
    transparent: 'transparent',
    primary: '#00B2FF'
}

// default breakpoints
const breakpoints = ['600px', '900px', '1200px', '1800px']

<ThemeProvider customColors={colors} customBreakpoints={breakpoints}>
    <App />
</ThemeProvider>
```

If you choose to provide your own theme entirely, the following structure is recommended to prevent component errors

```js
{
    baseRem: Number,
    breakpoints: [String],
    colors: {
        primary: String,
        overlay: String,
        ...customColors
    },
    fonts: String
    fontVariants: Object
}
```