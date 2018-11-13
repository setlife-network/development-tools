import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
import { withOptions } from '@storybook/addon-options'
import { withViewport } from '@storybook/addon-viewport'
import { ThemeProvider, GlobalStyle, Box } from '../src'

addDecorator(withInfo)
addDecorator(withNotes)
addDecorator(withViewport)
addDecorator(withOptions({
    name: 'Setlife Design System',
    hierarchyRootSeparator: /\|/
}))
addDecorator(story => (
    <ThemeProvider>
        <>
            <Box p='2rem'>{story()}</Box>
            <GlobalStyle />
        </>
    </ThemeProvider>
))

const req = require.context('../stories', true, /\.story\.js$/)

function loadStories() {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)