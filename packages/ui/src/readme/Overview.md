# General Usage

Setlife UI componets are built with [styled-system](https://jxnblk.com/styled-system/) and [styled-components](https://styled-components.com)

The following rules apply for all styled-system props not linked to theme values:
- Numbers from 0-1 are converted to percentages
- Numbers greater than 1 are converted to pixel values
- String values are parsed as raw CSS values
- Arrays are converted into responsive widths

A comprehensive list of style props supported by styled-system can be found [here](https://github.com/jxnblk/styled-system/blob/master/docs/table.md)

## Examples

```js
// 50% width
<Box width={1/2} />

// 256px width
<Box width={256} />

// 2rem width
<Box width='2rem' />

// width 100% on all viewports and `50%` from the smallest breakpoint and up
<Box width={[ 1, 1/2 ]} />

// from theme.js
<Text font='Open Sans'>Theme based prop</Text>
```