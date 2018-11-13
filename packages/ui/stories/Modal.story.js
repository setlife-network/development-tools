import React from 'react'
import { storiesOf } from '@storybook/react'
import { Flex, Button, Text, Modal, Toggle } from '../src/components'

storiesOf('Components|Modal', module)
    .addParameters({
        info: {
            propTablesExclude: [Flex, Button, Text],
            text: `
                You can toggle a Modal from a Button using the Toggle component.

                The Toggle component exposes the toggled state and toggle function via render props. You could even use this component for any toggling functionality

                #### Usage:
                ~~~js
                <Toggle>
                    {({ toggled, onToggle }) => (
                        <>
                            <Button onClick={onToggle}>Open the Modal</Button>
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
                ~~~
            `,
            inline: true
        }
    })
    .add(
        'Modal Component',
        () => (
            <Toggle>
                {({ toggled, onToggle }) => (
                    <>
                        <Button onClick={onToggle}>Open the Modal</Button>
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
        )
    )