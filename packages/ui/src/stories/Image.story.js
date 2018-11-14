import React from 'react'
import { storiesOf } from '@storybook/react'
import { Image } from '../'

storiesOf('Components|Image', module)
    .addParameters({
        info: {
            inline: true,
            text: 'Image component with 100% max-width and auto height for maintaining aspect ratio and responsiveness. Extends `Box`'
        }
    })
    .add(
        'Image Component',
        () => (
            <Image
                src='https://i.imgflip.com/1qnbjv.jpg'
                width={200}
            />
        )
    )