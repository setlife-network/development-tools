# ThemeProvider

Use `ThemeProvider` from `styled-components` for applying custom themes or the default theme defined in the `theme` module

## Usage

Pass a `theme` object to enable theming.

```js
import { ThemeProvider } from 'styled-components';
import { theme } from '@setlife/ui';

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>;
```

### Overrides & Custom Themes

The default Setlife theme will suffice in most cases. If you are using your own theme, the following structure is recommended to prevent errors from theme-dependent props

```js
{
    breakpoints: [String],
    colors: Object,
    fonts: String | Object,
    fontVariants: Object,
}
```

## Further Reading

- [styled-system theming](https://github.com/jxnblk/styled-system/blob/master/docs/table.md)
- [styled-components ThemeProvider](https://www.styled-components.com/docs/advanced#theming)
