# Box

A low-level layout component for setting size, colors, margins, padding, and positioning.

All props are powered by [styled-system](https://styled-system.com)

## Usage

```js
import { Box } from '@setlife/ui'
```

<!-- STORY -->

When in doubt, use this component as your go to building block. All Setlife components extend Box (except for `Toggle` and `Modal`).

Pass an array or object for any styled-system prop to set mobile-first responsive styles through media queries defined in `theme.breakpoints`.

## Props

| Name              | Type                          | Default | Required | Description        |
| ----------------- | ----------------------------- | ------- | -------- | ------------------ |
| margin, m         | string, number, array, object | -       | no       | margin             |
| marginTop, mt     | string, number, array, object | -       | no       | margin-top         |
| marginRight, mr   | string, number, array, object | -       | no       | margin-right       |
| marginBottom, mb  | string, number, array, object | -       | no       | margin-bottom      |
| marginLeft, ml    | string, number, array, object | -       | no       | margin-left        |
| marginX, mx       | string, number, array, object | -       | no       | horizontal margins |
| marginY, my       | string, number, array, object | -       | no       | vertical margins   |
| padding, p        | string, number, array, object | -       | no       | padding            |
| paddingTop, pt    | string, number, array, object | -       | no       | padding-top        |
| paddingRight, pr  | string, number, array, object | -       | no       | padding-right      |
| paddingBottom, pb | string, number, array, object | -       | no       | padding-bottom     |
| paddingLeft, pl   | string, number, array, object | -       | no       | padding-left       |
| paddingX, px      | string, number, array, object | -       | no       | horizontal padding |
| paddingY, py      | string, number, array, object | -       | no       | vertical padding   |
| width             | string, number, array, object | -       | no       | -                  |
| height            | string, number, array, object | -       | no       | -                  |
| color             | string, number, array, object | -       | no       | text color         |
| backgroundColor   | string, number, array, object | -       | no       | background color   |
| flex              | string, number, array, object | -       | no       | css flex property  |
| minWidth          | string, number, array, object | -       | no       | -                  |
| maxWidth          | string, number, array, object | -       | no       | -                  |
| minHeight         | string, number, array, object | -       | no       | -                  |
| maxHeight         | string, number, array, object | -       | no       | -                  |
| display           | string, array, object         | -       | no       | -                  |
| position          | string, array, object         | -       | no       | -                  |
| top               | string, number, array, object | -       | no       | -                  |
| right             | string, number, array, object | -       | no       | -                  |
| bottom            | string, number, array, object | -       | no       | -                  |
| left              | string, number, array, object | -       | no       | -                  |
| opacity           | string, number, array, object | -       | no       | -                  |