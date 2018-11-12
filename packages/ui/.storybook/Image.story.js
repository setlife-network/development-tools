import React from 'react'
import { storiesOf } from '@storybook/react'
import { Image } from '../src/components'

storiesOf('Image', module)
    .add(
        'Image Component',
        () => (
            <Image
                src='https://i.imgflip.com/1qnbjv.jpg'
                width={200}
            />
        )
    )