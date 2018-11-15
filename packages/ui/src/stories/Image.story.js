import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { Image } from '../'
import Readme from './readme/Image.md'

storiesOf('Components|Image', module)
    .addDecorator(withDocs(Readme))
    .add(
        'Image Component',
        () => (
            <Image
                src='https://i.imgflip.com/1qnbjv.jpg'
                width={200}
            />
        )
    )