# Modal

Modal component powered by ReactDOM's `createPortal` and [react-transition-group](https://github.com/reactjs/react-transition-group)

## Usage

<!-- STORY -->

A `Modal` can be used on its own or with a `Toggle` for toggling visibility.

The Toggle component exposes the toggled state and toggle function via render props. You could even use this component for any toggling functionality

### Example of a toggling modal

```js
import { Modal, Toggle } from '@setlife/ui'

<Toggle>
    {({ toggled, onToggle }) => (
        <>
            // Pass the onToggle function to toggle modal visibility
            <Button onClick={onToggle}>Open the Modal</Button>
            // open and onClose are required for this to work
            <Modal open={toggled} onClose={onToggle}>
                <Flex direction='column' alignItems='center'>
                    <Text variant='h1' mb='1rem'>Hey, I'm a modal!</Text>
                    <Text mb='2rem'>Click the button or anywhere outside the modal to close me.</Text>
                    <Button fullWidth onClick={onToggle}>Close</Button>
                </Flex>
            </Modal>
        </>
    )}
</Toggle>
```

## Props

| Name    | Type     | Default | Required | Description                    |
| ------- | -------- | ------- | -------- | ------------------------------ |
| open    | bool     | FALSE   | no       | whether to show the modal      |
| onClose | function | -       | no       | function for closing the modal |