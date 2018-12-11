import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import defaultTheme from './theme'

const ThemeProvider = ({
    theme,
    customBreakpoints,
    customColors,
    children
}) => {
    const breakpoints = customBreakpoints || defaultTheme.breakpoints
    const colors = customColors || defaultTheme.colors

    const newTheme = theme ? theme : {
        ...defaultTheme,
        breakpoints,
        colors,
    }

    return (
        <StyledThemeProvider theme={newTheme}>
            {children}
        </StyledThemeProvider>
    )
}

export default ThemeProvider