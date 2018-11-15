# Image

Image component. Extends `Box`

## Usage

```js
import { Image } from '@setlife/ui'
```

<!-- STORY -->

In most cases, the only prop you'll need for sizing is `width` since the default `maxWidth` and `height` allow images to maintain their aspect ratio at different screen sizes. 

<!-- STORY -->

## Props

All `Box` props, html `img` attributes, plus the following...

| Name         | Type                  | Default | Required | Description |
|--------------|-----------------------|---------|----------|-------------|
| borderRadius | string, number, array | -       | no       | -           |
| src          | string                | -       | yes      | image src   |
| height       | bool                  | auto    | no       | -           |
| maxWidth     | string, number, array | 100%    | no       | -           |