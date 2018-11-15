# ThemeProvider

A wrapper around `ThemeProvider` from `styled-components` for applying custom themes or the default theme defined in the `theme` module

## Usage

Pass a `theme` object to enable theming. 

```js
import { ThemeProvider, theme } from '@setlife/ui'

<ThemeProvider theme={theme}>
    <App />
</ThemeProvider>
```

### Overrides & Custom Themes

In most cases, the default theme will suffice, although you may want to apply custom colors or breakpoints for your current project.

The default Setlife theme will suffice in most cases, although you may override colors and breakpoints, or supply your own custom theme.

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
    overlay: 'rgba(0,0,0,0.5)'
}

// default breakpoints
const breakpoints = ['600px', '900px', '1200px', '1800px']

<ThemeProvider customColors={colors} customBreakpoints={breakpoints}>
    <App />
</ThemeProvider>
```

If you are using your own theme, the following structure is recommended

```js
{
    breakpoints: [String],
    colors: Object,
    fonts: String,
    fontVariants: Object,
}
```

## Props

## Further Reading
- [styled-system theming](https://github.com/jxnblk/styled-system/blob/master/docs/table.md)
- [styled-components ThemeProvider](https://www.styled-components.com/docs/advanced#theming)