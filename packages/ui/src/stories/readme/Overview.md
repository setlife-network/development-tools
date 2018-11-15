# General Usage

Setlife UI componets are built with [styled-system](https://github.com/jxnblk/styled-system/blob/master/docs/table.md) and [styled-components](https://styled-components.com)

For all styled-system props not corresponding to theme values
- Numbers from 0-1 are converted to percentages
- Numbers greater than 1 are converted to pixel values
- String values are parsed as raw CSS values
- Arrays are converted into responsive widths

```js
// examples

// 50% width
<Box width={1/2} />

// width `256px`
<Box width={256} />

// width `'2rem'`
<Box width='2rem' />

// width `100%` on all viewports and `50%` from the smallest breakpoint and up
<Box width={[ 1, 1/2 ]} />
```