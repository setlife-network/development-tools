# Flex

Extended `Box` component for flexbox layouts.

You can learn more about flexbox [here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/')

## Usage

```js
import { Flex } from '@setlife/ui'
```

<!-- STORY -->

## Props

All `Box` props plus the following...

| Name           | Type                                                                             | Default    | Required | Description                                                                                           |
|----------------|----------------------------------------------------------------------------------|------------|----------|-------------------------------------------------------------------------------------------------------|
| direction      | string, number, array                                                            | row        | no       | extablishes the main axis and direction                                                               |
| basis          | string, number, array                                                            | -          | no       | defines the default size of an element before the remaining space is distributed                      |
| wrap           | bool                                                                             | nowrap     | no       | allow container to wrap lines                                                                         |
| alignItems     | flex-start, flex-end, center, stretch                                            | stretch    | no       | defines the default behavior for how flex items are laid out along the cross axis on the current line |
| alignSelf      | auto, flex-start, flex-end, center, baseline, stretch                            | -          | no       | allows children to override container alignment                                                       |
| alignContent   | flex-start, flex-end, center, space-between, space-around, stretch               | stretch    | no       | aligns a flex container's lines within when there is extra space in the cross-axis                    |
| justifyContent | flex-start, flex-end, center, space-between, space-around, space-evenly, stretch | flex-start | no       | defines the alignment along the main axis                                                             |
| center         | bool                                                                             | FALSE      | no       | absolutely center elements within a container                                                         |
| order          | number, array                                                                    | -          | no       | control the order which a container's children appear                                                 |