# Button

A button component. Extends `Card`

## Usage

```js
import { Button } from '@setlife/ui'
```

<!-- STORY -->

## Props

All `Card` props plus the following...

| Name        | Type                  | Default | Required | Description                            |
|-------------|-----------------------|---------|----------|----------------------------------------|
| onClick     | function              | -       | yes      | onClick handler                        |
| disabled    | bool                  | FALSE   | no       | set button to disabled                 |
| transparent | bool                  | FALSE   | no       | render transparent button              |
| fullWidth   | bool                  | FALSE   | no       | set width to 100% of container element |
| fontFamily  | string, number, array | -       | no       | -                                      |