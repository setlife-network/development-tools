import React from 'react'
import { Text, Toggle, Button, Modal } from '@setlife/ui'

export default () => (
    <>
        <Text variant='h1' color='blue'>Welcome to Setlife!</Text>
        <Toggle>
            {({ toggled, onToggle }) => (
                <>
                    <Button onClick={onToggle}>Open Modal</Button>
                    <Modal open={toggled} onClose={onToggle}>
                        <Text>Modal text</Text>
                    </Modal>
                </>
            )}
        </Toggle>
    </>
)