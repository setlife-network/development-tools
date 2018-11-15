# Box

A low-level layout component for setting size, colors, margins, padding, and positioning.

All props are powered by [styled-system](https://github.com/jxnblk/styled-system/blob/master/docs/table.md)

## Usage

```js
import { Box } from '@setlife/ui'
```

<!-- STORY -->

When in doubt, use this component as your go to building block. All Setlife components extend Box (except for `Toggle` and `Modal`).

Pass an array for any styled-system prop to set mobile-first responsive styles through media queries defined in `theme.breakpoints`.



## Props

| Name      | Type                  | Default | Required | Description                |
|-----------|-----------------------|---------|----------|----------------------------|
| m         | string, number, array | -       | no       | margin                     |
| mt        | string, number, array | -       | no       | margin-top                 |
| mr        | string, number, array | -       | no       | margin-right               |
| mb        | string, number, array | -       | no       | margin-bottom              |
| ml        | string, number, array | -       | no       | margin-left                |
| mx        | string, number, array | -       | no       | horizontal margins         |
| my        | string, number, array | -       | no       | vertical margins           |
| p         | string, number, array | -       | no       | padding                    |
| pt        | string, number, array | -       | no       | padding-top                |
| pr        | string, number, array | -       | no       | padding-right              |
| pb        | string, number, array | -       | no       | padding-bottom             |
| pl        | string, number, array | -       | no       | padding-left               |
| px        | string, number, array | -       | no       | horizontal padding         |
| py        | string, number, array | -       | no       | vertical padding           |
| width     | string, number, array | -       | no       | -                          |
| height    | string, number, array | -       | no       | -                          |
| color     | string, number, array | -       | no       | text color                 |
| bg        | string, number, array | -       | no       | background color           |
| flex      | string, number, array | -       | no       | css flex property          |
| minWidth  | string, number, array | -       | no       | -                          |
| maxWidth  | string, number, array | -       | no       | -                          |
| minHeight | string, number, array | -       | no       | -                          |
| maxHeight | string, number, array | -       | no       | -                          |
| display   | string, array         | -       | no       | -                          |
| position  | string, array         | -       | no       | -                          |
| top       | string, number, array | -       | no       | -                          |
| right     | string, number, array | -       | no       | -                          |
| bottom    | string, number, array | -       | no       | -                          |
| left      | string, number, array | -       | no       | -                          |
| opacity   | string, number, array | -       | no       | -                          |
| css       | string                | -       | no       | Used for edge case styling |