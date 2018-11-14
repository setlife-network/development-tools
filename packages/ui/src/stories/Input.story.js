import React from 'react'
import { storiesOf } from '@storybook/react'
import { Input } from '../'

storiesOf('Components|Input', module)
    .add(
        'Input Component',
        () => (
            <Input
                placeholder='Placeholder'
            />
        )
    )