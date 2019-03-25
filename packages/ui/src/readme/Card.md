# Card

Extended `Box` component for customizing borders, box-shadows, and background images.

## Usage
```js
import { Card } from '@setlife/ui'
```

<!-- STORY -->

Use exactly as you would a `Box` except with additional props.

Pass a `depth` prop to apply box shadows defined in `theme.shadows`

## Props

All `Box` props plus the following...

| Name               | Type                  | Default | Required | Description                                |
|--------------------|-----------------------|---------|----------|--------------------------------------------|
| border             | string, number, array | -       | no       | -                                          |
| borderTop          | string, number, array | -       | no       | -                                          |
| borderRight        | string, number, array | -       | no       | -                                          |
| borderBottom       | string, number, array | -       | no       | -                                          |
| borderLeft         | string, number, array | -       | no       | -                                          |
| borderColor        | string, number, array | -       | no       | -                                          |
| borderRadius       | string, number, array | -       | no       | -                                          |
| backgroundImage    | string, array         | -       | no       | -                                          |
| backgroundSize     | string, array         | -       | no       | -                                          |
| backgroundPosition | string, array         | -       | no       | -                                          |
| backgroundRepeat   | string, array         | -       | no       | -                                          |
| depth              | number                | -       | no       | apply box shadows based on `theme.shadows` |
