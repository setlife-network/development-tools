import React from 'react'
import { storiesOf } from '@storybook/react'
import { Input } from '../src'

storiesOf('Components|Input', module)
    .add(
        'Input Component',
        () => (
            <Input
                placeholder='Placeholder'
            />
        )
    )