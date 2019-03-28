# Card

Extended `Box` component for customizing borders, box-shadows, and background images.

## Usage
```js
import { Card } from '@setlife/ui'
```

<!-- STORY -->

Pass a `depth` prop to apply box shadows defined in `theme.shadows`

## Props

All `Box` props plus the following...

| Name               | Type                          | Default | Required | Description                                |
| ------------------ | ----------------------------- | ------- | -------- | ------------------------------------------ |
| border             | string, number, array, object | -       | no       | -                                          |
| borderTop          | string, number, array, object | -       | no       | -                                          |
| borderRight        | string, number, array, object | -       | no       | -                                          |
| borderBottom       | string, number, array, object | -       | no       | -                                          |
| borderLeft         | string, number, array, object | -       | no       | -                                          |
| borderColor        | string, number, array, object | -       | no       | -                                          |
| borderRadius       | string, number, array, object | -       | no       | -                                          |
| borderWidth        | string, number, array, object | -       | no       | -                                          |
| borderStye         | string, number, array, object | -       | no       | -                                          |
| backgroundImage    | string, array                 | -       | no       | -                                          |
| backgroundSize     | string, array                 | -       | no       | -                                          |
| backgroundPosition | string, array                 | -       | no       | -                                          |
| backgroundRepeat   | string, array                 | -       | no       | -                                          |
| depth              | number                        | -       | no       | apply box shadows based on `theme.shadows` |
