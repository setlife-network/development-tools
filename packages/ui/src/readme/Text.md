# Text

Typography component. Extends `Box`

## Usage

```js
import { Text } from '@setlife/ui'
```

<!-- STORY -->

Define the font family in one of the following ways:

1. Passing a `fontFamily` defined in `theme.fonts`
    ```js
        const theme = {
            fonts: {
                serif: 'athelas, georgia, times, serif',
                sansSerif:
                '-apple-system, roboto',
            }
        }

        <Text fontFamily='sansSerif' />
    ```
2. In a global css file
    ```css
        html {
            font-family: 'Roboto', sans-serif;
        }
    ```
3. Using the `GlobalStyle` component

Transform text into headings by passing a `variant` prop defined in `theme.fontVariants`. This will apply all styles for that variant.

The following code is an example of an `h1` element and applies a font size of 3.75rem and fontWeight of 600.

```js
<Text variant='h1'>Header</Text>
```

## Props

All `Box` props plus the following...

| Name          | Type                                                           | Default  | Required | Description                                                                       |
|---------------|----------------------------------------------------------------|----------|----------|-----------------------------------------------------------------------------------|
| fontFamily    | string                                                         | -        | no       | font family                                                                       |
| textAlign         | string, array                                                  | left     | no       | text align                                                                        |
| fontWeight        | string, number, array                                          | 400      | no       | font weight                                                                       |
| fontSize          | string, number, array                                          | 16px     | no       | font size                                                                         |
| lineHeight    | string, number, array                                          | 1.6      | no       | -                                                                                 |
| letterSpacing | string, number, array                                          | 0.025rem | no       | -                                                                                 |
| variant       | h1, h2, h3, h4, h5, h6 | -        | no       | applies text styles found in `theme.fontVariants` and changes underlying html tag |